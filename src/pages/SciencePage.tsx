import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Droplets, Zap, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO, faqSchema } from '@/components/SEO';

const comparisonData = [
  { method: 'Arkos NanoCBD', pct: 50, label: '20-50%', highlight: true },
  { method: 'Sublingual Oil Drops', pct: 20, label: '~20%', highlight: false },
  { method: 'Vaping / Inhalation', pct: 15, label: '~15%', highlight: false },
  { method: 'Traditional CBD Oil', pct: 8, label: '~8%', highlight: false },
  { method: 'CBD Capsules / Gummies', pct: 5, label: '~5%', highlight: false },
];

const processSteps = [
  { num: '01', title: 'Precision Mechanical Disruption', desc: 'Using proprietary precision mechanical disruption, we break CBD clusters from ~2,000nm down to ~60nm. No chemicals. No emulsifiers. Pure mechanical precision.', icon: Zap },
  { num: '02', title: 'Individual Encapsulation', desc: 'Each nano-particle is individually wrapped in a protective nano-shell. This prevents re-clustering and keeps each particle stable and water-compatible.', icon: Microscope },
  { num: '03', title: 'Water-Compatible Delivery', desc: 'Your body is ~60% water. Our nano-shells make CBD water-compatible, allowing direct passage through cell membranes for 20-50% bioavailability.', icon: Droplets },
];

