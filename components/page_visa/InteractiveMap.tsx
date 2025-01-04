"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

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
  const [hoveredLegendType, setHoveredLegendType] = useState<string | null>(
    null
  );
  const [touchDistance, setTouchDistance] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const eligibilityColor = {
    eligible: {
      initialFill: "#FD8613",
      hoverFill: "#FD8613",
      tooltipMessage: "eligible",
      selectedFill: "#FD8613",
      initialOpacity: "0.0",
      hoverOpacity: "0.60",
      selectedOpacity: "0.9",
    },
    "partially-eligible": {
      initialFill: "#4DBDBD",
      hoverFill: "#4DBDBD",
      tooltipMessage: "partially eligible",
      selectedFill: "#4DBDBD",
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
        x: (event.clientX - startPanPosition.x) * zoom,
        y: (event.clientY - startPanPosition.y) * zoom,
      });
    }
  };

  const handleClick = (
    event: React.MouseEvent<SVGPathElement> | React.TouchEvent<SVGPathElement>
  ) => {
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
        onTouchEnd: handleClick,
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
            : hoveredPath === name ||
              (hoveredLegendType === "eligible" &&
                colors.tooltipMessage === "eligible")
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
      onTouchEnd: handleClick,
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
          : hoveredPath === name || hoveredLegendType === eligibilityStatus
          ? colors.selectedOpacity
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

  const LegendItem = ({
    type,
    label,
  }: {
    type: keyof typeof eligibilityColor;
    label: string;
  }) => (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onMouseEnter={() => !isTouchDevice && setHoveredLegendType(type)}
      onMouseLeave={() => !isTouchDevice && setHoveredLegendType(null)}
      onClick={() => {
        if (isTouchDevice) {
          setHoveredLegendType(hoveredLegendType === type ? null : type);
        }
      }}
    >
      <div
        className="w-3 h-3 rounded-full transition-all duration-200"
        style={{
          backgroundColor:
            type === "eligible"
              ? hoveredLegendType === type
                ? eligibilityColor[type].initialFill
                : "#B2DDAA"
              : eligibilityColor[type].initialFill,
          opacity: hoveredLegendType === type ? 0.8 : 0.6,
          transform: hoveredLegendType === type ? "scale(1.3)" : "scale(1)",
        }}
      />
      <span
        className="text-xs transition-all duration-200"
        style={{
          fontWeight: hoveredLegendType === type ? 600 : 400,
          transform: hoveredLegendType === type ? "scale(1.1)" : "scale(1)",
        }}
      >
        {label}
      </span>
    </div>
  );

  const getTouchDistance = (touch1: React.Touch, touch2: React.Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();

    setHoveredLegendType(null);

    if (e.touches.length === 2) {
      setTouchDistance(getTouchDistance(e.touches[0], e.touches[1]));
    } else if (e.touches.length === 1) {
      setIsPanning(true);
      setStartPanPosition({
        x: e.touches[0].clientX - panPosition.x,
        y: e.touches[0].clientY - panPosition.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();

    if (e.touches.length === 2) {
      const newDistance = getTouchDistance(e.touches[0], e.touches[1]);

      if (touchDistance !== null) {
        const scale = newDistance / touchDistance;
        const newZoom = Math.min(Math.max(zoom * scale, 0.5), 2);
        setZoom(newZoom);
        setTouchDistance(newDistance);
      }
    } else if (e.touches.length === 1 && isPanning) {
      setPanPosition({
        x: e.touches[0].clientX - startPanPosition.x,
        y: e.touches[0].clientY - startPanPosition.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
    setTouchDistance(null);
  };

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden" tabIndex={-1}>
      <div className="absolute left-4 top-4 flex flex-col gap-4 z-10 items-center">
        <div className="flex flex-col bg-white rounded-full shadow-md items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomIn}
            className="rounded-t-full hover:bg-gray-200 h-10 w-12 group md:flex hidden"
          >
            <Plus className="h-5 w-5 group-hover:text-white mt-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleZoomOut}
            className="rounded-b-full hover:bg-gray-200 h-10 w-12 group md:flex hidden"
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full h-full cursor-grab active:cursor-grabbing mt-[-30%] md:mt-10"
        style={{
          transform: `scale(${zoom}) translate(${panPosition.x / zoom}px, ${
            panPosition.y / zoom
          }px)`,
          transformOrigin: "",
          transition: isPanning ? "none" : "transform 0.2s ease-out",
          touchAction: "none",
        }}
      >
        <ChinaMap getPathProps={getPathProps} width="100%" height="100%" />
      </div>

      <div className="absolute left-4 top-[48%] md:top-auto md:bottom-4 p-4 z-10">
        <div className="flex flex-col gap-2">
          <LegendItem type="eligible" label="Eligible" />
          <LegendItem type="partially-eligible" label="Partially Eligible" />
          <LegendItem type="ineligible" label="Ineligible" />
        </div>
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
