import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    const saved = saveContactMessage({
      name,
      email,
      phone: body.phone ? String(body.phone) : undefined,
      category: body.category ? String(body.category) : undefined,
      subject: body.subject ? String(body.subject) : undefined,
      message,
    });

    // Note: connect an email/CRM service here if you want notifications.
    return NextResponse.json({ ok: true, persisted: saved });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
