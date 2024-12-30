"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";

interface InteractiveMapProps {
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
  onProvinceHover,
  onProvinceSelect,
}: InteractiveMapProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [startPanPosition, setStartPanPosition] = useState({ x: 0, y: 0 });

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

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsPanning(true);
    setStartPanPosition({
      x: event.clientX - panPosition.x,
      y: event.clientY - panPosition.y,
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredPath) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    if (isPanning) {
      setPanPosition({
        x: event.clientX - startPanPosition.x,
        y: event.clientY - startPanPosition.y,
      });
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

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPanPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsPanning(false);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute left-4 top-4 flex flex-col gap-4 z-10 items-center">
        <div className="flex flex-col bg-white rounded-full shadow-md items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomIn}
            className="rounded-t-full hover:bg-gray-200 h-10 w-12 group"
          >
            <Plus className="h-5 w-5 group-hover:text-white mt-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomOut}
            className="rounded-b-full hover:bg-gray-200 h-10 w-12 group"
          >
            <Minus className="h-5 w-5 group-hover:text-white mb-1" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleReset}
          className="bg-themePrimary hover:bg-black group rounded-full h-[3.2rem] w-[3.2rem]"
        >
          <RotateCcw className="h-5 w-5 text-white" />
        </Button>
      </div>

      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{
          transform: `scale(${zoom}) translate(${panPosition.x / zoom}px, ${
            panPosition.y / zoom
          }px)`,
          transformOrigin: "center",
          transition: isPanning ? "none" : "transform 0.2s ease-out",
        }}
      >
        <ChinaMap getPathProps={getPathProps} width="100%" height="100%" />
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
          <div>
            {hoveredPath}
            {regionEligibility &&
              ` [${
                eligibilityColor[
                  regionEligibility[hoveredPath]?.eligibility ?? "not-found"
                ].tooltipMessage
              }]`}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
