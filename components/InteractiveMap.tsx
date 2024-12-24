"use client";

import React, { useState, useEffect } from "react";
import ChinaMap from "./ChinaMap";

const InteractiveMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string>("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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

  const getPathProps = (name: string) => ({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    name: name,
    fill:
      selectedRegion === name
        ? "#4A90E2"
        : hoveredPath === name
        ? "#D95638"
        : "#FFFFFF",
    fillOpacity:
      selectedRegion === name ? "0.6" : hoveredPath === name ? "0.6" : "0.1",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinejoin: "round" as const,
  });

  return (
    <div className="">
      <div>Currently hovering: {hoveredRegion}</div>

      <div onMouseMove={handleMouseMove}>
        <ChinaMap getPathProps={getPathProps} />
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
          {hoveredRegion}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
