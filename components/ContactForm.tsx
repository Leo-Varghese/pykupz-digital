"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xnpplarr",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you. Your message has been sent to Pykupz Digital."
      );
    } catch {
      setStatus("error");
      setMessage(
        "The message could not be sent. Please try again or email Pykupz Digital directly."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from the Pykupz Digital website"
      />

      <div className="field-grid">
        <label htmlFor="contact-name">
          Name *
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>

        <label htmlFor="contact-email">
          Email *
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label htmlFor="contact-company">
        Company / Organization
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
        />
      </label>

      <label htmlFor="contact-subject">
        Subject *
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
        />
      </label>

      <label htmlFor="contact-message">
        Message *
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          required
        />
      </label>

      <button
        className="button contact-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p
        className={`form-status ${
          status === "error" ? "form-status-error" : ""
        }`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>

      <p className="form-note">
        Your enquiry will be delivered directly to Pykupz Digital.
      </p>
    </form>
  );
}


