import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const BG = '#1B2539';
const ACCENT = '#F77A41';
const LIGHT = '#F0EDEB';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = 'text-sm md:text-base font-medium transition-colors';

  return (
    <header
      style={{ backgroundColor: BG }}
      className={`fixed top-0 inset-x-0 z-50 transition-shadow ${
        scrolled ? 'shadow-[0_6px_20px_rgba(0,0,0,0.35)]' : 'shadow-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: LIGHT }}
            >
              <Rocket size={18} color={BG} />
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className="text-lg md:text-xl font-semibold tracking-tight"
                style={{ color: LIGHT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}
              >
                Brands
              </span>
              <span
                className="text-lg md:text-xl font-semibold tracking-tight"
                style={{ color: ACCENT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}
              >
                Lift
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={linkClass} style={{ color: LIGHT }}>
              About
            </a>
            <a href="#services" className={linkClass} style={{ color: LIGHT }}>
              Services
            </a>
            <a href="#work" className={linkClass} style={{ color: LIGHT }}>
              Work
            </a>
            <a href="#contact" className={linkClass} style={{ color: LIGHT }}>
              Contact
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full font-semibold"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            style={{ color: LIGHT }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#work', label: 'Work' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg"
                style={{ color: LIGHT }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-full font-semibold"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
