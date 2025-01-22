"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useMapStore } from "@/lib/store/mapStore";
import { SearchCity } from "./SearchCity";
import { useMediaQuery } from "@/components/hooks/user-media-query";

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
  const { selectedPath, setSelectedPath, zoom, panPosition, setZoomAndPan } =
    useMapStore();
  const [isPanning, setIsPanning] = useState(false);
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
      tooltipMessage: "accessible",
      selectedFill: "#FD8613",
      initialOpacity: "0.0",
      hoverOpacity: "0.60",
      selectedOpacity: "0.9",
    },
    "partially-eligible": {
      initialFill: "#4DBDBD",
      hoverFill: "#4DBDBD",
      tooltipMessage: "partially accessible",
      selectedFill: "#4DBDBD",
      initialOpacity: "0.5",
      hoverOpacity: "0.6",
      selectedOpacity: "0.8",
    },
    ineligible: {
      initialFill: "#B2B2B2",
      hoverFill: "#B2B2B2",
      tooltipMessage: "inaccessible",
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
      setZoomAndPan(zoom, {
        x: event.clientX - startPanPosition.x,
        y: event.clientY - startPanPosition.y,
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
                colors.tooltipMessage === "accessible")
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
    setZoomAndPan(Math.min(zoom + 0.2, 5), panPosition);
  };

  const handleZoomOut = () => {
    setZoomAndPan(Math.max(zoom - 0.2, 0.05), panPosition);
  };

  const handleReset = () => {
    setZoomAndPan(1, { x: 0, y: 0 });
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
        setZoomAndPan(newZoom, panPosition);
        setTouchDistance(newDistance);
      }
    } else if (e.touches.length === 1 && isPanning) {
      setZoomAndPan(zoom, {
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

  const moveLegend = useMediaQuery(
    "((max-height: 676px) and (min-width: 768px)) or (max-width: 767px)"
  );

  return (
    <div className="w-full h-full relative overflow-hidden" tabIndex={-1}>
      <div className="absolute left-4 flex flex-col gap-4 z-10 items-center">
        <div className="absolute left-0 top-0 z-[1000] hidden md:block">
          <SearchCity />
        </div>
        <div className="absolute flex flex-col items-center gap-2 left-0 top-4 md:top-[4.5rem]">
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
            className="bg-white hover:bg-gray-200 group rounded-full h-[3.2rem] w-[3.2rem]"
          >
            <RotateCcw className="h-5 w-5 text-black group-hover:text-white" />
          </Button>
        </div>
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

      <div
        className={`absolute top-[1rem] md:top-auto md:bottom-0 p-2 z-10 ${
          moveLegend ? "right-2" : "left-2"
        }`}
      >
        <div className="flex flex-col gap-2 bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <LegendItem type="eligible" label="Fully Accessible" />
          <LegendItem type="partially-eligible" label="Partially Accessible" />
          <LegendItem type="ineligible" label="Inaccessible" />
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
