import { createClient } from "@supabase/supabase-js";

// Browser Supabase client for public operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // This is a runtime check to help during development; values should be provided via .env.local
  // eslint-disable-next-line no-console
  console.warn("Supabase client env vars are missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local");
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
