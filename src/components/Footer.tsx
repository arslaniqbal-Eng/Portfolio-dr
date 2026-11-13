import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, siteConfig } from '../config/site';

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-forest-950 text-sage-100">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="[&_*]:!text-sage-100 [&_.text-forest-500]:!text-sage-300"><Logo /></div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sage-200/80">Head of the School of Eastern Medicine at Minhaj University Lahore. Specializing in Eastern Medicine, Phytomedicine, and clinical research.</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: siteConfig.social.instagram, Icon: Instagram, label: 'Instagram' },
                { href: siteConfig.social.facebook, Icon: Facebook, label: 'Facebook' },
                { href: siteConfig.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-forest-800/60 text-sage-200 transition hover:bg-sage-500 hover:text-forest-950"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">Explore</h4>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-sage-200/80 transition hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-sage-200/80">
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-sage-300" /><span>{siteConfig.contact.phone}</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-sage-300" /><span>{siteConfig.contact.email}</span></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-sage-300" /><span>{siteConfig.contact.address}</span></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-sage-300" /><span>{siteConfig.contact.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-forest-800/60 pt-6 sm:flex-row">
          <p className="text-xs text-sage-300/70">© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-xs font-medium text-sage-300 transition hover:text-white">
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full bg-forest-800/60 transition hover:bg-sage-500 hover:text-forest-950">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}