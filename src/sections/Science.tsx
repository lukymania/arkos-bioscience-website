import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';

export function Science() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="science"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-arkos-mist/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">
            The Science
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arkos-abyss mt-3">
            Better Absorption, <span className="text-arkos-deep">By Design</span>
          </h2>
          <p className="font-body text-arkos-charcoal/70 mt-4 max-w-2xl mx-auto">
            Developed by an Ivy League PhD scientist specializing in nano-encapsulation.
            Our formula mechanically breaks CBD into ~60nm particles for superior bioavailability.
          </p>
        </div>

        {/* Comparison */}
        <div
          className={`grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Traditional CBD */}
          <div className="bg-white border border-red-100 rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-arkos-charcoal">
                  Traditional CBD Oil
                </h3>
                <p className="font-body text-xs text-arkos-charcoal/50">Oil-based, standard extraction</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Particle Size', value: '~2,000 nm', highlight: true },
                { label: 'Water Soluble', value: 'No', highlight: true },
                { label: 'Bioavailability', value: '4-8%', highlight: true },
                { label: 'Onset Time', value: '45-90 minutes' },
                { label: 'Encapsulated', value: 'No' },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="font-body text-sm text-arkos-charcoal/70">{item.label}</span>
                  <span className={`font-body text-sm font-semibold ${item.highlight ? 'text-red-400' : 'text-arkos-charcoal'}`}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arkos NanoCBD */}
          <div className="bg-gradient-to-br from-arkos-abyss to-arkos-deep rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 30% 40%, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-arkos-light" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Arkos NanoCBD
                  </h3>
                  <p className="font-body text-xs text-white/60">Nano-encapsulated, water-compatible</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Particle Size', value: '~60 nm', highlight: true },
                  { label: 'Water Soluble', value: 'Yes', highlight: true },
                  { label: 'Bioavailability', value: 'Up to 30%+', highlight: true },
                  { label: 'Onset Time', value: '15-30 minutes' },
                  { label: 'Encapsulated', value: 'Yes' },
                ].map((item) => (
                  <li key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="font-body text-sm text-white/70">{item.label}</span>
                    <span className={`font-body text-sm font-semibold ${item.highlight ? 'text-arkos-light' : 'text-white'}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key stat */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-body text-arkos-charcoal/60">
            Published nano-CBD research shows particle-reduced formulations deliver{' '}
            <span className="font-semibold text-arkos-deep">3 to 8 times better absorption</span>{' '}
            than oil-based CBD, reaching{' '}
            <span className="font-semibold text-arkos-deep">20 to 50 percent bioavailability</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
