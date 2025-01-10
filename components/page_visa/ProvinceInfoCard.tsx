import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  regionEligibilityVisaFree,
  regionEligibility240Hour,
} from "./RegionEligibility";
import { useSearchParams } from "next/navigation";
import { AllPortsCard, AllScopeCard } from "./AllPortsCard";
import MobilePolicyCards from "./MobilePolicyCards";

// Add this type definition at the top of the file
type RegionEligibility = {
  [key: string]: {
    eligibility?: "eligible" | "partially-eligible" | "ineligible";
    allowedScope: readonly string[] | string;
    allowedPorts: readonly string[];
  };
};

interface ProvinceInfoCardProps {
  hoveredProvince: string | null;
  selectedProvince: string | null;
}

const TruncatedText = ({
  text,
  onViewAll,
}: {
  text: string;
  onViewAll: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [truncatedText, setTruncatedText] = useState(text);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const truncate = () => {
      const container = containerRef.current;
      if (!container) return;

      // Create a temporary element to test the text
      const testDiv = document.createElement("div");
      testDiv.style.cssText = window.getComputedStyle(container).cssText;
      testDiv.style.position = "absolute";
      testDiv.style.visibility = "hidden";
      testDiv.style.width = `${container.clientWidth}px`;
      testDiv.style.whiteSpace = "pre-line";
      container.appendChild(testDiv);

      // Split into words and gradually reduce until it fits
      const words = text.split(" ");
      let currentText = "";
      let i = 0;

      while (i < words.length) {
        const nextText = currentText + (currentText ? " " : "") + words[i];
        testDiv.textContent = nextText + "... view all";

        if (testDiv.scrollHeight > container.clientHeight) {
          currentText = currentText + "...";
          break;
        }

        currentText = nextText;
        i++;
      }

      // Clean up
      container.removeChild(testDiv);

      setTruncatedText(currentText);
      setIsOverflowing(currentText !== text);
    };

    truncate();
    window.addEventListener("resize", truncate);
    return () => window.removeEventListener("resize", truncate);
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="flex-1 min-w-0 overflow-y-auto flex items-center whitespace-pre-line"
    >
      <div>
        {truncatedText}
        {isOverflowing && (
          <button
            onClick={onViewAll}
            className="font-bold text-logo underline ml-1"
          >
            view all
          </button>
        )}
      </div>
    </div>
  );
};

