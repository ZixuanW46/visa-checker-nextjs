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
    <div className="bg-gray-300 rounded-[2rem] w-full h-full flex gap-4 p-8">
      <div className="flex flex-col gap-4 w-2/5 max-w-[27rem] overflow-y-auto max-h-[calc(100vh-7rem)]">
        <VisaPolicyContainer />
      </div>
      <div className="flex-1 min-w-0 flex flex-col items-center max-h-[calc(100vh-7rem)] overflow-y-auto">
        <div className="w-full h-[calc(100%-120px)] relative mb-8">
          <div className="absolute inset-0">
            <InteractiveMap
              width="100%"
              height="100%"
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
