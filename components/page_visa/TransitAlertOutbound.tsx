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

export default function TransitAlertOutbound() {
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
        <Label htmlFor="transit">My flight has a connecting stop</Label>
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
              final destination country. Instead, list your{" "}
              <span className="font-bold">first transit city</span> as your
              <span className="font-bold">&quot;Flight Destination&quot;</span>.
              <br />
              <br />
              For example, if your route is{" "}
              <span className="font-bold">
                &quot;Shanghai → Tokyo → USA → Canada&quot;
              </span>
              :
              <br />✓ List <span className="font-bold">Tokyo</span> as your{" "}
              <span className="font-bold">&quot;Flight Destination&quot;</span>
              <br />✗ Do NOT list <span className="font-bold">USA</span> or{" "}
              <span className="font-bold">Canada</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="h-10 bg-themePrimary hover:bg-black rounded-xl text-sm">
              Understood!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
