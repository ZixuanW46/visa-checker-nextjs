import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const NoneFlightNotice = ({ inbound = true }: { inbound?: boolean }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-2 pt-3">
          I am not taking a flight...
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <span className="block">
            Input the <span className="font-bold">country or region</span> you
            are travelling from in the &quot;
            <span className="font-bold">
              {inbound ? "Flight Origin" : "Flight Destination"}
            </span>
            &quot; field.
          </span>
          <span className="block">
            Then in the &quot;Arrival Airport&quot; section, simply enter your{" "}
            <span className="font-bold">entry land port or sea port</span>.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NoneFlightNotice;
