"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addToWaitlist } from "@/app/actions/waitlist";

export default function UnderDevelopmentAlert() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await addToWaitlist({ name, email });
      if (supabaseError) throw supabaseError;
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting to waitlist:", err);
      setError("Failed to join waitlist. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-[90vw] md:max-w-[700px] mx-auto my-8 border-themePrimary/20">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          🚧 Page Under Development 🚧
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground space-y-4 text-sm">
          <p className="mt-3">
            We&apos;re working hard to bring you this exciting new feature! The
            content is ready, but as beginner developers, we&apos;re taking a
            bit more time to perfect the implementation.
          </p>

          <p>
            <span className="font-extrabold text-logo">Expected launch:</span>{" "}
            Within a week! 🚀
          </p>

          {!isSubmitted ? (
            <>
              <p className="font-semibold">
                Want to know when we go live? Leave your details below, and
                we&apos;ll notify you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                    disabled={isSubmitting}
                  />
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <Button
                  type="submit"
                  className="w-full h-10 rounded-xl text-sm font-bold bg-themePrimary hover:bg-black disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Notify Me When It's Ready!"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center mt-6 text-themePrimary font-semibold">
              Thanks for your interest! We&apos;ll let you know as soon as
              we&apos;re live! 🎉
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
