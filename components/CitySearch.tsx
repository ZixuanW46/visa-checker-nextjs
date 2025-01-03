"use client";

import * as React from "react";

import { useMediaQuery } from "@/components/hooks/user-media-query";
import { Button } from "@/components/ui/button";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";

type Status = {
  value: string;
  label: string;
};

export function CitySearch() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus] = React.useState<Status | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[200px] p-0"
          align="start"
        ></PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="bg-[#F2F2F2] rounded-[2.5rem] h-[3rem] w-[14rem] flex-[3] flex items-center justify-center gap-2 px-[1.3rem] py-[0.7rem] shadow-none"
        >
          <Search className="w-4 h-4 stroke-red stroke-[4]" />
          <span className="text-sm font-medium text-gray-200">
            {selectedStatus ? (
              <>{selectedStatus.label}</>
            ) : (
              <>Search Destination</>
            )}
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t"></div>
      </DrawerContent>
    </Drawer>
  );
}
