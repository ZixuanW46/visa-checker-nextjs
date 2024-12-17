"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export default function TransitAlert() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) {
      setIsDialogOpen(true);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="transit"
          checked={isChecked}
          onCheckedChange={(checked) =>
            handleCheckboxChange(checked as boolean)
          }
        />
        <Label htmlFor="transit">I am taking a transit flight</Label>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Taking a transit?</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <span className="block">
                Please be aware that the{" "}
                <span className="font-bold">flight origin</span> is the
                departure point of your{" "}
                <span className="font-bold">last flight</span> before entering
                China.
              </span>
              <span className="block">
                For example, if traveling{" "}
                <span className="font-bold">UK → Japan → China</span>, the
                "flight origin" is <span className="font-bold">Japan</span>.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Understood!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
