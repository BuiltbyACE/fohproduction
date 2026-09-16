"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { HeartIcon } from "./icons";

export type SupportModalType = "donate" | "partner";

const SupportModalContext = createContext<{
  open: (type: SupportModalType) => void;
}>({ open: () => {} });

export function useSupportModal() {
  return useContext(SupportModalContext);
}

export function SupportModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [type, setType] = useState<SupportModalType | null>(null);

  const open = useCallback((t: SupportModalType) => setType(t), []);
  const close = useCallback(() => setType(null), []);

  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [type, close]);

  return (
    <SupportModalContext.Provider value={{ open }}>
      {children}
      {type && <SupportModal type={type} onClose={close} />}
    </SupportModalContext.Provider>
  );
}

function SupportModal({
  type,
  onClose,
}: {
  type: SupportModalType;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const set =
    (k: keyof typeof fields) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...fields }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const isDonate = type === "donate";

  return (
    <div className="sm-backdrop" onClick={onClose}>
      <div
        ref={dialogRef}
        className="sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="sm-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="sm-success">
            <span className="sm-success-ic" aria-hidden="true">
              <HeartIcon />
            </span>
            <h3 id="support-modal-title">
              {isDonate ? "Thank you." : "Thank you — we'll be in touch."}
            </h3>
            <p>
              {isDonate
                ? "Your generosity funds health workers, school supplies and livelihoods for some of Kenya's most vulnerable communities."
                : "Your enquiry has been received. Our team will reach out to talk about partnering with Fountain of Hope."}
            </p>
            <button type="button" className="btn btn--navy" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow eyebrow--paper">
              {isDonate ? "Support the work" : "Partner with us"}
            </span>
            <h3 id="support-modal-title">
              {isDonate ? "Donate now" : "Partner with us"}
            </h3>
            <p className="sm-sub">
              {isDonate
                ? "Every donation funds health workers, school supplies and livelihoods for Garissa's most vulnerable communities."
                : "Tell us about you and how you'd like to work with Fountain of Hope — and we'll get back to you."}
            </p>

            <form className="sm-form" onSubmit={handleSubmit}>
              <label className="sm-field">
                <span>{isDonate ? "Full name" : "Your name / organization"}</span>
                <input
                  type="text"
                  required
                  value={fields.name}
                  onChange={set("name")}
                  placeholder={isDonate ? "Your full name" : "Name or organization"}
                />
              </label>

              <div className="sm-row">
                <label className="sm-field">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={fields.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                  />
                </label>
                <label className="sm-field">
                  <span>Phone (optional)</span>
                  <input
                    type="tel"
                    value={fields.phone}
                    onChange={set("phone")}
                    placeholder="+254 ..."
                  />
                </label>
              </div>

              {isDonate && (
                <div className="sm-field">
                  <span className="sm-label">Donation amount (KES)</span>
                </div>
              )}

              <label className="sm-field">
                <span>
                  {isDonate
                    ? "Message (optional)"
                    : "How would you like to partner? (optional)"}
                </span>
                <textarea
                  rows={3}
                  value={fields.message}
                  onChange={set("message")}
                  placeholder={
                    isDonate
                      ? "Where would you like your donation to go?"
                      : "e.g. corporate partnership, program collaboration, volunteering"
                  }
                />
              </label>

              <button type="submit" className="btn btn--pink" disabled={submitting}>
                {submitting ? "Sending…" : isDonate ? "Donate" : "Send enquiry"}
              </button>

              {error && <p className="sm-error">{error}</p>}

              <p className="sm-note">
                Your details are shared only with Fountain of Hope, to follow up
                on your gift or enquiry.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}