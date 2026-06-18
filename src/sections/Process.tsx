import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Mechanical Particle Reduction',
    desc: 'Using proprietary high-shear forces, we break CBD clusters from ~2,000nm down to ~60nm — about 30x smaller than traditional oil droplets.',
  },
  {
    num: '02',
    title: 'Individual Encapsulation',
    desc: 'Each nano-particle is individually wrapped in a protective nano-shell. This prevents them from re-clustering and keeps them stable.',
  },
  {
    num: '03',
    title: 'Water-Compatible Transformation',
    desc: 'The nano-shells make CBD water-compatible. Your body is ~60% water — now your CBD can finally work with your biology, not against it.',
  },
];

export function Process() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="section-padding bg-gradient-to-b from-white to-arkos-mist/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">Our Process</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">
            How Arkos <span className="text-arkos-deep italic">Engineers</span> NanoCBD
          </h2>
          <p className="font-body text-arkos-charcoal/60 mt-4 max-w-2xl mx-auto">
            Three steps that transform CBD from a poorly-absorbed oil into a water-compatible compound your body can actually use.
          </p>
        </div>

        {/* Process Image */}
        <div className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/science-process.jpg" alt="NanoCBD encapsulation process visualization" className="w-full h-auto" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white border border-arkos-light/20 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:shadow-arkos-cyan/5 hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <span className="font-display text-5xl font-bold text-arkos-light/40 absolute top-4 right-4">{step.num}</span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-arkos-cyan to-arkos-deep flex items-center justify-center mb-5 shadow-lg shadow-arkos-cyan/20">
                <span className="font-body text-lg font-bold text-white">{step.num}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">{step.title}</h3>
              <p className="font-body text-sm text-arkos-charcoal/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Key facts strip */}
        <div className={`mt-12 bg-arkos-abyss rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Particle Size', value: '~2,000nm → ~60nm' },
              { label: 'Method', value: 'Mechanical (not chemical)' },
              { label: 'Encapsulation', value: 'Individual nano-shells' },
              { label: 'Result', value: '20-50% bioavailability' },
            ].map((fact) => (
              <div key={fact.label} className="p-2">
                <span className="font-body text-[10px] font-semibold tracking-wider uppercase text-arkos-light/60 block mb-1">{fact.label}</span>
                <span className="font-body text-sm font-semibold text-white">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-arkos-charcoal/50 mb-4">
            Formulated by a Yale PhD scientist specializing in pharmaceutical nano-engineering.
          </p>
          <a href="#products" className="group inline-flex items-center gap-2 font-body font-semibold text-arkos-deep hover:text-arkos-cyan transition-colors">
            Explore Our Formulas <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
