"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Check, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import {
  countryEligibilityVisaFree,
  countryEligibility240HourVisa,
  countryCodeToName,
} from "./CountryEligibility";

import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";

import { allChinaPorts, allowedPorts240Hour } from "./RegionEligibility";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    status?: "eligible" | "ineligible";
  }
>(({ className, children, status, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-start gap-2 text-base font-bold transition-all hover:underline hover:text-red text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-8 w-8 shrink-0 text-muted-foreground transition-transform duration-200 stroke-1" />
      {children}
    </AccordionPrimitive.Trigger>
    {status === "ineligible" && (
      <Badge variant="gray" className="rounded-[50px] h-8">
        <span className="text-[0.7rem] font-bold py-[2px] px-2">
          <span>Ineligible</span>
        </span>
      </Badge>
    )}
    {status === "eligible" && (
      <Badge variant="logo" className="rounded-[50px] h-8">
        <span className="text-[0.7rem] font-bold py-[2px] px-1">
          <span>Could be eligible</span>
        </span>
      </Badge>
    )}
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-visible text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0 overflow-visible", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

interface VisaPolicyCardProps {
  children: React.ReactNode;
  status?: "eligible" | "ineligible";
  title?: string;
  value: string;
  currentValue?: string;
  onValueChange?: (value: string) => void;
}

const VisaPolicyCard = ({
  children,
  status = "eligible",
  title = "Visa Free Entry",
  value,
  currentValue,
  onValueChange,
}: VisaPolicyCardProps) => {
  const [showPolicyDetails, setShowPolicyDetails] = React.useState(true);

  return (
    <Card className="bg-transparent md:bg-white rounded-none border-none md:border shadow-none md:shadow-lg px-5 py-4 md:rounded-2xl overflow-visible">
      <Accordion
        type="single"
        collapsible
        value={currentValue}
        onValueChange={onValueChange}
      >
        <AccordionItem value={value}>
          <AccordionTrigger status={status}>{title}</AccordionTrigger>
          <AccordionContent className="space-y-5">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const props = child.props as { showPolicyDetails?: boolean };
                if ("showPolicyDetails" in props) {
                  return React.cloneElement(
                    child as React.ReactElement<{ showPolicyDetails: boolean }>,
                    { showPolicyDetails }
                  );
                }
                return child;
              }
              return child;
            })}
            <div className="flex gap-2 items-center">
              <Switch
                id="show-policy-details"
                checked={showPolicyDetails}
                onCheckedChange={setShowPolicyDetails}
              />
              <Label
                htmlFor="show-policy-details"
                className="text-xs font-bold"
              >
                Show original policy details
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

const InfoSource = ({
  sourceName,
  sourceUrl,
}: {
  sourceName: string;
  sourceUrl: string;
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="text-[0.6rem] bg-gray-200 rounded-full px-2 py-[0.01rem] text-white  hover:bg-gray-100 flex items-center gap-1"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => window.open(sourceUrl, "_blank")}
      >
        <span className="">source</span>
      </button>

      {isHovering && (
        <div className="fixed transform -translate-x-1/2 -translate-y-[140%] w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-[100]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-extrabold truncate">
                {sourceName}
              </div>
              <div className="text-xs text-gray-500 font-bold truncate">
                {new URL(sourceUrl).hostname}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface VisaPolicyNationalityProps {
  eligibleCountries: readonly string[]; // Change this line
  visaType: "visa-free" | "transit-240";
  showPolicyDetails: boolean;
}

const VisaPolicyNationality = ({
  eligibleCountries,
  visaType,
  showPolicyDetails,
}: VisaPolicyNationalityProps) => {
  const searchParams = useSearchParams();
  const nationalities = searchParams.get("nationality")?.split(",") || [];

  return (
    <div className="flex flex-col gap-2 mt-4 overflow-visible">
      <p className="text-sm font-bold">Nationality 🇺🇳</p>
      {nationalities.length > 0 ? (
        <>
          <p className="text-xs font-bold">
            Your nationality&apos;s eligibility for this visa policy:
          </p>
          <div className="flex gap-2 my-1 flex-wrap">
            {nationalities.map((countryCode) => {
              const isEligible = eligibleCountries.includes(countryCode);
              const countryName = countryCodeToName[countryCode] || countryCode;

              return (
                <Badge
                  key={countryCode}
                  variant={isEligible ? "logo" : "gray"}
                  className="rounded-[50px] h-6"
                >
                  {isEligible ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[3] rotate-45" />
                  )}
                  <span className="text-[0.7rem] font-bold py-[2px] px-1">
                    {countryName}
                  </span>
                </Badge>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select your nationality to check eligibility
        </p>
      )}
      {showPolicyDetails && (
        <div className="text-xs font-normal">
          {visaType === "visa-free" ? (
            <span>
              Effective until Dec 31st 2025, thirty-eight nationalities
              worldwide are eligible for the 30-day visa-free entry to China.{" "}
              <InfoSource
                sourceName="Ministry of Foreign Affairs of the People's Republic of China"
                sourceUrl="https://www.mfa.gov.cn/wjbzwfwpt/kzx/tzgg/202411/t20241122_11531285.html"
              />
            </span>
          ) : (
            <>
              Individuals from 54 eligible countries are eligible for the
              240-hour transit visa to China.{" "}
              <InfoSource
                sourceName="China National Immigration Administration"
                sourceUrl="https://www.nia.gov.cn/n897453/c1688899/content.html"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

const VisaPolicyFlight = ({
  showPolicyDetails,
}: {
  showPolicyDetails: boolean;
}) => {
  const searchParams = useSearchParams();
  const inboundOrigin = searchParams.get("inboundOrigin");
  const outboundDestination = searchParams.get("outboundDestination");

  const isRequirementMet =
    inboundOrigin &&
    outboundDestination &&
    inboundOrigin !== outboundDestination;

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold">Flight ✈️</p>
        {inboundOrigin && outboundDestination && (
          <span
            className={`${
              isRequirementMet ? "bg-green-600" : "bg-red"
            } text-white px-[.5rem] rounded-full text-[0.6rem] font-bold`}
          >
            {isRequirementMet ? "REQUIREMENT MET" : "REQUIREMENT NOT MET"}
          </span>
        )}
      </div>
      {inboundOrigin ? (
        outboundDestination ? (
          inboundOrigin !== outboundDestination ? (
            <p className="text-xs font-bold">
              Your inbound flight origin (
              {countryCodeToName[inboundOrigin] || inboundOrigin}) is different
              from your outbound flight destination (
              {countryCodeToName[outboundDestination] || outboundDestination}).
              This fits the policy requirements.
            </p>
          ) : (
            <p className="text-xs font-bold">
              Your inbound flight origin (
              {countryCodeToName[inboundOrigin] || inboundOrigin}) is not
              different from your outbound flight destination (
              {countryCodeToName[outboundDestination] || outboundDestination}).
            </p>
          )
        ) : (
          <p className="text-xs font-bold">
            Your outbound flight must NOT first land in{" "}
            {countryCodeToName[inboundOrigin] || inboundOrigin}, either as a
            transit or as a final destination.
          </p>
        )
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select your inbound flight origin to see requirements for
          onward flight tickets.
        </p>
      )}
      {showPolicyDetails && (
        <div className="text-xs font-normal">
          On entering China, you must hold a valid onward ticket to a third
          country or region (different from your flight origin when travelling
          to China).{" "}
          <InfoSource
            sourceName="China Visa Application Service Center"
            sourceUrl="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html"
          />
        </div>
      )}
    </div>
  );
};

interface VisaPolicyDurationProps {
  showPolicyDetails: boolean;
  visaType: "visa-free" | "transit-240";
}

const VisaPolicyDuration = ({
  showPolicyDetails,
  visaType,
}: VisaPolicyDurationProps) => {
  const searchParams = useSearchParams();
  const inboundDate = searchParams.get("inboundDate");
  const outboundDate = searchParams.get("outboundDate");

  const calculateDeadline = (
    date: string,
    type: "visa-free" | "transit-240"
  ) => {
    const entryDate = new Date(date);

    if (type === "visa-free") {
      // For visa-free: 30 calendar days from entry date until 24:00
      const deadline = new Date(entryDate);
      deadline.setDate(deadline.getDate() + 29);
      deadline.setHours(23, 59, 59);
      return deadline;
    } else {
      // For 240h transit: Count from midnight of next day, 10 days (240 hours)
      const startCount = new Date(entryDate);
      startCount.setDate(startCount.getDate());
      startCount.setHours(0, 0, 0);

      const deadline = new Date(startCount);
      deadline.setDate(deadline.getDate() + 10);
      deadline.setHours(23, 59, 59);
      return deadline;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour12: true,
    });
  };

  const formatDateNoTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isRequirementMet = React.useMemo(() => {
    if (!inboundDate || !outboundDate) return false;
    const deadline = calculateDeadline(inboundDate, visaType);
    const outDate = new Date(outboundDate);
    return outDate <= deadline;
  }, [inboundDate, outboundDate, visaType]);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold">Duration 🕒</p>
        {inboundDate && outboundDate && (
          <span
            className={`${
              isRequirementMet ? "bg-green-600" : "bg-red"
            } text-white px-[.5rem] rounded-full text-[0.6rem] font-bold`}
          >
            {isRequirementMet ? "REQUIREMENT MET" : "REQUIREMENT NOT MET"}
          </span>
        )}
      </div>
      {inboundDate ? (
        outboundDate ? (
          isRequirementMet ? (
            <p className="text-xs font-bold">
              Your planned departure date (
              {formatDateNoTime(new Date(outboundDate))}) is before the
              deadline: {formatDate(calculateDeadline(inboundDate, visaType))}.
            </p>
          ) : (
            <p className="text-xs font-bold">
              Your planned departure date (
              {formatDateNoTime(new Date(outboundDate))}) exceeds the allowed
              duration. You must leave before:{" "}
              {formatDate(calculateDeadline(inboundDate, visaType))}
            </p>
          )
        ) : (
          <p className="text-xs font-bold">
            You must leave China before:{" "}
            {formatDate(calculateDeadline(inboundDate, visaType))}
          </p>
        )
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select an arrival date to see your departure deadline
        </p>
      )}
      {showPolicyDetails && (
        <div className="text-xs font-normal">
          {visaType === "visa-free" ? (
            <>
              The maximum duration is 30 days, starting from the date of entry.{" "}
              <InfoSource
                sourceName="Ministry of Foreign Affairs of the People's Republic of China"
                sourceUrl="https://www.mfa.gov.cn/wjbzwfwpt/kzx/tzgg/202411/t20241130_11535783.html"
              />
            </>
          ) : (
            <>
              The maximum duration is 240 hours (10 days), start counting from
              the midnight on the day after arrival.{" "}
              <InfoSource
                sourceName="China Visa Application Service Center"
                sourceUrl="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

const VisaPolicyTravelScope = ({
  visaType,
  showPolicyDetails,
}: {
  visaType: "visa-free" | "transit-240";
  showPolicyDetails: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Travel Scope 🌍</p>
      {(() => {
        switch (visaType) {
          case "visa-free":
            return (
              <>
                <p className="text-xs font-normal">
                  Under this visa policy, you are allowed to travel to all
                  regions in mainland China. However, please note that for some
                  areas in Xinjiang and Xizang (Tibet), you will need to apply
                  for additional permits through travel agencies before your
                  visit.
                </p>
              </>
            );
          case "transit-240":
            return (
              <>
                <p className="text-xs font-bold underline">
                  This visa policy DOES NOT grant access to all regions of
                  China. Click on the map to see eligibility of each region.
                </p>
                {showPolicyDetails && (
                  <div className="text-xs font-normal">
                    In eligible regions, access varies by location. Some regions
                    allow travel throughout the entire area, while others
                    restrict travel to specific cities only.{" "}
                    <InfoSource
                      sourceName="China Visa Application Service Center"
                      sourceUrl="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html"
                    />
                  </div>
                )}
              </>
            );
        }
      })()}
    </div>
  );
};

const VisaPolicyPort = ({
  showPolicyDetails,
}: {
  showPolicyDetails: boolean;
}) => {
  const searchParams = useSearchParams();
  const inboundPort = searchParams.get("inboundPort");
  const outboundPort = searchParams.get("outboundPort");

  const getFullPortName = (iataCode: string) => {
    // Search through all regions in allChinaPorts
    for (const region of Object.values(allChinaPorts)) {
      // Find the port name that matches the IATA code
      const portName = region[iataCode as keyof typeof region];
      if (portName) return portName as string;
    }
    return "Other" as string;
  };

  const inboundRequirementMet = React.useMemo(() => {
    if (!inboundPort) return false;
    const inboundPortName = getFullPortName(inboundPort);
    return inboundPortName
      ? allowedPorts240Hour.includes(inboundPortName)
      : false;
  }, [inboundPort]);

  const outboundRequirementMet = React.useMemo(() => {
    if (!outboundPort) return false;
    const outboundPortName = getFullPortName(outboundPort);
    return outboundPortName
      ? allowedPorts240Hour.includes(outboundPortName)
      : false;
  }, [outboundPort]);

  const isRequirementMet = inboundRequirementMet && outboundRequirementMet;

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold">Port of Entry/Exit 🚧</p>
        {((inboundPort && outboundPort) ||
          (inboundPort && !inboundRequirementMet) ||
          (outboundPort && !outboundRequirementMet)) && (
          <span
            className={`${
              isRequirementMet ? "bg-green-600" : "bg-red"
            } text-white px-[.5rem] rounded-full text-[0.6rem] font-bold`}
          >
            {isRequirementMet ? "REQUIREMENT MET" : "REQUIREMENT NOT MET"}
          </span>
        )}
      </div>
      {inboundPort ? (
        outboundPort ? (
          isRequirementMet ? (
            <p className="text-xs font-bold">
              Both your entry {getFullPortName(inboundPort)} and exit{" "}
              {getFullPortName(outboundPort)} ports are within the designated
              ports for this visa policy.
            </p>
          ) : inboundRequirementMet && !outboundRequirementMet ? (
            <p className="text-xs font-bold">
              Your entry port ({getFullPortName(inboundPort)}) is within the
              designated ports for this visa policy, but your departure port (
              {getFullPortName(outboundPort)}) is not.
            </p>
          ) : outboundRequirementMet && !inboundRequirementMet ? (
            <p className="text-xs font-bold">
              Your departure port ({getFullPortName(outboundPort)}) is within
              the designated ports for this visa policy, but your entry port (
              {getFullPortName(inboundPort)}) is not.
            </p>
          ) : null
        ) : inboundRequirementMet ? (
          <p className="text-xs font-bold">
            Your entry port ({getFullPortName(inboundPort)}) is within the
            designated ports for this visa policy. Please select your departure
            port to check its eligibility.
          </p>
        ) : (
          <p className="text-xs font-bold">
            Your entry port ({getFullPortName(inboundPort)}) is NOT within the
            designated ports for this visa policy. Please select your departure
            port to check its eligibility.
          </p>
        )
      ) : outboundPort ? (
        outboundRequirementMet ? (
          <p className="text-xs font-bold">
            Your departure port ({getFullPortName(outboundPort)}) is within the
            designated ports for this visa policy. Please select your arrival
            port to check its eligibility.
          </p>
        ) : (
          <p className="text-xs font-bold">
            Your departure port ({getFullPortName(outboundPort)}) is NOT within
            the designated ports for this visa policy. Please select your
            arrival port to check its eligibility.
          </p>
        )
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select your arrival and departure ports to check their
          eligibility.
        </p>
      )}
      {showPolicyDetails && (
        <div className="text-xs font-normal">
          You are only allowed to enter and exit China through designated ports.
          Your entry and exit ports don&apos;t have to be the same. Click on the
          map to see the designated ports within each region.{" "}
          <InfoSource
            sourceName="China Visa Application Service Center"
            sourceUrl="https://bio.visaforchina.cn/SYD3_EN/tongzhigonggao/329041139338448896.html"
          />
        </div>
      )}
    </div>
  );
};

const VisaPolicyCardVisaFree = ({
  value,
  currentValue,
  onValueChange,
}: Pick<VisaPolicyCardProps, "value" | "currentValue" | "onValueChange">) => {
  const [showPolicyDetails] = React.useState(false);
  const searchParams = useSearchParams();
  const nationalities = searchParams.get("nationality")?.split(",") || [];

  // Always eligible if no nationalities selected
  const hasEligibleNationality =
    nationalities.length === 0 ||
    nationalities.some((code) =>
      countryEligibilityVisaFree.includes(
        code as (typeof countryEligibilityVisaFree)[number]
      )
    );

  return (
    <VisaPolicyCard
      status={hasEligibleNationality ? "eligible" : "ineligible"}
      title="Visa Free Entry"
      value={value}
      currentValue={currentValue}
      onValueChange={onValueChange}
    >
      <VisaPolicyNationality
        eligibleCountries={countryEligibilityVisaFree}
        visaType="visa-free"
        showPolicyDetails={showPolicyDetails}
      />
      <VisaPolicyDuration
        showPolicyDetails={showPolicyDetails}
        visaType="visa-free"
      />
      <VisaPolicyTravelScope
        showPolicyDetails={showPolicyDetails}
        visaType="visa-free"
      />
    </VisaPolicyCard>
  );
};

const VisaPolicyCard240 = ({
  value,
  currentValue,
  onValueChange,
}: Pick<VisaPolicyCardProps, "value" | "currentValue" | "onValueChange">) => {
  const [showPolicyDetails] = React.useState(false);
  const searchParams = useSearchParams();
  const nationalities = searchParams.get("nationality")?.split(",") || [];

  // Always eligible if no nationalities selected
  const hasEligibleNationality =
    nationalities.length === 0 ||
    nationalities.some((code) =>
      countryEligibility240HourVisa.includes(
        code as (typeof countryEligibility240HourVisa)[number]
      )
    );

  return (
    <VisaPolicyCard
      status={hasEligibleNationality ? "eligible" : "ineligible"}
      title="240-Hour Transit"
      value={value}
      currentValue={currentValue}
      onValueChange={onValueChange}
    >
      <VisaPolicyNationality
        eligibleCountries={countryEligibility240HourVisa}
        visaType="transit-240"
        showPolicyDetails={showPolicyDetails}
      />
      <VisaPolicyFlight showPolicyDetails={showPolicyDetails} />
      <VisaPolicyDuration
        showPolicyDetails={showPolicyDetails}
        visaType="transit-240"
      />
      <VisaPolicyTravelScope
        showPolicyDetails={showPolicyDetails}
        visaType="transit-240"
      />
      <VisaPolicyPort showPolicyDetails={showPolicyDetails} />
    </VisaPolicyCard>
  );
};

const VisaPolicyContainer = () => {
  const [currentCard, setCurrentCard] = useQueryState("policy", {
    defaultValue: "",
    parse: (value: string | null) => value || "",
    serialize: (value: string) => value,
  });

  return (
    <div className="md:space-y-4 overflow-visible">
      <VisaPolicyCardVisaFree
        value="visa-free"
        currentValue={currentCard}
        onValueChange={setCurrentCard}
      />
      <div className="border-b border-gray-300 w-5/6 mx-auto md:hidden"></div>
      <VisaPolicyCard240
        value="transit-240"
        currentValue={currentCard}
        onValueChange={setCurrentCard}
      />
    </div>
  );
};

export { VisaPolicyContainer };
