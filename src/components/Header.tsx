
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ConsultNowButton } from './ConsultNowButton';
import { navItems, siteConfig } from '../config/site';
import { useScrolled } from '../hooks/useReveal';

export function Header() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollToSection = (href: string) => {
    setOpen(false);

    // Clean navigation target: supports #home, /home, /about, etc.
    const id = href.trim().toLowerCase().replace(/^\/+/, '').replace(/^#/, '');

    // Home navigation
    if (id === '' || id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    // About and Contact navigation
    const el = document.getElementById(id);

    if (!el) {
      console.error(`Navigation target not found: ${id}`);
      return;
    }

    requestAnimationFrame(() => {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-forest-800/50 ${
        scrolled
          ? 'bg-forest-950 shadow-md'
          : 'bg-forest-950/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">

        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('#home')}
          className="flex items-center cursor-pointer"
          aria-label="Go to Home"
        >
          <div className="[&_*]:!text-white">
            <Logo />
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <ConsultNowButton isNavbar={true} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-forest-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden animate-fade-in border-t border-forest-800 bg-forest-950">
          <ul className="container-page flex flex-col gap-1 py-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left rounded-2xl px-4 py-3 text-base font-medium text-white/80 hover:bg-forest-900 hover:text-white transition cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="container-page pb-6">
            <ConsultNowButton
              isNavbar={true}
              className="w-full justify-center"
            />

            <p className="mt-3 text-center text-xs text-sage-300/60">
              {siteConfig.contact.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
