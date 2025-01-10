"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";

export default function UserInstructionAlert() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome || hasSeenWelcome) {
      setOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="w-[90vw] md:max-w-[700px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center">
            👋 Welcome to{" "}
            <span className=" block md:inline">
              <span className="font-extrabold text-logo">
                Capy&apos;s China Visa Checker
              </span>{" "}
              <span>!</span>
            </span>
          </AlertDialogTitle>
          <div className="text-muted-foreground space-y-4 text-sm">
            {page === 1 ? (
              <>
                <p className="mt-3">
                  In the past year, China has been steadily relaxing its tourism
                  visa policies. There&apos;s no better time to visit China than
                  right now!
                </p>

                <p>
                  That said, the visa policies are updated{" "}
                  <span className="font-extrabold text-logo">
                    soooo frequently
                  </span>
                  . And let&apos;s be honest, these policies{" "}
                  <span className="font-extrabold text-logo">
                    aren&apos;t always easy to find or interpret
                  </span>
                  . Even for us as locals, it takes effort to figure them out!
                </p>

                <p>
                  After successfully helping over 60 of our peers from
                  university visit China recently (
                  <a
                    href="#"
                    className="text-themePrimary font-bold hover:underline"
                  >
                    our story
                  </a>
                  ), we dove deep into the research and built{" "}
                  <span className="font-extrabold text-logo">
                    Capy&apos;s China Visa Checker
                  </span>{" "}
                  to simplify the process for everyone.
                </p>
              </>
            ) : (
              <>
                <div className="mt-3">
                  <p className=" mb-2">
                    Here&apos;s three ways of how you can use it:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li className="font-semibold text-logo">
                      <span className="font-extrabold text-logo">
                        Input your nationality only
                      </span>
                      <br />
                      <span className="text-gray-100">
                        Discover all the visa policies you&apos;re eligible for
                        and the specific conditions for each.
                      </span>
                    </li>
                    <li className="font-semibold text-logo">
                      <span className="font-extrabold text-logo">
                        Add your inbound travel details
                      </span>
                      <br />
                      <span className="text-gray-100">
                        In addition to showing eligible policies, the checker
                        will analyze your inbound travel plan and advise on how
                        your outbound travel should align to meet policy
                        requirements.
                      </span>
                    </li>
                    <li className="font-semibold text-logo">
                      <span className="font-extrabold text-logo">
                        Add your inbound and outbound travel details
                      </span>
                      <br />
                      <span className="text-gray-100">
                        Want the simplest solution? Input everything, and
                        we&apos;ll tell you if your travel plan meets all
                        conditions—or suggest what to tweak if it doesn&apos;t.
                      </span>
                    </li>
                  </ol>
                </div>

                <p className="mt-4">
                  We hope this tool helps make your dream trip to China happen
                  sooner! 🌏✨
                </p>
              </>
            )}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center sm:justify-center">
          {page === 1 ? (
            <AlertDialogAction
              className="h-10 rounded-xl text-sm font-bold bg-themePrimary hover:bg-black"
              onClick={(e) => {
                e.preventDefault();
                setPage(2);
              }}
            >
              {">> How to Use >>"}
            </AlertDialogAction>
          ) : (
            <AlertDialogAction
              className="h-10 rounded-xl text-sm font-bold bg-themePrimary hover:bg-black"
              onClick={() => setOpen(false)}
            >
              {">> Let's Get Started! >>"}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
