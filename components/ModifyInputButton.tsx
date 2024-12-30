import { Button } from "@/components/ui/button";
import icon_setting from "@/public/icon_setting.svg";
import Image from "next/image";

const ModifyInputButton = () => {
  return (
    <Button
      variant="default"
      size="icon"
      className="bg-black-200 hover:bg-gray-100 rounded-[2.5rem] h-[3rem] w-[8.5rem] border-2 flex items-center gap-2 px-[1.3rem] py-[0.7rem] shadow-none"
    >
      <Image src={icon_setting} alt="settings icon" width={19} height={19} />
      <span className="text-sm font-medium">Your Inputs</span>
    </Button>
  );
};

export default ModifyInputButton;
