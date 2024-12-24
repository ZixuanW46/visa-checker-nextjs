"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";
import { regionEligibilityVisaFree } from "./RegionEligibility";

interface InteractiveMapProps {
  regionEligibility: typeof regionEligibilityVisaFree;
  width?: number;
  height?: number;
}

const InteractiveMap = ({
  regionEligibility,
  width = 500,
  height = 500,
}: InteractiveMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string>("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const eligibilityColor = {
    eligible: {
      initialFill: "#98E1F2",
      hoverFill: "#98E1F2",
      tooltipMessage: "eligible",
      selectedFill: "#98E1F2",
      initialOpacity: "0.5",
      hoverOpacity: "0.6",
      selectedOpacity: "0.9",
    },
    "partially-eligible": {
      initialFill: "#F4594A",
      hoverFill: "#F4594A",
      tooltipMessage: "partially eligible",
      selectedFill: "#F4594A",
      initialOpacity: "0.5",
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
      initialFill: "#FD8613",
      hoverFill: "#FD8613",
      tooltipMessage: "region not found",
      selectedFill: "#FD8613",
      initialOpacity: "0.3",
      hoverOpacity: "0.6",
      selectedOpacity: "0.9",
    },
  } as const;

  useEffect(() => {
    const handleMouseLeaveWindow = () => {
      setHoveredRegion("");
      setHoveredPath(null);
    };

    window.addEventListener("mouseleave", handleMouseLeaveWindow);
    return () => {
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const name = target.getAttribute("name");
    if (name) {
      setHoveredRegion(name);
      setMousePosition({ x: event.clientX, y: event.clientY });
      setHoveredPath(name);
    }
  };

  const handleMouseLeave = () => {
    setHoveredRegion("");
    setHoveredPath(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredRegion) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const name = target.getAttribute("name");
    if (name) {
      setSelectedRegion(name);
    }
  };

  const getPathProps = (name: string) => {
    const eligibility = regionEligibility?.[
      name as keyof typeof regionEligibility
    ]
      ? regionEligibility[name as keyof typeof regionEligibility]
      : "not-found";
    const colors = eligibilityColor[eligibility];

    return {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      name: name,
      fill:
        selectedRegion === name
          ? colors.selectedFill
          : hoveredPath === name
          ? colors.hoverFill
          : colors.initialFill,
      fillOpacity:
        selectedRegion === name
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
    <div className="">
      <div>Currently hovering: {hoveredRegion}</div>

      <div onMouseMove={handleMouseMove}>
        <ChinaMap getPathProps={getPathProps} width={width} height={height} />
      </div>

      {hoveredRegion && (
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
          <div>{hoveredRegion}</div>
          <div>
            {
              eligibilityColor[
                regionEligibility?.[
                  hoveredRegion as keyof typeof regionEligibility
                ] ?? "ineligible"
              ].tooltipMessage
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
