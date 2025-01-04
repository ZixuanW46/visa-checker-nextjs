"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "../ui/button";
import MultiSelectCountry from "./MultiSelectCountry";
import SingleSelectCountry from "./SingleSelectCountry";
import TransitAlert from "./TransitAlert";
import NoneFlightNotice from "./NoneFlightNotice";
import SingleSelectPort from "./SingleSelectPort";
import { DatePicker } from "./DatePicker";
import TransitAlertOutbound from "./TransitAlertOutbound";
import NoneFlightNoticeOutbound from "./NoneFlightNoticeOutbound";
import { MoreInfo } from "./MoreInfo";
import {
  parseAsIsoDate,
  useQueryState,
  parseAsArrayOf,
  parseAsString,
} from "nuqs";
import { Settings2 } from "lucide-react";

const InputPanel = forwardRef(
  ({ foldable = false }: { foldable: boolean }, ref) => {
    // Replace URL query state setters with full query state handlers
    const [nationalityQuery, setNationalityQuery] = useQueryState(
      "nationality",
      parseAsArrayOf(parseAsString)
    );
    const [inboundQuery, setInboundQuery] = useQueryState("inboundOrigin");
    const [portQuery, setPortQuery] = useQueryState("inboundPort");
    const [dateQuery, setDateQuery] = useQueryState(
      "inboundDate",
      parseAsIsoDate
    );
    const [outboundQuery, setOutboundQuery] = useQueryState(
      "outboundDestination"
    );
    const [outboundPortQuery, setOutboundPortQuery] =
      useQueryState("outboundPort");
    const [outboundDateQuery, setOutboundDateQuery] = useQueryState(
      "outboundDate",
      parseAsIsoDate
    );
    const [, setPolicyQuery] = useQueryState("policy");

    // Initialize local state with URL query parameters
    const [selectedCountries, setSelectedCountries] = useState<string[]>(
      nationalityQuery || []
    );
    const [selectedInbound, setSelectedInbound] = useState<string | undefined>(
      inboundQuery || undefined
    );
    const [selectedPort, setSelectedPort] = useState<string | undefined>(
      portQuery || undefined
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      dateQuery || undefined
    );
    const [selectedOutbound, setSelectedOutbound] = useState<
      string | undefined
    >(outboundQuery || undefined);
    const [selectedOutboundPort, setSelectedOutboundPort] = useState<
      string | undefined
    >(outboundPortQuery || undefined);
    const [selectedOutboundDate, setSelectedOutboundDate] = useState<
      Date | undefined
    >(outboundDateQuery || undefined);

    const handleSubmit = async () => {
      // Prepare form data for backend
      const formData = {
        nationality: selectedCountries,
        inboundOrigin: selectedInbound,
        inboundPort: selectedPort,
        inboundDate: selectedDate,
        outboundDestination: selectedOutbound,
        outboundPort: selectedOutboundPort,
        outboundDate: selectedOutboundDate,
      };

      // Update URL parameters
      setNationalityQuery(selectedCountries.length ? selectedCountries : null);
      setInboundQuery(selectedInbound || null);
      setPortQuery(selectedPort || null);
      setDateQuery(selectedDate || null);
      setOutboundQuery(selectedOutbound || null);
      setOutboundPortQuery(selectedOutboundPort || null);
      setOutboundDateQuery(selectedOutboundDate || null);
      setPolicyQuery("visa-free");

      try {
        // Send analytics data to backend
        await fetch("/api/search-analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Updated selector to match the Sheet close button
        if (foldable) {
          const closeButton = document.querySelector(
            'button[data-state="open"]'
          ) as HTMLButtonElement;
          closeButton?.click();
        }

        console.log("Form submitted:", formData);
      } catch (error) {
        console.error("Failed to send analytics:", error);
      }
    };

    const handleClearAll = () => {
      // Clear local state
      setSelectedCountries([]);
      setSelectedInbound(undefined);
      setSelectedPort(undefined);
      setSelectedDate(undefined);
      setSelectedOutbound(undefined);
      setSelectedOutboundPort(undefined);
      setSelectedOutboundDate(undefined);

      // Clear URL parameters
      setNationalityQuery(null);
      setInboundQuery(null);
      setPortQuery(null);
      setDateQuery(null);
      setOutboundQuery(null);
      setOutboundPortQuery(null);
      setOutboundDateQuery(null);
    };

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      handleSubmit,
      handleClearAll,
    }));

    return (
      <div
        className={`flex flex-col ${
          foldable
            ? "overflow-y-auto h-[calc(100dvh)] pl-8 pr-10 w-[450px]"
            : "w-full md:overflow-y-auto md:h-[min(1000px,calc(100dvh-5rem))] md:pr-4"
        }`}
      >
        <div
          className={`w-full h-[3rem] flex items-center gap-2 pt-8 text-2xl font-extrabold text-black-200 pb-8 bg-gradient-to-b from-white/100 via-white/100 to-white/90 sticky top-0 z-10 ${
            foldable ? "" : "hidden"
          }`}
        >
          <Settings2 className="w-6 h-6 stroke-gray-100 stroke-[3]" />
          Your Inputs
        </div>
        <div id="input-section" className="w-full flex-1">
          <div id="section-1" className="w-full">
            <p className="inputTitle">Nationality</p>
            <MultiSelectCountry
              value={selectedCountries}
              onChange={setSelectedCountries}
            />
          </div>
          <div className="w-full h-[2px] bg-gray-300 my-7"></div>
          <div id="section-2" className="w-full">
            <p className="inputTitle">
              <span className="whitespace-nowrap">Inbound Travel Plan</span>
              <span className="text-gray-200 font-medium text-sm ml-3 md:ml-0 md:block customPlus:inline customPlus:ml-3">
                Optional
              </span>
            </p>
            <div>
              <p className="inputSubtitle">Flight Origin</p>
              <SingleSelectCountry
                value={selectedInbound}
                onChange={setSelectedInbound}
              />
            </div>
            <div className="mt-8">
              <TransitAlert />
            </div>
            <div className="">
              <NoneFlightNotice />
            </div>
            <div>
              <p className="inputSubtitle">Arrival Airport</p>
              <SingleSelectPort
                value={selectedPort}
                onChange={setSelectedPort}
              />
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold text-base text-black-200">
                  Arrival Date
                </p>
                <MoreInfo content="Enter your flight's departure time in China's local time zone." />
              </div>
              <DatePicker value={selectedDate} onChange={setSelectedDate} />
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-300 my-7"></div>
          <div id="section-3" className="w-full">
            <p className="inputTitle">
              <span className="whitespace-nowrap">Outound Travel Plan</span>
              <span className="text-gray-200 font-medium text-sm ml-3 md:ml-0 md:block customPlus:inline customPlus:ml-3">
                Optional
              </span>
            </p>
            <div>
              <p className="inputSubtitle">Flight Destination</p>
              <SingleSelectCountry
                value={selectedOutbound}
                onChange={setSelectedOutbound}
              />
            </div>
            <div className="mt-8">
              <TransitAlertOutbound />
            </div>
            <div className="">
              <NoneFlightNoticeOutbound />
            </div>
            <div>
              <p className="inputSubtitle">Departure Airport</p>
              <SingleSelectPort
                value={selectedOutboundPort}
                onChange={setSelectedOutboundPort}
              />
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold text-base text-black-200">
                  Departure Date
                </p>
                <MoreInfo content="Enter your flight's departure time in China's local time zone." />
              </div>
              <DatePicker
                value={selectedOutboundDate}
                onChange={setSelectedOutboundDate}
              />
            </div>
          </div>
        </div>
        <div className="static md:sticky bottom-0 w-full hidden md:flex flex-col bg-gradient-to-b from-white/90 via-white/100 to-white/100 backdrop-blur-none pb-2">
          <div className="flex justify-between pt-3">
            <button
              onClick={handleClearAll}
              className="text-black-100 underline font-semibold text-base rounded-md active:text-black-200 hover:text-logo"
            >
              Clear All
            </button>
            <Button
              onClick={handleSubmit}
              className="h-12 rounded-xl text-base bg-themePrimary hover:bg-black"
            >
              Check
            </Button>
          </div>
          <div className="text-gray-200 text-xs font-light mt-3">
            © 2024 Capy Ltd All rights reserved
          </div>
        </div>
      </div>
    );
  }
);

// Add display name
InputPanel.displayName = "InputPanel";

export default InputPanel;
