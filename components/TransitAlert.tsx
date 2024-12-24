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
            <AlertDialogDescription>
              If you have a layover in another country before reaching China,
              please select your &quot;final departure point&quot; as the Flight
              Origin.
              <br />
              <br />
              For example, if your route is &quot;London → Dubai →
              Beijing&quot;, select London.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="h-12 rounded-xl text-sm">
              Understood!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