const scienceFAQs = [
  { q: 'What makes nano-CBD different from regular CBD?', a: 'Nano-CBD is broken down into particles roughly 60 nanometers in size — about 30x smaller than traditional CBD oil clusters. This smaller size allows the particles to pass through cell membranes and enter your bloodstream directly, resulting in 3-8x better absorption and a 15-30 minute onset time compared to 45-90 minutes for traditional CBD.' },
  { q: 'How does Arkos make CBD water-compatible?', a: 'CBD molecules are naturally hydrophobic, meaning they repel water. Through our proprietary precision mechanical disruption process, we break CBD into nano-sized particles and individually encapsulate each one in a protective shell. This encapsulation makes the particles water-compatible, allowing them to work with your body\'s natural water-based biology rather than against it.' },
  { q: 'What does 20-50% bioavailability mean?', a: 'Bioavailability refers to the percentage of a compound that actually enters your bloodstream. Traditional CBD oil has roughly 4-8% bioavailability, meaning over 90% passes through your system unused. Arkos NanoCBD achieves 20-50% bioavailability in published research — that means 3 to 8 times more of the CBD you pay for actually reaches your body.' },
  { q: 'How fast does nano-CBD work?', a: 'Most users report feeling the effects of Arkos NanoCBD within 15-30 minutes. This is significantly faster than traditional CBD oil, which typically takes 45-90 minutes. The rapid onset is due to the nano-sized particles bypassing the digestive system and liver breakdown, entering the bloodstream directly.' },
  { q: 'Is nano-CBD safe?', a: 'Yes. Our process uses precision mechanical disruption — not chemical solvents or emulsifiers. Every batch is third-party lab tested for purity, potency, and safety. All products are THC-free, made in the USA, and formulated by a Yale PhD scientist specializing in nano-encapsulation systems.' },
  { q: 'Will nano-CBD show up on a drug test?', a: 'Arkos NanoCBD products are THC-free. We use CBD isolate that contains zero THC. All products are third-party lab tested to verify THC-free status. However, we always recommend consulting with your employer or testing facility if you have specific concerns.' },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-arkos-light/30 rounded-xl overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left hover:bg-arkos-mist/20 transition-colors">
        <span className="font-display text-base font-semibold text-arkos-abyss pr-4">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-arkos-cyan flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-arkos-cyan flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="font-body text-sm text-arkos-charcoal/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function SciencePage() {
  const [visible, setVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="The Science Behind NanoCBD | Arkos Bioscience"
        description="Learn how nano-CBD technology works. 3-8x better absorption, 20-50% bioavailability, 60nm particles. Ivy League PhD formulated. Explore the peer-reviewed science."
        pathname="/science"
        image="/images/science-hero.jpg"
        schema={faqSchema(scienceFAQs)}
      />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/science-hero.jpg" alt="Nano-CBD particles in water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/85 via-arkos-abyss/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-light mb-4 block">The Science</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Why Most CBD <span className="text-arkos-light italic">Doesn't Work</span>
          </h1>
          <p className="font-body text-white/80 mt-6 max-w-xl text-lg leading-relaxed">
            And how Arkos NanoCBD fixes the absorption problem that the entire CBD industry has been ignoring.
          </p>
        </div>
      </section>

      <div ref={ref as React.Ref<HTMLDivElement>}>
        {/* The Problem */}
        <section className="section-padding bg-gradient-to-b from-white via-arkos-mist/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-3 block">The Problem</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss mb-5">Traditional CBD Clusters Can't Get Through</h2>
                <p className="font-body text-arkos-charcoal/70 mb-4 leading-relaxed">
                  Standard CBD oil forms large clusters of approximately <strong>2,000 nanometers</strong>. These oil droplets are too big to penetrate your skin barrier or pass through cell membranes. Most of the CBD you take never reaches your bloodstream.
                </p>
                <p className="font-body text-arkos-charcoal/70 leading-relaxed">
                  It's not that CBD is ineffective — it's that the delivery method is failing you. Your body simply can't absorb large oil clusters efficiently.
                </p>
                <div className="mt-6 bg-red-50 border-l-4 border-red-300 rounded-r-xl p-4">
                  <p className="font-body text-sm text-red-700"><strong>Fact:</strong> When you swallow traditional CBD oil, your liver breaks most of it down in the "first-pass effect." Only 4-20% of the original dose remains active.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/science-barrier.jpg" alt="Traditional CBD vs NanoCBD skin barrier comparison" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Scale Visual */}
            <div className={`mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-8">
                <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">Size Matters</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss">Putting 60 Nanometers in Perspective</h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/science-scale.jpg" alt="Nanometer scale comparison" className="w-full h-auto" />
              </div>
              <p className="font-body text-sm text-arkos-charcoal/60 text-center mt-4 max-w-2xl mx-auto">
                Arkos NanoCBD particles are smaller than a skin barrier pore, smaller than bacteria, and nearly as small as a DNA strand — enabling direct passage into your body's cells.
              </p>
            </div>

            {/* Bioavailability Chart */}
            <div className={`mb-20 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-10">
                <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">Bioavailability Comparison</span>
                <h2 className="font-display text-3xl font-bold text-arkos-abyss">How CBD Delivery Methods Compare</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {comparisonData.map((item) => (
                  <div key={item.method} className="relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        {item.highlight && <span className="font-body text-[10px] font-bold bg-arkos-cyan text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Best</span>}
                        <span className={`font-body text-sm font-semibold ${item.highlight ? 'text-arkos-abyss' : 'text-arkos-charcoal/70'}`}>{item.method}</span>
                      </div>
                      <span className={`font-display text-lg font-bold ${item.highlight ? 'text-arkos-cyan' : 'text-arkos-charcoal/50'}`}>{item.label}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-1000 ${item.highlight ? 'bg-gradient-to-r from-arkos-cyan to-arkos-light' : 'bg-gray-300'}`} style={{ width: visible ? `${item.pct * 2}%` : '0%', transitionDelay: `${comparisonData.indexOf(item) * 150}ms` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-gradient-to-b from-arkos-mist/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">Our Process</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">How Arkos <span className="text-arkos-deep italic">Engineers</span> NanoCBD</h2>
            </div>
            <div className="mb-14">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/science-process.jpg" alt="NanoCBD encapsulation process" className="w-full h-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.num} className={`relative bg-white border border-arkos-light/20 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 200}ms` }}>
                  <span className="font-display text-5xl font-bold text-arkos-light/40 absolute top-4 right-4">{step.num}</span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-arkos-cyan to-arkos-deep flex items-center justify-center mb-5 shadow-lg shadow-arkos-cyan/20">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-arkos-charcoal/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">Head to Head</span>
              <h2 className="font-display text-3xl font-bold text-arkos-abyss">Traditional CBD Oil vs. Arkos NanoCBD</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-t-2 border-b border-arkos-abyss">
                    <th className="font-body text-xs font-semibold tracking-wider uppercase text-arkos-abyss text-left py-3 px-4">Feature</th>
                    <th className="font-body text-xs font-semibold tracking-wider uppercase text-red-500 text-center py-3 px-4">Traditional CBD Oil</th>
                    <th className="font-body text-xs font-semibold tracking-wider uppercase text-arkos-cyan text-center py-3 px-4">Arkos NanoCBD</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Particle Size', traditional: '~2,000 nm', arkOS: '~60 nm', highlight: true },
                    { feature: 'Water Soluble', traditional: 'No', arkOS: 'Yes', highlight: false },
                    { feature: 'Encapsulated', traditional: 'No', arkOS: 'Yes — individually', highlight: false },
                    { feature: 'Bypasses Liver', traditional: 'No', arkOS: 'Yes', highlight: false },
                    { feature: 'Bioavailability', traditional: '4–8%', arkOS: 'Up to 30%+', highlight: true },
                    { feature: 'Onset Time', traditional: '45–90 minutes', arkOS: '15–30 minutes', highlight: true },
                    { feature: 'Method', traditional: 'Chemical extraction', arkOS: 'Precision mechanical disruption', highlight: false },
                  ].map((row, i) => (
                    <tr key={row.feature} className={`border-b ${i % 2 === 0 ? 'bg-arkos-mist/10' : ''}`}>
                      <td className="font-body text-sm font-semibold text-arkos-charcoal py-3 px-4">{row.feature}</td>
                      <td className="font-body text-sm text-red-500/80 text-center py-3 px-4">{row.traditional}</td>
                      <td className={`font-body text-sm font-semibold text-center py-3 px-4 ${row.highlight ? 'text-arkos-cyan' : 'text-arkos-deep'}`}>{row.arkOS}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Research Citations */}
        <section className="py-16 bg-gradient-to-r from-arkos-abyss via-arkos-deep to-arkos-abyss relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-10 h-10 text-arkos-light mx-auto mb-5" />
            <h2 className="font-display text-3xl font-bold text-white mb-4">Peer-Reviewed Research</h2>
            <p className="font-body text-white/70 mb-8 max-w-2xl mx-auto">Our technology is backed by published scientific studies on nano-CBD absorption and bioavailability.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p className="font-body text-sm text-white/80 italic">"Nano-encapsulated CBD demonstrated significantly enhanced bioavailability compared to conventional CBD oil formulations..."</p>
                <p className="font-body text-xs text-arkos-light mt-3">— National Library of Medicine, 2023</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p className="font-body text-sm text-white/80 italic">"Particle-reduced CBD formulations delivered 3-8x better absorption rates than standard oil-based CBD..."</p>
                <p className="font-body text-xs text-arkos-light mt-3">— PMC7400941, 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gradient-to-b from-white to-arkos-mist/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">FAQ</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {scienceFAQs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFAQ === i} onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-arkos-abyss mb-4">Experience the Science Yourself</h2>
            <p className="font-body text-arkos-charcoal/60 mb-8">30-day money-back guarantee. Free shipping on orders over $75.</p>
            <Link to="/shop" className="group inline-flex items-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl">
              Shop NanoCBD <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
