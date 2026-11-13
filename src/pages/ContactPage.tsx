import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.mapEmbedQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.mapEmbedQuery)}`;

export function ContactPage() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  
  // WhatsApp Form State
  const [waForm, setWaForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  
  // Email Form State
  const emailFormRef = useRef<HTMLFormElement>(null);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Consultation Request*%0A%0A*Name:* ${waForm.name}%0A*Phone:* ${waForm.phone}%0A*Email:* ${waForm.email || 'N/A'}%0A*Subject:* ${waForm.subject}%0A*Message:* ${waForm.message}`;
    const waLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
    window.open(waLink, '_blank');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailFormRef.current) return;

    setEmailStatus('loading');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing in .env');
      }

      await emailjs.sendForm(serviceId, templateId, emailFormRef.current, publicKey);
      setEmailStatus('success');
      emailFormRef.current.reset();
      setTimeout(() => setEmailStatus('idle'), 5000);
    } catch (error) {
      console.error('Email error:', error);
      setEmailStatus('error');
      setTimeout(() => setEmailStatus('idle'), 5000);
    }
  };

  return (
    <div id="contact" className="scroll-mt-20 py-20 sm:py-28 bg-cream-50 border-t border-forest-100">
      <div className="container-page">
        
        <div ref={ref} className={`max-w-3xl text-center mx-auto mb-12 ${visible ? 'is-visible' : ''} reveal`}>
          <span className="eyebrow mx-auto"><MessageCircle className="h-3.5 w-3.5" /> Contact Us</span>
          <h2 className="mt-5 section-title">Book a Consultation</h2>
          <p className="mt-4 text-forest-700">
            Choose the contact method that works best for you. We aim to respond within one business day.
          </p>
        </div>

        <div className={`grid gap-8 lg:grid-cols-2`}>
          
          {/* WhatsApp Form */}
          <div className="card p-8 bg-white">
            <div className="flex items-center gap-3 border-b border-forest-100 pb-5 mb-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-success-100 text-success-700">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-forest-900">WhatsApp Consultation</h2>
                <p className="text-sm text-forest-500">Prepare your message in WhatsApp.</p>
              </div>
            </div>
            <form onSubmit={handleWaSubmit} className="space-y-4">
              <Field label="Full Name *">
                <input required type="text" className="input-field" placeholder="Your name" onChange={(e) => setWaForm({...waForm, name: e.target.value})} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone Number *">
                  <input required type="tel" className="input-field" placeholder="03XX XXXXXXX" onChange={(e) => setWaForm({...waForm, phone: e.target.value})} />
                </Field>
                <Field label="Email Address (Optional)">
                  <input type="email" className="input-field" placeholder="you@email.com" onChange={(e) => setWaForm({...waForm, email: e.target.value})} />
                </Field>
              </div>
              <Field label="Consultation Subject *">
                <input required type="text" className="input-field" placeholder="e.g., Herbal guidance" onChange={(e) => setWaForm({...waForm, subject: e.target.value})} />
              </Field>
              <Field label="Message *">
                <textarea required rows={4} className="input-field resize-none" placeholder="Briefly describe your concern..." onChange={(e) => setWaForm({...waForm, message: e.target.value})} />
              </Field>
              <button type="submit" className="btn-primary w-full justify-center bg-success-700 hover:bg-success-800 focus-visible:ring-success-500">
                <MessageCircle className="h-5 w-5" /> Open in WhatsApp
              </button>
              <p className="text-center text-xs text-forest-500">You will need to press Send inside WhatsApp.</p>
            </form>
          </div>

          {/* Email Form */}
          <div className="card p-8 bg-white">
            <div className="flex items-center gap-3 border-b border-forest-100 pb-5 mb-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-100 text-forest-700">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-forest-900">Email Consultation</h2>
                <p className="text-sm text-forest-500">Send a secure request directly to our inbox.</p>
              </div>
            </div>
            
            <form ref={emailFormRef} onSubmit={handleEmailSubmit} className="space-y-4">
              <Field label="Full Name *">
                <input required name="user_name" type="text" className="input-field" placeholder="Your name" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email Address *">
                  <input required name="user_email" type="email" className="input-field" placeholder="you@email.com" />
                </Field>
                <Field label="Phone Number (Optional)">
                  <input name="user_phone" type="tel" className="input-field" placeholder="03XX XXXXXXX" />
                </Field>
              </div>
              <Field label="Subject *">
                <input required name="subject" type="text" className="input-field" placeholder="Consultation Request" />
              </Field>
              <Field label="Message *">
                <textarea required name="message" rows={4} className="input-field resize-none" placeholder="Briefly describe your concern..." />
              </Field>
              <button type="submit" disabled={emailStatus === 'loading'} className="btn-primary w-full justify-center">
                {emailStatus === 'loading' ? 'Sending...' : <><Send className="h-5 w-5" /> Send Email Request</>}
              </button>
              
              {emailStatus === 'success' && (
                <div className="flex items-center gap-2 text-sm text-success-700 bg-success-50 p-3 rounded-xl justify-center">
                  <CheckCircle2 className="h-4 w-4" /> Your email has been sent successfully!
                </div>
              )}
              {emailStatus === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 p-3 rounded-xl justify-center">
                  <AlertCircle className="h-4 w-4" /> Failed to send. Please check config or try WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mt-16 card p-2 sm:p-4 bg-white">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 items-center">
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-forest-900">Clinic Location</h3>
              <ul className="mt-6 space-y-4 text-sm text-forest-700">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-forest-500 shrink-0" /> {siteConfig.contact.address}</li>
                <li className="flex gap-3"><Clock className="h-5 w-5 text-forest-500 shrink-0" /> {siteConfig.contact.hours}</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-forest-500 shrink-0" /> {siteConfig.contact.phone}</li>
              </ul>
              <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8">
                Get Directions <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl ring-1 ring-forest-900/5 h-[300px] lg:h-[400px]">
              <iframe title="Clinic location" src={mapSrc} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper components
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-forest-600">{label}</span>
      {children}
    </label>
  );
}