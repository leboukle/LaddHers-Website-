"use client";

import { useState } from "react";
import Button from "@/components/Button";

const inputClass =
  "w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-fuchsia focus:outline-none transition-colors duration-400";

const labelClass = "mb-2 block text-xs uppercase tracking-wide2 text-charcoal/50";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // TODO: wire up form submission — e.g. POST to an API route that
    // forwards to email/CRM (Formspree, Resend, a custom /api/contact
    // route). No backend is connected yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-charcoal/15 p-10 text-center md:p-16">
        <p className="font-serif text-2xl">Thank you for reaching out.</p>
        <p className="mt-3 text-sm text-charcoal/60">
          We&apos;ll respond within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className={labelClass}>Name</label>
          <input required name="name" type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input required name="email" type="email" className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          required
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>
      <Button type="submit" variant="fuchsia" className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
}
