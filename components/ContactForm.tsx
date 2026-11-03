"use client";
import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "email", "subject", "message"];
    if (required.some(k => !String(data.get(k) || "").trim())) { setStatus("Please complete all required fields."); return; }
    const email = String(data.get("email"));
    if (!/^\S+@\S+\.\S+$/.test(email)) { setStatus("Please enter a valid email address."); return; }
    const subject = encodeURIComponent(String(data.get("subject")));
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${email}\nOrganization: ${data.get("company") || "Not provided"}\n\n${data.get("message")}`);
    setStatus("Your email app should open with the message prepared. Review it, then send.");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="field-grid"><label>Name *<input name="name" autoComplete="name" /></label><label>Email *<input name="email" type="email" autoComplete="email" /></label></div><label>Company / Organization<input name="company" autoComplete="organization" /></label><label>Subject *<input name="subject" /></label><label>Message *<textarea name="message" rows={6} /></label><button className="button" type="submit">Prepare email</button><p className="form-note">This form uses your email app. It does not send data to a third-party form service.</p><p className="status" aria-live="polite">{status}</p></form>;
}
