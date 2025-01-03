import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

const ModifyInputButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    variant="default"
    size="icon"
    className="bg-black-200 hover:bg-gray-100 rounded-[2.5rem] h-[3.2rem] w-[8.5rem] flex items-center gap-2 px-[1.3rem] py-[0.7rem] shadow-none"
    {...props}
  >
    <Settings2 className="w-4 h-4 stroke-white stroke-[2]" />
    <span className="text-sm font-medium">Your Inputs</span>
  </Button>
);

export default ModifyInputButton;
