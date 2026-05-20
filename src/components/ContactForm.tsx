"use client";

import { useState } from "react";
import { programOptions } from "@/lib/site";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  programInterest: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  programInterest: programOptions[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          programInterest: form.programInterest,
          message: form.message,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Could not send your message.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal-light p-8 text-center">
        <p className="text-lg font-bold text-brand-teal-dark">Thank you!</p>
        <p className="mt-2 text-brand-teal">
          Your inquiry was saved. Our counselors will contact you within 1–2
          business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-orange underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-teal-dark">
            Full name *
          </span>
          <input
            required
            type="text"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="input-field"
            placeholder="Ram Lama"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-brand-teal-dark">
            Phone (WhatsApp) *
          </span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="input-field"
            placeholder="+977 98XXXXXXXX"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-teal-dark">
          Email *
        </span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="input-field"
          placeholder="you@email.com"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-teal-dark">
          Program interest
        </span>
        <select
          value={form.programInterest}
          onChange={(e) => updateField("programInterest", e.target.value)}
          className="input-field"
        >
          {programOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-brand-teal-dark">
          Message *
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="input-field resize-y"
          placeholder="Tell us your education background and target intake (April/October)..."
        />
      </label>

      {status === "error" && (
        <p className="rounded-lg bg-brand-orange-light px-4 py-3 text-sm text-brand-orange-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Submit inquiry"}
      </button>
    </form>
  );
}
