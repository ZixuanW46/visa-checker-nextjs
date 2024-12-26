"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";

interface InteractiveMapProps {
  width: string;
  height: string;
  regionEligibility?: {
    readonly [key: string]: {
      eligibility: "eligible" | "partially-eligible" | "ineligible";
      allowedScope: readonly string[];
      allowedPorts: readonly string[];
    };
  };
  onProvinceHover?: (province: string | null) => void;
  onProvinceSelect?: (province: string | null) => void;
}

const InteractiveMap = ({
  regionEligibility,
  width = "500px",
  height = "500px",
  onProvinceHover,
  onProvinceSelect,
}: InteractiveMapProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const eligibilityColor = {
    eligible: {
      initialFill: "#FFFFFF",
      hoverFill: "#FD8613",
      tooltipMessage: "eligible",
      selectedFill: "#FD8613",
      initialOpacity: "0.2",
      hoverOpacity: "0.5",
      selectedOpacity: "0.9",
    },
    "partially-eligible": {
      initialFill: "#F4594A",
      hoverFill: "#F4594A",
      tooltipMessage: "partially eligible",
      selectedFill: "#F4594A",
      initialOpacity: "0.4",
      hoverOpacity: "0.6",
      selectedOpacity: "0.8",
    },
    ineligible: {
      initialFill: "#B2B2B2",
      hoverFill: "#B2B2B2",
      tooltipMessage: "ineligible",
      selectedFill: "#B2B2B2",
      initialOpacity: "0.6",
      hoverOpacity: "0.7",
      selectedOpacity: "0.9",
    },
    "not-found": {
      initialFill: "#000000",
      hoverFill: "#000000",
      tooltipMessage: "region not found",
      selectedFill: "#000000",
      initialOpacity: "0.6",
      hoverOpacity: "0.8",
      selectedOpacity: "1",
    },
  } as const;

  useEffect(() => {
    const handleMouseLeaveWindow = () => {
      onProvinceHover?.(null);
      setHoveredPath(null);
    };

    window.addEventListener("mouseleave", handleMouseLeaveWindow);
    return () => {
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [onProvinceHover]);

  const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const name = target.getAttribute("name");
    if (name) {
      onProvinceHover?.(name);
      setMousePosition({ x: event.clientX, y: event.clientY });
      setHoveredPath(name);
    }
  };

  const handleMouseLeave = () => {
    onProvinceHover?.(null);
    setHoveredPath(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredPath) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const name = target.getAttribute("name");
    if (name) {
      setSelectedPath(name);
      onProvinceSelect?.(name);
    }
  };

  const getPathProps = (name: string) => {
    if (!regionEligibility) {
      const colors = eligibilityColor["eligible"];
      return {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
        name: name,
        fill:
          selectedPath === name
            ? colors.selectedFill
            : hoveredPath === name
            ? colors.hoverFill
            : colors.initialFill,
        fillOpacity:
          selectedPath === name
            ? colors.selectedOpacity
            : hoveredPath === name
            ? colors.hoverOpacity
            : colors.initialOpacity,
        stroke: "white",
        strokeWidth: "1.5",
        strokeLinejoin: "round" as const,
      };
    }

    const regionData = regionEligibility[name];
    const eligibilityStatus = regionData?.eligibility || "not-found";
    const colors = eligibilityColor[eligibilityStatus];

    return {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      name: name,
      fill:
        selectedPath === name
          ? colors.selectedFill
          : hoveredPath === name
          ? colors.hoverFill
          : colors.initialFill,
      fillOpacity:
        selectedPath === name
          ? colors.selectedOpacity
          : hoveredPath === name
          ? colors.hoverOpacity
          : colors.initialOpacity,
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinejoin: "round" as const,
    };
  };

  return (
    <div className="w-full">
      <div onMouseMove={handleMouseMove} className="w-full">
        <ChinaMap getPathProps={getPathProps} width={width} height={height} />
      </div>

      {hoveredPath && (
        <div
          style={{
            position: "fixed",
            left: mousePosition.x + 10,
            top: mousePosition.y + 10,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "14px",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <div>{hoveredPath}</div>
          {regionEligibility && (
            <div>
              {
                eligibilityColor[
                  regionEligibility[hoveredPath]?.eligibility ?? "not-found"
                ].tooltipMessage
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
