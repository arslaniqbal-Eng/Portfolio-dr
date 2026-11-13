import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { siteConfig } from '@/config/site';

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.contact.mapEmbedQuery,
)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', date: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 4 will persist this to the consultation_requests table.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', email: '', message: '', date: '' });
    }, 4500);
  };

  const waLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello, I'd like to book a consultation with ${siteConfig.brand.shortName}.`,
  )}`;

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div ref={ref} className={`max-w-3xl ${visible ? 'is-visible' : ''} reveal`}>
          <span className="eyebrow">
            <MessageCircle className="h-3.5 w-3.5" /> Contact
          </span>
          <h2 className="mt-5 section-title">Book your consultation</h2>
          <p className="mt-4 text-forest-700">
            Send a request and {siteConfig.brand.shortName} will get back to you within one business
            day. For the quickest response, message on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details + map */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard Icon={Phone} title="Phone" value={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} />
              <ContactCard Icon={Mail} title="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
              <ContactCard Icon={MapPin} title="Clinic" value={siteConfig.contact.address} />
              <ContactCard Icon={Clock} title="Hours" value={siteConfig.contact.hours} />
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-3xl bg-success-700 p-5 text-white transition hover:bg-success-600"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold">Chat on WhatsApp</span>
                  <span className="text-sm text-white/80">{siteConfig.contact.phone}</span>
                </span>
              </span>
              <Send className="h-5 w-5" />
            </a>

            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-forest-900/5">
              <iframe
                title="Clinic location"
                src={mapSrc}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-forest-900/5 sm:p-9"
          >
            <h3 className="font-display text-xl font-semibold text-forest-900">
              Consultation request
            </h3>
            <p className="mt-1 text-sm text-forest-500">Fields marked * are required.</p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name *">
                  <input required value={form.name} onChange={update('name')} className="input-field" placeholder="Your name" />
                </Field>
                <Field label="Phone *">
                  <input required value={form.phone} onChange={update('phone')} className="input-field" placeholder="03XX XXXXXXX" inputMode="tel" />
                </Field>
              </div>
              <Field label="Email">
                <input type="email" value={form.email} onChange={update('email')} className="input-field" placeholder="you@email.com" />
              </Field>
              <Field label="Preferred date">
                <input type="date" value={form.date} onChange={update('date')} className="input-field" />
              </Field>
              <Field label="How can I help? *">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  className="input-field resize-none"
                  placeholder="Tell me a little about your goals or concern."
                />
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              {sent ? (
                <>
                  <CheckCircle2 className="h-5 w-5" /> Request sent
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Send request
                </>
              )}
            </button>
            {sent && (
              <p className="mt-3 text-center text-sm text-success-700">
                Thank you — {siteConfig.brand.shortName} will reach out shortly.
              </p>
            )}
            <p className="mt-3 text-center text-xs text-forest-500">
              By sending, you agree to be contacted about your request. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  Icon,
  title,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex h-full items-start gap-3 rounded-2xl bg-cream-50 p-4 ring-1 ring-forest-900/5 transition hover:bg-sage-50">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-forest-700 shadow-soft">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-forest-500">{title}</div>
        <div className="mt-0.5 text-sm font-medium text-forest-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">
        {label}
      </span>
      {children}
    </label>
  );
}
