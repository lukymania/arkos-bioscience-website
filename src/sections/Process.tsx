import { useEffect, useRef, useState } from 'react';
import { Droplets, Atom, Shield, Timer } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Droplets,
    title: 'Extract & Purify',
    desc: 'Premium hemp-derived CBD is extracted and rigorously purified to remove all THC and impurities.',
    color: 'bg-arkos-cyan',
  },
  {
    num: '02',
    icon: Atom,
    title: 'Nano-Size',
    desc: 'Our proprietary technology mechanically breaks CBD into ~60nm particles — 30x smaller than traditional oils.',
    color: 'bg-arkos-deep',
  },
  {
    num: '03',
    icon: Shield,
    title: 'Encapsulate',
    desc: 'Each nano-particle is individually encapsulated for water compatibility and maximum absorption.',
    color: 'bg-arkos-abyss',
  },
  {
    num: '04',
    icon: Timer,
    title: 'Absorb Fast',
    desc: 'Bypasses the liver for rapid absorption. Feel the effects in 15-30 minutes, not hours.',
    color: 'bg-arkos-cyan',
  },
];

export function Process() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-arkos-mist/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arkos-abyss mt-3">
            How <span className="text-arkos-deep">Arkos NanoCBD</span> Works
          </h2>
          <p className="font-body text-arkos-charcoal/60 mt-4 max-w-xl mx-auto">
            From plant to particle, every step is designed for one thing: getting more CBD into your bloodstream.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative group transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-arkos-light to-arkos-mist" />
              )}

              <div className="relative bg-white border border-arkos-light/20 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-arkos-cyan/5 hover:-translate-y-1 transition-all duration-300">
                {/* Step number */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-display text-3xl font-bold text-arkos-light/40">
                  {step.num}
                </span>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.color} shadow-lg shadow-arkos-cyan/10 mb-5 mt-4`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-arkos-charcoal/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
