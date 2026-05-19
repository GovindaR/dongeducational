import { NextResponse } from "next/server";
import { parseContactBody, saveContactInquiry } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = parseContactBody(body);

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const row = await saveContactInquiry(parsed.data);

    return NextResponse.json({
      ok: true,
      id: row.id,
      createdAt: row.created_at,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    if (message.includes("DATABASE_URL")) {
      return NextResponse.json(
        {
          error:
            "Database is not configured. Add DATABASE_URL to .env.local and run npm run db:setup.",
        },
        { status: 503 },
      );
    }

    if (message.includes("contact")) {
      return NextResponse.json(
        {
          error:
            "Database table missing. Run npm run db:setup after setting DATABASE_URL.",
        },
        { status: 503 },
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Could not save your message. Please try again later." },
      { status: 500 },
    );
  }
}
