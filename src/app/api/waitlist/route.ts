import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return Response.json(
        { ok: false, error: "Expected application/json" },
        { status: 415 }
      );
    }

    const body = (await req.json()) as unknown;
    const email =
      typeof body === "object" && body !== null && "email" in body
        ? String((body as { email: unknown }).email).trim()
        : "";

    if (!email) {
      return Response.json({ ok: false, error: "Email is required" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { ok: false, error: "Server misconfigured: RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const from = process.env.WAITLIST_FROM_EMAIL ?? "VcodingList <onboarding@resend.dev>";
    const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL;

    const resend = new Resend(apiKey);

    // 1) Confirmation email to the user
    await resend.emails.send({
      from,
      to: email,
      subject: "You’re on the VcodingList waitlist",
      text: "Thanks for joining the VcodingList waitlist — we’ll email you at launch.",
    });

    // 2) Optional internal notification
    if (notifyTo) {
      await resend.emails.send({
        from,
        to: notifyTo,
        subject: "New waitlist signup",
        text: `New waitlist signup: ${email}`,
      });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}

