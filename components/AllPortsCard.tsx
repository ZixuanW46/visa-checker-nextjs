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
  ports: string;
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
          <AlertDialogTitle>
            Ports of Entry/Exit in{" "}
            <span className="font-extrabold text-logo">{provinceName}</span>
          </AlertDialogTitle>
          {ports.includes(":") ? (
            <>
              <AlertDialogDescription className="text-sm">
                {ports.split(":")[0]}:
              </AlertDialogDescription>
              <ul className="list-disc pl-6 mt-2">
                {ports
                  .split(":")[1]
                  .split(",")
                  .map((port, index) => (
                    <li
                      key={index}
                      className="text-sm font-semibold text-gray-100"
                    >
                      {port.trim()}
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <AlertDialogDescription className="text-base">
              {ports}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="h-10 rounded-xl text-sm bg-themePrimary hover:bg-black">
            Got it
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
          <AlertDialogTitle>
            Travel Scope in{" "}
            <span className="font-extrabold text-logo">{provinceName}</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm">
            {scope}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="h-10 rounded-xl text-sm bg-themePrimary hover:bg-black">
            Got it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { AllPortsCard, AllScopeCard };
