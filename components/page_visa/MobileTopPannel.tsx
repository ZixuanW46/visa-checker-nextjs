"use client";

import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import InputPanel from "@/components/page_visa/InputPanel";
import { useRef } from "react";
import { useDrawerStore } from "@/lib/store/drawerStore";
import { SearchCityMobile } from "./SearchCity";

const MobileTopPannel = () => {
  const inputPanelRef = useRef<{
    handleSubmit: () => void;
    handleClearAll: () => void;
  }>(null);
  const { setPolicyDrawerOpen, isInputDrawerOpen, setInputDrawerOpen } =
    useDrawerStore();

  const handleSubmit = () => {
    inputPanelRef.current?.handleSubmit();
    setPolicyDrawerOpen(true);
  };

  const handleClearAll = () => {
    inputPanelRef.current?.handleClearAll();
  };

  return (
    <div className="h-[4.5rem] w-full pt-[0.6rem] flex px-6 justify-between gap-4 md:hidden shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] z-[11]">
      <SearchCityMobile />
      <Drawer
        open={isInputDrawerOpen}
        onOpenChange={setInputDrawerOpen}
        repositionInputs={true}
        modal={false}
        handleOnly={false}
      >
        <DrawerTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="bg-black-200 hover:bg-gray-100 rounded-[2.5rem] h-[3rem] w-[8.5rem] flex items-center gap-2 px-[1.3rem] py-[0.7rem] shadow-none flex-[1]"
          >
            <Settings2 className="w-4 h-4 stroke-white stroke-[2]" />
            <span className="text-sm font-medium ssm:flex hidden">
              Your Inputs
            </span>
            <span className="text-sm font-medium ssm:hidden">Inputs</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[88dvh] z-[1000]">
          <div className="mx-auto w-full flex-1 overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle>Your Inputs</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <InputPanel ref={inputPanelRef} foldable={false} />
            </div>
          </div>
          <DrawerFooter>
            <div className="flex justify-between pt-3">
              <button
                onClick={handleClearAll}
                className="text-black-100 underline font-semibold text-base rounded-md active:text-black-200 hover:text-logo"
              >
                Clear All
              </button>
              <DrawerClose asChild>
                <Button
                  onClick={handleSubmit}
                  className="h-12 rounded-xl text-base bg-themePrimary hover:bg-black"
                >
                  Check
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileTopPannel;
