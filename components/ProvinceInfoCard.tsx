import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  regionEligibilityVisaFree,
  regionEligibility240Hour,
} from "./RegionEligibility";
import { useSearchParams } from "next/navigation";
import { AllPortsCard, AllScopeCard } from "./AllPortsCard";

interface ProvinceInfoCardProps {
  hoveredProvince: string | null;
  selectedProvince: string | null;
}

const MAX_CHARS = 50; // Adjust this threshold as needed

const ProvinceInfoCard = ({
  hoveredProvince,
  selectedProvince,
}: ProvinceInfoCardProps) => {
  const [showAllPorts, setShowAllPorts] = useState(false);
  const [showAllScope, setShowAllScope] = useState(false);
  const provinceToShow = (hoveredProvince || selectedProvince) as
    | keyof typeof regionEligibilityVisaFree
    | null;
  const searchParams = useSearchParams();
  const policy = searchParams.get("policy");

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

  const renderPorts = (ports: readonly string[]) => {
    const portsText = ports.join(", ");
    if (portsText.length > MAX_CHARS) {
      const truncatedText = portsText.slice(0, MAX_CHARS);
      return (
        <>
          <span className="">
            {truncatedText}...{" "}
            <button
              onClick={() => setShowAllPorts(true)}
              className="font-bold text-logo underline"
            >
              view all
            </button>
          </span>
          {provinceToShow && (
            <AllPortsCard
              isOpen={showAllPorts}
              onOpenChange={setShowAllPorts}
              provinceName={provinceToShow}
              ports={ports}
            />
          )}
        </>
      );
    }
    return <span className="font-bold">{portsText}</span>;
  };

  const renderScope = (scope: readonly string[] | string) => {
    const scopeText = Array.isArray(scope) ? scope.join(", ") : scope;
    if (scopeText.length > MAX_CHARS) {
      const truncatedText = scopeText.slice(0, MAX_CHARS);
      return (
        <>
          <span className="">
            {truncatedText}...{" "}
            <button
              onClick={() => setShowAllScope(true)}
              className="font-bold text-logo underline"
            >
              view all
            </button>
          </span>
          {provinceToShow && (
            <AllScopeCard
              isOpen={showAllScope}
              onOpenChange={setShowAllScope}
              provinceName={provinceToShow}
              scope={scopeText}
            />
          )}
        </>
      );
    }
    return <span className="font-bold">{scopeText}</span>;
  };

  return (
    <div className="flex gap-4 w-full h-full max-h-[200px]">
      <Card className="w-1/2">
        <div className="flex flex-col gap-2 justify-between h-full px-3 py-4">
          <div className="text-base font-bold">
            Travel Scope <span className="font-normal">in</span>{" "}
            <span className="italic">{provinceToShow || "???"}</span>
          </div>
          <div className="text-xs font-medium">
            {provinceToShow && getRegionEligibility()?.[provinceToShow] ? (
              <>
                You are allowed to travel in{" "}
                {renderScope(
                  getRegionEligibility()?.[provinceToShow]?.allowedScope || ""
                )}{" "}
              </>
            ) : (
              "Please select a region on the map to see its travel scope"
            )}
          </div>

          <div className="text-xs font-bold underline text-gray-200 text-end pt-2">
            {(() => {
              switch (policy) {
                case "transit-240":
                  return "240 Hour Transit Visa-Free policy";
                case "visa-free":
                  return "Visa-Free Entry policy";
                default:
                  return "";
              }
            })()}{" "}
          </div>
        </div>
      </Card>
      <Card className="w-1/2">
        <div className="flex flex-col gap-2 justify-between h-full px-3 py-4 overflow-y-auto">
          <div className="text-base font-bold">
            Ports of Entry/Exit <span className="font-normal">in</span>{" "}
            <span className="italic">{provinceToShow || "???"}</span>
          </div>
          <div className="text-xs font-medium">
            {provinceToShow && getRegionEligibility()?.[provinceToShow] ? (
              <>
                You are allowed to enter or exit China through the following
                ports in <span className="font-bold">{provinceToShow}</span>:{" "}
                {renderPorts(
                  getRegionEligibility()?.[provinceToShow].allowedPorts ?? []
                )}
              </>
            ) : (
              "Please select a region on the map to see its allowed ports of entry/exit"
            )}
          </div>

          <div className="text-xs font-bold text-gray-200 underline text-end pt-2">
            {(() => {
              switch (policy) {
                case "transit-240":
                  return "240 Hour Transit Visa-Free policy";
                case "visa-free":
                  return "Visa-Free Entry policy";
                default:
                  return "";
              }
            })()}{" "}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProvinceInfoCard;
