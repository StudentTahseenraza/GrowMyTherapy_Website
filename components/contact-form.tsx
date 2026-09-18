"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sessionType, setSessionType] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-sage-50 border border-sage-200 rounded-card p-8 flex flex-col items-center text-center gap-4"
      >
        <CheckCircle2 size={40} className="text-sage-600" aria-hidden="true" />
        <h2 className="font-display text-xl text-ink">Thank you for reaching out</h2>
        <p className="text-ink/75 max-w-sm">
          I&apos;ve received your message and will respond within 24 hours to
          schedule your free 15-minute consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-ink mb-2">
            First Name <span className="text-ink/50 font-normal">(required)</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-ink mb-2">
            Last Name <span className="text-ink/50 font-normal">(required)</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
          Email <span className="text-ink/50 font-normal">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
          Phone <span className="text-ink/50 font-normal">(required)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
        />
      </div>

      <div>
        <label htmlFor="sessionType" className="block text-sm font-semibold text-ink mb-2">
          Are you looking for telehealth or in-person therapy?{" "}
          <span className="text-ink/50 font-normal">(required)</span>
        </label>
        <select
          id="sessionType"
          name="sessionType"
          required
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
          className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="telehealth">California Telehealth</option>
          <option value="in-person">In-Person &mdash; Santa Monica</option>
          <option value="either">Either works for me</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          What brings you to therapy?{" "}
          <span className="text-ink/50 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-sage-200 bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-sage"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-sage px-8 py-3.5 text-white font-semibold shadow-card hover:bg-sage-600 hover:-translate-y-0.5 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
