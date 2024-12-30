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
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
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
  const [showPolicyDetails, setShowPolicyDetails] = React.useState(false);

  return (
    <Card className="px-5 py-4 rounded-2xl">
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

interface VisaPolicyNationalityProps {
  eligibleCountries: readonly string[]; // Change this line
}

const VisaPolicyNationality = ({
  eligibleCountries,
}: VisaPolicyNationalityProps) => {
  const searchParams = useSearchParams();
  const nationalities = searchParams.get("nationality")?.split(",") || [];

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Nationality 🇺🇳</p>
      {nationalities.length > 0 ? (
        <>
          <p className="text-xs font-bold">
            Your nationality&apos;s eligibility for this visa policy:
          </p>
          <div className="flex gap-2 mt-1 flex-wrap">
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

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Flight ✈️</p>
      {inboundOrigin ? (
        <p className="text-xs font-bold">
          Your outbound flight must not first land in{" "}
          {countryCodeToName[inboundOrigin] || inboundOrigin}, either as a
          transit or as a final destination.
        </p>
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select your inbound flight origin to see transit restrictions
        </p>
      )}
      {showPolicyDetails && (
        <p className="text-xs font-normal">
          Your must be leaving to a third country (different from your country
          of origin when travelling to China).
        </p>
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

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Duration 🕒</p>
      {inboundDate ? (
        <p className="text-xs font-bold">
          You must leave China before:{" "}
          {formatDate(calculateDeadline(inboundDate, visaType))}
        </p>
      ) : (
        <p className="text-xs font-bold text-gray-200">
          Please select an arrival date to see your departure deadline
        </p>
      )}
      {showPolicyDetails && (
        <p className="text-xs font-normal">
          {visaType === "visa-free" ? (
            <>
              Maximum duration: 30 days
              <br />
              Start counting from: date of entry
            </>
          ) : (
            <>
              Maximum duration: 240 hours (10 days)
              <br />
              Start counting from: midnight on the day after arrival
            </>
          )}
        </p>
      )}
    </div>
  );
};

const VisaPolicyTravelScope = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Travel Scope & Port of Entry/Exit 🌍</p>
      <p className="text-xs font-bold underline">
        This visa policy DOES NOT grant access to all regions of China. Click
        through the map to explore.
      </p>
      <p className="text-xs font-normal">
        Additionally, you are only allowed to enter and exit China through
        designated ports. Your entry and exit ports don’t have to be the same.
        Click on the provinces to see the designated ports.
      </p>
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
      <VisaPolicyNationality eligibleCountries={countryEligibilityVisaFree} />
      <VisaPolicyDuration
        showPolicyDetails={showPolicyDetails}
        visaType="visa-free"
      />
      <VisaPolicyTravelScope />
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
      />
      <VisaPolicyFlight showPolicyDetails={showPolicyDetails} />
      <VisaPolicyDuration
        showPolicyDetails={showPolicyDetails}
        visaType="transit-240"
      />
      <VisaPolicyTravelScope />
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
    <div className="space-y-4">
      <VisaPolicyCardVisaFree
        value="visa-free"
        currentValue={currentCard}
        onValueChange={setCurrentCard}
      />
      <VisaPolicyCard240
        value="transit-240"
        currentValue={currentCard}
        onValueChange={setCurrentCard}
      />
    </div>
  );
};

export { VisaPolicyContainer };
