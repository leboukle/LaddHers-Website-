"use client";

import { useState } from "react";
import Button from "./Button";

const INTEREST_OPTIONS = ["Member", "Partner", "Sponsor"];

const inputClass =
  "w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-sm text-charcoal placeholder:text-charcoal/35 focus:border-fuchsia focus:outline-none transition-colors duration-400";

const labelClass = "mb-2 block text-xs uppercase tracking-wide2 text-charcoal/50";

function Field({ label, children }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

export default function JoinCircleForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-charcoal/15 p-10 text-center md:p-16">
        <p className="font-serif text-2xl">Welcome to the Circle.</p>
        <p className="mt-3 text-sm text-charcoal/60">
          Watch your inbox for invitations to upcoming gatherings and
          community updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field label="First Name">
          <input required name="firstName" type="text" className={inputClass} />
        </Field>
        <Field label="Last Name">
          <input required name="lastName" type="text" className={inputClass} />
        </Field>

        <Field label="Email">
          <input required name="email" type="email" className={inputClass} />
        </Field>
        <Field label="Current Title">
          <input name="title" type="text" className={inputClass} />
        </Field>

        <Field label="Company / Organization">
          <input name="company" type="text" className={inputClass} />
        </Field>
        <Field label="Industry">
          <input name="industry" type="text" className={inputClass} />
        </Field>

        <Field label="LinkedIn Profile">
          <input name="linkedin" type="url" placeholder="linkedin.com/in/…" className={inputClass} />
        </Field>
        <Field label="Instagram Handle (optional)">
          <input name="instagram" type="text" placeholder="@handle" className={inputClass} />
        </Field>

        <Field label="City (optional)">
          <input name="city" type="text" className={inputClass} />
        </Field>
        <Field label="How did you hear about LaddHers?">
          <input name="referral" type="text" className={inputClass} />
        </Field>
      </div>

      <fieldset>
        <legend className={labelClass}>I am interested in</legend>
        <div className="flex flex-wrap gap-6">
          {INTEREST_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-sm text-charcoal/80"
            >
              <input
                type="radio"
                name="interest"
                value={option}
                required
                className="h-4 w-4 border-charcoal/40 text-fuchsia focus:ring-fuchsia"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="fuchsia"
        className="w-full md:w-auto"
        disabled={submitting}
      >
        {submitting ? "Submitting…" : "Submit"}
      </Button>
    </form>
  );
}
