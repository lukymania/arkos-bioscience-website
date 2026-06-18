import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'The Science', path: '/science' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const subColor = isHome && !scrolled ? 'text-white/70' : 'text-arkos-deep';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-arkos-light/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/images/arkos-droplet.png" alt="Arkos" className="h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className={`font-display text-xl lg:text-2xl font-bold tracking-wide ${scrolled ? 'text-arkos-abyss' : isHome ? 'text-white' : 'text-arkos-abyss'}`}>ARKOS</span>
              <span className={`font-body text-[9px] lg:text-[10px] font-semibold tracking-[0.3em] uppercase ${scrolled ? 'text-arkos-deep' : subColor}`}>BIOSCIENCE</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`font-body text-sm font-medium transition-colors hover:text-arkos-cyan ${
                scrolled ? 'text-arkos-charcoal' : isHome ? 'text-white/90' : 'text-arkos-charcoal'
              } ${location.pathname === link.path ? 'text-arkos-cyan' : ''}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/shop" className="hidden sm:inline-flex font-body text-sm font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-arkos-cyan/25">
              Shop Now
            </Link>
            <button className="relative p-2 hover:text-arkos-cyan transition-colors">
              <ShoppingCart className={`w-5 h-5 ${scrolled ? 'text-arkos-charcoal' : isHome && !scrolled ? 'text-white' : 'text-arkos-charcoal'}`} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-arkos-cyan text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className={`w-6 h-6 ${scrolled ? 'text-arkos-charcoal' : isHome ? 'text-white' : 'text-arkos-charcoal'}`} /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-arkos-charcoal' : isHome ? 'text-white' : 'text-arkos-charcoal'}`} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-arkos-light/30 shadow-xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`font-body text-base font-medium py-3 px-2 rounded-lg hover:bg-arkos-mist/50 transition-colors ${location.pathname === link.path ? 'text-arkos-cyan' : 'text-arkos-charcoal'}`}>{link.label}</Link>
            ))}
            <Link to="/shop" className="mt-2 font-body text-base font-semibold bg-arkos-cyan text-white py-3 rounded-full text-center">Shop Now</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
