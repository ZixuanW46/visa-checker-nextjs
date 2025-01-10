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
            <AlertDialogTitle>
              Taking A{" "}
              <span className="font-extrabold text-logo">Transit?</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <span className="font-bold">Important:</span> Do NOT list your
              actual departure city. Instead, list your{" "}
              <span className="font-bold">final transit city</span> as your
              <span className="font-bold">&quot;Flight Origin&quot;</span>.
              <br />
              <br />
              For example, if your route is{" "}
              <span className="font-bold">
                &quot;London → Dubai → Singapore → Beijing&quot;
              </span>
              :
              <br />✓ List <span className="font-bold">Singapore</span> as your{" "}
              <span className="font-bold">&quot;Flight Origin&quot;</span>
              <br />✗ Do NOT list <span className="font-bold">
                London
              </span> or <span className="font-bold">Dubai</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="h-10 rounded-xl text-sm bg-themePrimary hover:bg-black">
              Understood!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
