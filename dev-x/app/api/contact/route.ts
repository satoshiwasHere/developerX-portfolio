import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

  if (!url || !serviceRoleKey) {
    return NextResponse.json({ error: "Server is not configured for Supabase" }, { status: 500 });
  }

  try {
    const supabase = createClient(url, serviceRoleKey, { auth: { persistSession: false } });
    // Persist messages into a `contacts` table. Create this table in Supabase with RLS disabled or appropriate policy for service role.
    const { error } = await supabase.from("contacts").insert({ name, email, message });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
