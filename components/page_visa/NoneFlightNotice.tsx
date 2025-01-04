import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const NoneFlightNotice = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>I am not taking a flight...</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <span className="block">
            If you&apos;re entering China through a land border, please enter
            the{" "}
            <span className="font-bold">neighbouring country or region</span>{" "}
            you are coming from in the &quot;Flight Origin&quot; field.
          </span>
          <span className="block">
            For example, if taking a train from{" "}
            <span className="font-bold">Hong Kong → mainland China</span>, fill
            in <span className="font-bold">Hong Kong</span>.
          </span>
          <span className="block">
            Then in the &quot;Arrival Airport&quot; section, simply enter your{" "}
            <span className="font-bold">entry port</span>.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NoneFlightNotice;
