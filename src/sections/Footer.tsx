import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-arkos-abyss text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/images/arkos-droplet.png" alt="Arkos" className="h-8 w-auto" />
              <div className="leading-none">
                <div className="font-display text-lg font-bold text-white tracking-wide">ARKOS</div>
                <div className="font-body text-[8px] font-semibold tracking-[0.3em] uppercase text-arkos-light">BIOSCIENCE</div>
              </div>
            </div>
            <p className="font-body text-xs leading-relaxed text-white/50 max-w-xs">
              Ivy League PhD formulated nano-CBD. 3-8x better absorption. Water-compatible, THC-free, made in USA.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-arkos-cyan transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-arkos-cyan transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Products', 'NanoCBD Tinctures', 'Pain Relief', 'Sleep Support', 'Pet Wellness'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollTo('products')} className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'The Science', 'Journal', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      if (item === 'The Science') scrollTo('science');
                      else if (item === 'About Us') scrollTo('trust');
                      else scrollTo('products');
                    }}
                    className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">Policies</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <span className="font-body text-sm text-white/50 hover:text-arkos-light transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Arkos Bioscience. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
