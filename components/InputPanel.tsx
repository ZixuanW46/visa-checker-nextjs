"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import MultiSelectCountry from "./MultiSelectCountry";
import SingleSelectCountry from "./SingleSelectCountry";
import TransitAlert from "./TransitAlert";
import NoneFlightNotice from "./NoneFlightNotice";
import SingleSelectPort from "./SingleSelectPort";
import { DatePicker } from "./DatePicker";
import TransitAlertOutbound from "./TransitAlertOutbound";
import NoneFlightNoticeOutbound from "./NoneFlightNoticeOutbound";

const InputPanel = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedInbound, setSelectedInbound] = useState<string | undefined>(
    undefined
  );
  const [selectedPort, setSelectedPort] = useState<string | undefined>(
    undefined
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedOutbound, setSelectedOutbound] = useState<string | undefined>(
    undefined
  );
  const [selectedOutboundPort, setSelectedOutboundPort] = useState<
    string | undefined
  >(undefined);
  const [selectedOutboundDate, setSelectedOutboundDate] = useState<
    Date | undefined
  >(undefined);

  const handleSubmit = () => {
    const formData = {
      nationality: selectedCountries,
      inboundOrigin: selectedInbound,
      inboundPort: selectedPort,
      inboundDate: selectedDate,
      outboundDestination: selectedOutbound,
      outboundPort: selectedOutboundPort,
      outboundDate: selectedOutboundDate,
    };

    // Use this formData to submit to your API
    console.log("Form submitted:", formData);
  };

  const handleClearAll = () => {
    setSelectedCountries([]);
    setSelectedInbound(undefined);
    setSelectedPort(undefined);
    setSelectedDate(undefined);
    setSelectedOutbound(undefined);
    setSelectedOutboundPort(undefined);
    setSelectedOutboundDate(undefined);
  };

  return (
    <div className="w-96 min-w-56 max-w-96 flex flex-col overflow-y-auto pr-4">
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
            <span className="text-gray-200 font-medium text-sm block custom:inline custom:ml-3">
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
            <SingleSelectPort value={selectedPort} onChange={setSelectedPort} />
          </div>
          <div className="mt-8">
            <p className="inputSubtitle">Arrival Date</p>
            <DatePicker value={selectedDate} onChange={setSelectedDate} />
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-300 my-7"></div>
        <div id="section-3" className="w-full">
          <p className="inputTitle">
            <span className="whitespace-nowrap">Outound Travel Plan</span>
            <span className="text-gray-200 font-medium text-sm block custom:inline custom:ml-3">
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
            <p className="inputSubtitle">Departure Date</p>
            <DatePicker
              value={selectedOutboundDate}
              onChange={setSelectedOutboundDate}
            />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 w-full flex flex-col bg-gradient-to-b from-white/90 via-white/100 to-white/100 backdrop-blur-none">
        <div className="flex justify-between pt-3">
          <button
            onClick={handleClearAll}
            className="text-black-100 underline font-semibold text-base rounded-md active:text-black-200 hover:text-yellow"
          >
            Clear All
          </button>
          <Button onClick={handleSubmit} className="h-12 rounded-xl text-base">
            Check
          </Button>
        </div>
        <div className="text-gray-200 text-xs font-light mt-3">
          © 2024 Capy Ltd All rights reserved
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
