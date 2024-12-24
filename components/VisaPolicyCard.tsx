"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Check, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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
  status = "ineligible",
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

const VisaPolicyNationality = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Nationality 🇺🇳</p>
      <p className="text-xs font-bold">
        Your nationality eligiblity for this visa policy:
      </p>
      <div className="flex gap-2 mt-1">
        <Badge variant="logo" className="rounded-[50px] h-6">
          <Check className="w-4 h-4 stroke-[3]" />
          <span className="text-[0.7rem] font-bold py-[2px] px-1">UK</span>
        </Badge>
        <Badge variant="gray" className="rounded-[50px] h-6">
          <Plus className="w-4 h-4 stroke-[3] rotate-45" />
          <span className="text-[0.7rem] font-bold py-[2px] px-1">USA</span>
        </Badge>
      </div>
    </div>
  );
};

const VisaPolicyFlight = ({
  showPolicyDetails,
}: {
  showPolicyDetails: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Flight ✈️</p>
      <p className="text-xs font-bold">
        Your outbound flight must not first land in UAE, either as a transit or
        as a final destination.
      </p>
      {showPolicyDetails && (
        <p className="text-xs font-normal">
          Your must be leaving to a third country (different from your country
          of origin when travelling to China).
        </p>
      )}
    </div>
  );
};

const VisaPolicyDuration = ({
  showPolicyDetails,
}: {
  showPolicyDetails: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm font-bold">Duration 🕒</p>
      <p className="text-xs font-bold">
        Your latest departure time: 23:00 on Jun 8th, 2024
      </p>
      {showPolicyDetails && (
        <p className="text-xs font-normal">
          Maximum duration: 144 hours
          <br />
          Start counting from: midnight on the day after arrival
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
        Click through the map to explore other options.
      </p>
      <p className="text-xs font-normal">
        This transit visa DOES NOT grant access to all regions of China. Your
        permitted travel area will depend on the specific port of entry.
        Additionally, you are only allowed to enter and exit through designated
        ports. Your entry and exit ports don’t have to be the same.
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

  return (
    <VisaPolicyCard
      status="ineligible"
      title="Visa Free Entry"
      value={value}
      currentValue={currentValue}
      onValueChange={onValueChange}
    >
      <VisaPolicyNationality />
      <VisaPolicyFlight showPolicyDetails={showPolicyDetails} />
      <VisaPolicyDuration showPolicyDetails={showPolicyDetails} />
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

  return (
    <VisaPolicyCard
      status="eligible"
      title="240-Hour Transit"
      value={value}
      currentValue={currentValue}
      onValueChange={onValueChange}
    >
      <VisaPolicyNationality />
      <VisaPolicyFlight showPolicyDetails={showPolicyDetails} />
      <VisaPolicyDuration showPolicyDetails={showPolicyDetails} />
      <VisaPolicyTravelScope />
    </VisaPolicyCard>
  );
};

const VisaPolicyContainer = () => {
  const [currentCard, setCurrentCard] = React.useState<string>("");

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
