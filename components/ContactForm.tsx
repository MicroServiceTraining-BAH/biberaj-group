'use client';

import { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormData = { name: '', phone: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = 'Your name is required.';
    if (!form.phone.trim()) next.phone = 'A phone number is required.';
    if (!form.email.trim()) {
      next.email = 'An email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please tell us about your property.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setForm(INITIAL_FORM);
  };

  const field = (key: keyof FormData, val: string) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6 bg-success/5 rounded-2xl border border-success/20">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-2xl mb-2">You&apos;re on our list!</h3>
        <p className="text-navy-600 mb-6 text-sm max-w-xs mx-auto">
          We&apos;ll be in touch within 24 hours with your free home valuation. Keep an eye on your inbox.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-accent hover:underline text-sm font-medium"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => field('name', e.target.value)}
            placeholder="Jane Smith"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 transition-colors ${
              errors.name
                ? 'border-red-400 focus:ring-red-300 bg-red-50'
                : 'border-slate-200 focus:ring-accent/40 focus:border-accent'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => field('phone', e.target.value)}
            placeholder="(703) 555-0100"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 transition-colors ${
              errors.phone
                ? 'border-red-400 focus:ring-red-300 bg-red-50'
                : 'border-slate-200 focus:ring-accent/40 focus:border-accent'
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => field('email', e.target.value)}
            placeholder="jane@example.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 transition-colors ${
              errors.email
                ? 'border-red-400 focus:ring-red-300 bg-red-50'
                : 'border-slate-200 focus:ring-accent/40 focus:border-accent'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-semibold text-navy mb-1.5">
            Tell Us About Your Property <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={(e) => field('message', e.target.value)}
            placeholder="e.g. 4-bed home in Fairfax, VA. Looking to sell within 3 months..."
            rows={4}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 transition-colors resize-none ${
              errors.message
                ? 'border-red-400 focus:ring-red-300 bg-red-50'
                : 'border-slate-200 focus:ring-accent/40 focus:border-accent'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or call us at (703) 555-0100.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-cta hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending your request...
          </>
        ) : (
          <>
            Get My Free Home Value
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-navy-600">
        No spam. No obligations. We respect your privacy.
      </p>
    </form>
  );
}
