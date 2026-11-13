import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Props {
  className?: string;
  variant?: 'solid' | 'outline';
  isNavbar?: boolean;
}

export function ConsultNowButton({ className = '', variant = 'solid', isNavbar = false }: Props) {
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const base = isNavbar
    ? 'bg-white text-forest-950 font-bold hover:bg-sage-50 shadow-soft'
    : variant === 'solid'
      ? 'bg-forest-950 text-white font-bold hover:bg-forest-900 shadow-lg shadow-forest-950/20'
      : 'border border-forest-200 bg-white/70 text-forest-800 hover:bg-white';

  const waLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello ${siteConfig.brand.shortName}, I'd like to book a consultation.`,
  )}`;

  return (
    <div className="relative" ref={popRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 ${base} ${className}`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full">
          <span className={`absolute -inset-1 rounded-full animate-pulse-ring ${isNavbar ? 'bg-white/20' : 'bg-white/20'}`} />
        </span>
        <Sparkles className={`relative h-4 w-4 animate-float ${isNavbar ? 'text-forest-950' : 'text-white'}`} />
        <span className="relative">Consult Now</span>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-50 w-72 origin-top-right animate-fade-up rounded-3xl bg-white p-3 shadow-card ring-1 ring-forest-900/5">
          <div className="mb-1 flex items-center justify-between px-2 pt-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-500">
              Reach out via
            </span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-7 w-7 place-items-center rounded-full text-forest-500 hover:bg-sage-100"
              aria-label="Close options"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          {/* WhatsApp Only */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-sage-50"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-success-100 text-success-700">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-forest-900">WhatsApp</span>
              <span className="text-xs text-forest-500">Fast reply · {siteConfig.contact.phone}</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}