"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AllPortsCardProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  provinceName: string;
  ports: readonly string[];
}

const AllPortsCard = ({
  isOpen,
  onOpenChange,
  provinceName,
  ports,
}: AllPortsCardProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ports in {provinceName}</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            {ports.join(", ")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="h-12 rounded-xl text-sm">
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface AllScopeCardProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  provinceName: string;
  scope: string | readonly string[];
}

const AllScopeCard = ({
  isOpen,
  onOpenChange,
  provinceName,
  scope,
}: AllScopeCardProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Travel Scope in {provinceName}</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            {scope}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="h-12 rounded-xl text-sm">
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { AllPortsCard, AllScopeCard };