const ProvinceInfoCard = ({
  hoveredProvince,
  selectedProvince,
}: ProvinceInfoCardProps) => {
  const [showAllPorts, setShowAllPorts] = useState(false);
  const [showAllScope, setShowAllScope] = useState(false);
  const provinceToShow = (hoveredProvince || selectedProvince) as string | null;
  const searchParams = useSearchParams();
  const policy = searchParams.get("policy");

  const getRegionEligibility = (): RegionEligibility | undefined => {
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
    // Check if region is ineligible (empty or no ports)
    if (!ports || ports.length === 0) {
      const ineligibleText = `You are NOT allowed to travel to ${provinceToShow} under this visa policy.`;
      return (
        <>
          <TruncatedText
            text={ineligibleText}
            onViewAll={() => setShowAllPorts(true)}
          />
          {provinceToShow && (
            <AllPortsCard
              isOpen={showAllPorts}
              onOpenChange={setShowAllPorts}
              provinceName={provinceToShow}
              ports={ineligibleText}
            />
          )}
        </>
      );
    }

    // Special case for visa-free policy
    if (policy === "visa-free") {
      const visaFreeText =
        "Under this visa policy, you are allowed to enter or exit China through any sea, road and air port open to foreign nationals.";
      return (
        <>
          <TruncatedText
            text={visaFreeText}
            onViewAll={() => setShowAllPorts(true)}
          />
          {provinceToShow && (
            <AllPortsCard
              isOpen={showAllPorts}
              onOpenChange={setShowAllPorts}
              provinceName={provinceToShow}
              ports={visaFreeText}
            />
          )}
        </>
      );
    }

    // Original logic for other policies
    const portsText =
      provinceToShow === "Guangdong"
        ? `Exits available at all open ports across the Guangdong province, however entering China only allowed through the following ports:\n\n${ports.join(
            ", "
          )}`
        : `You are allowed to enter or exit China through the following ports in ${provinceToShow}:\n\n${ports.join(
            ", "
          )}`;

    return (
      <>
        <TruncatedText
          text={portsText}
          onViewAll={() => setShowAllPorts(true)}
        />
        {provinceToShow && (
          <AllPortsCard
            isOpen={showAllPorts}
            onOpenChange={setShowAllPorts}
            provinceName={provinceToShow}
            ports={portsText}
          />
        )}
      </>
    );
  };

  const renderScope = (scope: readonly string[] | string) => {
    // If scope is empty or undefined, region is ineligible
    if (!scope || (Array.isArray(scope) && scope.length === 0)) {
      const ineligibleText = `You are NOT allowed to travel within the ${
        provinceToShow || ""
      } region under this visa policy.`;
      return (
        <>
          <TruncatedText
            text={ineligibleText}
            onViewAll={() => setShowAllScope(true)}
          />
          {provinceToShow && (
            <AllScopeCard
              isOpen={showAllScope}
              onOpenChange={setShowAllScope}
              provinceName={provinceToShow}
              scope={ineligibleText}
            />
          )}
        </>
      );
    }

    const formatScopeList = (scope: readonly string[] | string): string => {
      if (typeof scope === "string") return scope;
      if (scope.length === 1) return scope[0];
      if (scope.length === 2) return `${scope[0]} and ${scope[1]}`;
      return `${scope.slice(0, -1).join(", ")} and ${scope[scope.length - 1]}`;
    };

    const eligibility = provinceToShow
      ? getRegionEligibility()?.[provinceToShow]?.eligibility
      : undefined;
    const scopeText =
      eligibility === "partially-eligible"
        ? `You are only allowed to travel within ${formatScopeList(scope)}`
        : `You are allowed to travel within ${formatScopeList(scope)}`;

    return (
      <>
        <TruncatedText
          text={scopeText}
          onViewAll={() => setShowAllScope(true)}
        />
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
  };

  return (
    <div className="flex flex-col md:flex-row absolute md:static bottom-4 gap-4 px-4 md:px-0 w-full md:h-1/4 md:max-h-[250px] md:min-h-[150px] z-10">
      <Card className="md:w-1/2 ">
        <div className="flex flex-col gap-2 justify-between h-full px-3 py-4 overflow-y-auto">
          <div className="text-base font-bold">
            Travel Scope <span className="font-normal">in</span>{" "}
            <span className="italic">{provinceToShow || "???"}</span>
          </div>
          <div className="text-xs flex flex-col font-medium flex-1 min-w-0 overflow-y-hidden justify-center min-h-4">
            {!policy ? (
              "Please select a visa policy from above to view travel scope information"
            ) : provinceToShow && getRegionEligibility()?.[provinceToShow] ? (
              <>
                {renderScope(
                  getRegionEligibility()?.[provinceToShow]?.allowedScope || ""
                )}
              </>
            ) : (
              "Please select a region on the map to see its travel scope"
            )}
          </div>

          <div className="text-[0.6rem] font-bold text-gray-200 pt-2">
            {policy && (
              <span className="rounded-full ring-1 ring-offset-2 ring-gray-200 px-1">
                {(() => {
                  switch (policy) {
                    case "transit-240":
                      return "240 Hour Transit Visa-Free policy";
                    case "visa-free":
                      return "Visa-Free Entry policy";
                    default:
                      return "";
                  }
                })()}
              </span>
            )}
          </div>
        </div>
      </Card>
      <Card className="md:w-1/2">
        <div className="flex flex-col gap-2 justify-between h-full px-3 py-4 overflow-y-auto">
          <div className="text-base font-bold">
            Ports of Entry/Exit <span className="font-normal">in</span>{" "}
            <span className="italic">{provinceToShow || "???"}</span>
          </div>
          <div className="text-xs flex flex-col font-medium flex-1 min-w-0 overflow-y-hidden justify-center min-h-4">
            {!policy ? (
              "Please select a visa policy from above to view permitted ports of entry/exit"
            ) : provinceToShow && getRegionEligibility()?.[provinceToShow] ? (
              <>
                {renderPorts(
                  getRegionEligibility()?.[provinceToShow].allowedPorts ?? []
                )}
              </>
            ) : (
              "Please select a region on the map to see its allowed ports of entry/exit"
            )}
          </div>

          <div className="text-[0.6rem] font-bold text-gray-200 pt-2">
            {policy && (
              <span className="rounded-full ring-1 ring-offset-2 ring-gray-200 px-1">
                {(() => {
                  switch (policy) {
                    case "transit-240":
                      return "240 Hour Transit Visa-Free policy";
                    case "visa-free":
                      return "Visa-Free Entry policy";
                    default:
                      return "";
                  }
                })()}
              </span>
            )}
          </div>
        </div>
      </Card>
      <MobilePolicyCards />
    </div>
  );
};

export default ProvinceInfoCard;
