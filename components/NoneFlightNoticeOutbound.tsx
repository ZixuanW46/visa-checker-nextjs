import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const NoneFlightNoticeOutbound = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>I am not taking a flight...</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <span className="block">
            If you're leaving China through a land border, please enter the{" "}
            <span className="font-bold">neighbouring country or region</span>{" "}
            you are entering to in the "Flight Destination" field.
          </span>
          <span className="block">
            For example, if taking a train from{" "}
            <span className="font-bold">mainland China → Hong Kong</span>, fill
            in <span className="font-bold">Hong Kong</span>.
          </span>
          <span className="block">
            Then in the "Departure Airport" section, simply enter your{" "}
            <span className="font-bold">departure port</span>.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NoneFlightNoticeOutbound;
