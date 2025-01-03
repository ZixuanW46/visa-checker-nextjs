"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { VisaPolicyContainer } from "./VisaPolicyCard";
import { useSearchParams } from "next/navigation";
import {
  countryEligibilityVisaFree,
  countryEligibility240HourVisa,
} from "./CountryEligibility";
import Navbar from "./Navbar";
import { useDrawerStore } from "@/lib/store/drawerStore";

const MobilePolicyCards = () => {
  const { isPolicyDrawerOpen, setPolicyDrawerOpen } = useDrawerStore();
  const searchParams = useSearchParams();
  const policy = searchParams.get("policy");
  const nationalities = searchParams.get("nationality")?.split(",") || [];

  // Get button className based on conditions
  const getButtonClassName = () => {
    if (!policy || nationalities.length === 0) {
      return ""; // default button styling
    }

    const hasEligibleNationality =
      policy === "visa-free"
        ? nationalities.some((code) =>
            countryEligibilityVisaFree.includes(
              code as (typeof countryEligibilityVisaFree)[number]
            )
          )
        : nationalities.some((code) =>
            countryEligibility240HourVisa.includes(
              code as (typeof countryEligibility240HourVisa)[number]
            )
          );

    return hasEligibleNationality
      ? "bg-logo text-white hover:bg-logo/90"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";
  };

  // Get button text based on conditions
  const getButtonText = () => {
    // If no policy selected
    if (!policy) {
      return "Please select a policy";
    }

    const policyText =
      policy === "transit-240" ? "240-Hour Transit" : "Visa-Free Entry";

    // If policy selected but no nationality
    if (nationalities.length === 0) {
      return (
        <>
          <p>
            <span className="font-bold">Change Policy: </span>
            {policyText}
          </p>
          <p className="font-extrabold">
            [Please input nationality to see eligibility]
          </p>
        </>
      );
    }

    // If both policy and nationality are present
    const hasEligibleNationality =
      policy === "visa-free"
        ? nationalities.some((code) =>
            countryEligibilityVisaFree.includes(
              code as (typeof countryEligibilityVisaFree)[number]
            )
          )
        : nationalities.some((code) =>
            countryEligibility240HourVisa.includes(
              code as (typeof countryEligibility240HourVisa)[number]
            )
          );

    const eligibilityText = hasEligibleNationality
      ? "[Eligible]"
      : "[Ineligible]";

    return (
      <p>
        <span className="font-extrabold">Change Policy: </span>
        {policyText} {eligibilityText}
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-4 md:hidden">
      <Drawer
        open={isPolicyDrawerOpen}
        onOpenChange={setPolicyDrawerOpen}
        repositionInputs={true}
        modal={false}
        handleOnly={false}
      >
        <DrawerTrigger asChild>
          <Button
            className={`${getButtonClassName()} h-auto py-2 flex flex-col`}
          >
            {getButtonText()}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[66dvh]">
          <div className="mx-auto w-full max-w-md flex-1 overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle>Choose a Policy</DrawerTitle>
            </DrawerHeader>
            <div className="">
              <VisaPolicyContainer />
            </div>
          </div>

          <Navbar />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobilePolicyCards;
