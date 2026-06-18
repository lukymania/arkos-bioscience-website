import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Shop', id: 'products' },
  { label: 'The Science', id: 'science' },
  { label: 'How It Works', id: 'process' },
  { label: 'For Pets', id: 'pets' },
  { label: 'Reviews', id: 'testimonials' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setMobileOpen(false); }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-arkos-light/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <img src="/images/arkos-droplet.png" alt="Arkos" className="h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className={`font-display text-xl lg:text-2xl font-bold tracking-wide ${scrolled ? 'text-arkos-abyss' : 'text-white'}`}>ARKOS</span>
              <span className={`font-body text-[9px] lg:text-[10px] font-semibold tracking-[0.3em] uppercase ${scrolled ? 'text-arkos-deep' : 'text-white/70'}`}>BIOSCIENCE</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className={`font-body text-sm font-medium transition-colors hover:text-arkos-cyan ${scrolled ? 'text-arkos-charcoal' : 'text-white/90'}`}>
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo('products')} className="hidden sm:inline-flex font-body text-sm font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-arkos-cyan/25">
              Shop Now
            </button>
            <button className="relative p-2 hover:text-arkos-cyan transition-colors">
              <ShoppingCart className={`w-5 h-5 ${scrolled ? 'text-arkos-charcoal' : 'text-white'}`} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-arkos-cyan text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className={`w-6 h-6 ${scrolled ? 'text-arkos-charcoal' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-arkos-charcoal' : 'text-white'}`} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-arkos-light/30 shadow-xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left font-body text-base font-medium text-arkos-charcoal hover:text-arkos-cyan py-3 px-2 rounded-lg hover:bg-arkos-mist/50 transition-colors">{link.label}</button>
            ))}
            <button onClick={() => scrollTo('products')} className="mt-2 font-body text-base font-semibold bg-arkos-cyan text-white py-3 rounded-full">Shop Now</button>
          </nav>
        </div>
      )}
    </header>
  );
}
