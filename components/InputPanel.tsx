"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";

const InputPanel = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedInbound, setSelectedInbound] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = () => {
    const formData = {
      nationality: selectedCountries,
      inboundPlan: selectedInbound,
    };

    // Use this formData to submit to your API
    console.log("Form submitted:", formData);
  };

  const handleClearAll = () => {
    setSelectedCountries([]);
    setSelectedInbound(undefined);
  };

  return (
    <div className="w-3/12 min-w-56 max-w-96 flex flex-col h-full ">
      <div className="flex-1 overflow-y-auto pr-4 w-full flex flex-col flex-nowrap items-center">
        <div id="input-section" className="w-full flex-1">
          <div id="section-1" className="w-full">
            <p className="inputTitle">Nationality</p>
            <MultiSelect
              value={selectedCountries}
              onChange={setSelectedCountries}
            />
          </div>
          <div className="w-full h-[2px] bg-gray-300 my-7"></div>
          <div id="section-2" className="w-full">
            <p className="inputTitle">Inbound Travel Plan</p>
            <SingleSelect
              value={selectedInbound}
              onChange={setSelectedInbound}
            />
          </div>
        </div>
        <div className="sticky bottom-0 w-full flex flex-col">
          <div className="flex justify-between">
            <button
              onClick={handleClearAll}
              className="text-black-100 underline font-semibold text-base rounded-md active:text-black-200 hover:text-yellow"
            >
              Clear All
            </button>
            <Button
              onClick={handleSubmit}
              className="h-12 rounded-xl text-base"
            >
              Check
            </Button>
          </div>
          <div className="text-gray-200 text-xs font-light mt-3">
            © 2024 Capy Ltd All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
