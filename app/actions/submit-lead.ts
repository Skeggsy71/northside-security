"use server";

import { validateLead } from "@/lib/validation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SubmitResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitLead(
  _prevState: SubmitResult | null,
  formData: FormData
): Promise<SubmitResult> {
  if (formData.get("website")) {
    return { success: true, message: "Thanks! We'll be in touch." };
  }

  const data = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    suburb: formData.get("suburb") as string,
    interest: (formData.get("interest") as string) || undefined,
  };

  const validation = validateLead(data);
  if (!validation.success) {
    return { success: false, message: "Please fix the errors below.", errors: validation.errors };
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "North Side Security <leads@northsidesecurity.com.au>",
        to: "sales@northsidesecurity.com.au",
        subject: `New Lead: ${data.name} — ${data.suburb}`,
        text: [
          "New Free Site Check Request",
          "",
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          `Suburb: ${data.suburb}`,
          data.interest ? `Interest: ${data.interest}` : "",
          "",
          `Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Perth" })}`,
        ].filter(Boolean).join("\n"),
      });
    }

    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          suburb: data.suburb,
          interest: data.interest || "",
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {});
    }

    return {
      success: true,
      message: `Thanks ${data.name}! We'll call you within 24 hours to arrange your free site check.`,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try calling us on 0437 745 101.",
    };
  }
}
