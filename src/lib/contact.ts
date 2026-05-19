export type ContactInquiryInput = {
  fullName: string;
  email: string;
  phone: string;
  programInterest: string | null;
  message: string;
};

export type ContactInquiryRow = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  program_interest: string | null;
  message: string;
  created_at: string;
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function parseContactBody(body: unknown):
  | { ok: true; data: ContactInquiryInput }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;
  const fullName = String(raw.fullName ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const phone = String(raw.phone ?? "").trim();
  const programInterest = String(raw.programInterest ?? "").trim() || null;
  const message = String(raw.message ?? "").trim();

  if (!fullName || fullName.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (fullName.length > 255) {
    return { ok: false, error: "Name is too long." };
  }
  if (!email || !isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (email.length > 255) {
    return { ok: false, error: "Email is too long." };
  }
  if (!phone || phone.length < 7) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (phone.length > 50) {
    return { ok: false, error: "Phone number is too long." };
  }
  if (programInterest && programInterest.length > 100) {
    return { ok: false, error: "Program selection is too long." };
  }
  if (!message || message.length < 10) {
    return { ok: false, error: "Message should be at least 10 characters." };
  }
  if (message.length > 5000) {
    return { ok: false, error: "Message is too long (max 5000 characters)." };
  }

  return {
    ok: true,
    data: { fullName, email, phone, programInterest, message },
  };
}

export async function saveContactInquiry(data: ContactInquiryInput) {
  const { getDb } = await import("@/lib/db");
  const sql = getDb();

  const rows = await sql`
    INSERT INTO contact (full_name, email, phone, program_interest, message)
    VALUES (${data.fullName}, ${data.email}, ${data.phone}, ${data.programInterest}, ${data.message})
    RETURNING id, created_at
  `;

  return rows[0] as { id: number; created_at: string };
}
