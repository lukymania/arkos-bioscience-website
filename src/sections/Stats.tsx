import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '~60', unit: 'nm', label: 'Particle Size', sub: 'Engineered, not blended' },
  { value: '3-8', unit: 'x', label: 'Better Absorption', sub: 'Verified by studies' },
  { value: '30', unit: '%+', label: 'Bioavailability', sub: 'In published research' },
];

export function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 lg:py-20 bg-gradient-to-r from-arkos-abyss via-arkos-deep to-arkos-abyss overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-display text-5xl lg:text-6xl font-bold text-white leading-none">
                {stat.value}
                <span className="text-arkos-light">{stat.unit}</span>
              </div>
              <div className="font-body text-sm font-semibold text-white/80 tracking-wider uppercase mt-3">
                {stat.label}
              </div>
              <div className="font-body text-xs text-white/50 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
