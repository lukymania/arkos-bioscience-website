import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-arkos-abyss text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/images/arkos-droplet.png" alt="Arkos" className="h-8 w-auto" />
              <div className="leading-none">
                <div className="font-display text-lg font-bold text-white tracking-wide">ARKOS</div>
                <div className="font-body text-[8px] font-semibold tracking-[0.3em] uppercase text-arkos-light">BIOSCIENCE</div>
              </div>
            </Link>
            <p className="font-body text-xs leading-relaxed text-white/50 max-w-xs">
              Ivy League PhD formulated nano-CBD. 3-8x better absorption. Water-compatible, THC-free, made in USA.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com/arkosbioscience" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-arkos-cyan transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://instagram.com/arkosbioscience" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-arkos-cyan transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Products', 'NanoCBD Tinctures', 'Pain Relief', 'Sleep Support', 'Pet Wellness'].map((item) => (
                <li key={item}><Link to="/shop" className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">Home</Link></li>
              <li><Link to="/science" className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">The Science</Link></li>
              <li><Link to="/about" className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-arkos-cyan mt-0.5 flex-shrink-0" /><span className="font-body text-sm text-white/50">info@arkosbio.com</span></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-arkos-cyan mt-0.5 flex-shrink-0" /><span className="font-body text-sm text-white/50">(888) 400-1080</span></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-arkos-cyan mt-0.5 flex-shrink-0" /><span className="font-body text-sm text-white/50">Made in USA</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/40">&copy; {new Date().getFullYear()} Arkos Bioscience. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Refund Policy</Link>
          </div>
        </div>
        <p className="font-body text-[10px] text-white/25 text-center mt-4 max-w-2xl mx-auto">
          These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Must be 21+ to purchase. Consult your physician before use.
        </p>
      </div>
    </footer>
  );
}
