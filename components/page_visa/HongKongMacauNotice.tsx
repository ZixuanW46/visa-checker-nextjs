import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const HongKongMacauNotice = ({ inbound = true }: { inbound?: boolean }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-2 pt-0">
          Entering from Hong Kong/Macau?
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <span className="block">
            Please enter the{" "}
            <span className="font-bold">name of the region</span> you are
            travelling from in the &quot;
            <span className="font-bold">
              {inbound ? "Flight Origin" : "Flight Destination"}
            </span>
            &quot; field.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HongKongMacauNotice;
