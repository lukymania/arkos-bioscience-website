import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function ScienceExplained() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const comparisonData = [
    { method: 'Arkos NanoCBD', pct: 50, label: '20-50%', highlight: true },
    { method: 'Sublingual Oil Drops', pct: 20, label: '~20%', highlight: false },
    { method: 'Vaping / Inhalation', pct: 15, label: '~15%', highlight: false },
    { method: 'Traditional CBD Oil', pct: 8, label: '~8%', highlight: false },
    { method: 'CBD Capsules / Gummies', pct: 5, label: '~5%', highlight: false },
  ];

  return (
    <section id="science" ref={ref} className="section-padding bg-gradient-to-b from-white via-arkos-mist/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">The Science</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-arkos-abyss mt-3 leading-tight">
            Why Most CBD <br className="hidden sm:block" /><span className="text-arkos-deep italic">Doesn't Work</span>
          </h2>
          <p className="font-body text-arkos-charcoal/70 mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            Traditional CBD oil delivers as little as <strong>4-6%</strong> of its active compounds to your bloodstream.
            Our NanoCBD formula delivers <strong className="text-arkos-deep">20-50%</strong>.
            Here's the science — visualized.
          </p>
        </div>

        {/* Part 1: The Problem - Skin Barrier Visual */}
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="order-2 lg:order-1">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-3 block">The Problem</span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-arkos-abyss mb-4">
              Traditional CBD Clusters Can't Get Through
            </h3>
            <p className="font-body text-arkos-charcoal/70 mb-4 leading-relaxed">
              Standard CBD oil forms large clusters of approximately <strong>2,000 nanometers</strong>. 
              These oil droplets are too big to penetrate your skin barrier or pass through cell membranes. 
              Most of the CBD you take never reaches your bloodstream.
            </p>
            <p className="font-body text-arkos-charcoal/70 leading-relaxed">
              It's not that CBD is ineffective — it's that the delivery method is failing you.
              Your body simply can't absorb large oil clusters efficiently.
            </p>
            {/* Key fact box */}
            <div className="mt-6 bg-red-50 border-l-4 border-red-300 rounded-r-xl p-4">
              <p className="font-body text-sm text-red-700">
                <strong>Fact:</strong> When you swallow traditional CBD oil, your liver breaks most of it down 
                in the "first-pass effect." Only 4-20% of the original dose remains active.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/science-barrier.jpg" alt="Traditional CBD vs NanoCBD skin barrier comparison" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="font-body text-xs text-white/80">
                  At ~60nm, Arkos NanoCBD particles pass directly through skin barrier pores (55-100nm)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: The Scale Visual */}
        <div className={`mb-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">Size Matters</span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-arkos-abyss">
              Putting 60 Nanometers in Perspective
            </h3>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/science-scale.jpg" alt="Nanometer scale comparison showing NanoCBD particle size" className="w-full h-auto" />
          </div>
          <p className="font-body text-sm text-arkos-charcoal/60 text-center mt-4 max-w-2xl mx-auto">
            Arkos NanoCBD particles are smaller than a skin barrier pore, smaller than bacteria, 
            and nearly as small as a DNA strand — enabling direct passage into your body's cells.
          </p>
        </div>

        {/* Part 3: Bioavailability Comparison Chart */}
        <div className={`mb-20 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">Bioavailability Comparison</span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-arkos-abyss">
              How CBD Delivery Methods Compare
            </h3>
            <p className="font-body text-arkos-charcoal/60 mt-2 max-w-xl mx-auto">
              Not all CBD products absorb equally. Here's how Arkos NanoCBD compares to every major delivery format.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {comparisonData.map((item) => (
              <div key={item.method} className="relative">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-3">
                    {item.highlight && (
                      <span className="font-body text-[10px] font-bold bg-arkos-cyan text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Best</span>
                    )}
                    <span className={`font-body text-sm font-semibold ${item.highlight ? 'text-arkos-abyss' : 'text-arkos-charcoal/70'}`}>
                      {item.method}
                    </span>
                  </div>
                  <span className={`font-display text-lg font-bold ${item.highlight ? 'text-arkos-cyan' : 'text-arkos-charcoal/50'}`}>
                    {item.label}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${item.highlight ? 'bg-gradient-to-r from-arkos-cyan to-arkos-light' : 'bg-gray-300'}`}
                    style={{ width: visible ? `${item.pct * 2}%` : '0%', transitionDelay: `${comparisonData.indexOf(item) * 150}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#products" className="group inline-flex items-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl">
            Shop NanoCBD
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
