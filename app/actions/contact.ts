"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState =
  | { success: true; message: string }
  | { success: false; error: string };

export async function sendContactEmail(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const to = process.env.CONTACT_EMAIL;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill out all fields." };
  }

  if (!to) {
    return { success: false, error: "Contact email is not configured." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "JuansWorld.XYZ <contact@juansworld.xyz>",
      to,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: "Thanks — your message has been sent." };
  } catch {
    return {
      success: false,
      error: "Something went wrong sending your message. Please try again.",
    };
  }
}
