"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { VisaPolicyContainer } from "./VisaPolicyCard";
import InteractiveMap from "./InteractiveMap";
import {
  regionEligibilityVisaFree,
  regionEligibility240Hour,
} from "./RegionEligibility";
import ProvinceInfoCard from "./ProvinceInfoCard";

interface ProvinceState {
  hoveredProvince: string | null;
  selectedProvince: string | null;
}

const ContentBox = () => {
  const searchParams = useSearchParams();
  const policy = searchParams.get("policy");
  const [provinceState, setProvinceState] = useState<ProvinceState>({
    hoveredProvince: null,
    selectedProvince: null,
  });

  const getRegionEligibility = () => {
    switch (policy) {
      case "visa-free":
        return regionEligibilityVisaFree;
      case "transit-240":
        return regionEligibility240Hour;
      default:
        return undefined;
    }
  };

  return (
    <div className="bg-gray-300 md:rounded-[2rem] w-full h-full md:flex gap-4 md:p-8 flex-grow-[5] flex-shrink-[1]">
      <div className="gap-4 w-2/5 max-w-[27rem] overflow-y-auto max-h-[calc(100vh-7rem)] hidden md:flex md:flex-col overflow-visible">
        <VisaPolicyContainer />
      </div>
      <div className="h-full md:flex-1 md:min-w-0 md:flex md:flex-col md:items-center md:overflow-y-auto">
        <div className="w-full md:h-[calc(100%-120px)] h-full relative md:mb-8">
          <div className="absolute inset-0">
            <InteractiveMap
              regionEligibility={getRegionEligibility()}
              onProvinceHover={(province) =>
                setProvinceState((prev) => ({
                  ...prev,
                  hoveredProvince: province,
                }))
              }
              onProvinceSelect={(province) =>
                setProvinceState((prev) => ({
                  ...prev,
                  selectedProvince: province,
                }))
              }
            />
          </div>
        </div>
        <ProvinceInfoCard
          hoveredProvince={provinceState.hoveredProvince}
          selectedProvince={provinceState.selectedProvince}
        />
      </div>
    </div>
  );
};

export default ContentBox;
