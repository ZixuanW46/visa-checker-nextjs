"use server";

import { createClient } from "@supabase/supabase-js";

export async function addToWaitlist(data: { name: string; email: string }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  return await supabase.from("user-waitlist").insert([
    {
      name: data.name,
      email: data.email,
      created_at: new Date().toISOString(),
    },
  ]);
}
