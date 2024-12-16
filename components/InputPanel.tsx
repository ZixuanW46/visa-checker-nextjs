import React from "react";
import { Button } from "./ui/button";
import MultiSelect from "./MultiSelect";

const InputPanel = () => {
  return (
    <div className="w-3/12 min-w-56 max-w-96 flex flex-col h-full ">
      <div className="flex-1 overflow-y-auto pr-4 w-full flex flex-col flex-nowrap items-center">
        <div id="input-section" className="w-full flex-1">
          <div id="section-1" className="w-full">
            <p className="inputTitle">Nationality</p>
            <MultiSelect />
          </div>
          <div className="w-full h-[2px] bg-gray-300 my-7"></div>
        </div>
        <div className="sticky bottom-0 w-full flex flex-col">
          <div className="flex justify-between">
            <button className="text-black-100 underline font-semibold text-base rounded-md active:text-black-200 hover:text-yellow">
              Clear All
            </button>
            <Button className="h-12 rounded-xl text-base">Check</Button>
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
