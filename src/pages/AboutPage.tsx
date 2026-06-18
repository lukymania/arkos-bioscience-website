import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, GraduationCap, Lightbulb } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Arkos Bioscience"
        description="A scientist and an entrepreneur walked into a lab. We didn't start Arkos because the CBD industry needed another brand. We started it because the CBD industry needed to actually work."
        pathname="/about"
        image="/images/about-lab.jpg"
      />

      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-lab.jpg" alt="Arkos research laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/85 via-arkos-abyss/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-light mb-4 block">Our Story</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            A Scientist and an Entrepreneur Walk Into <span className="text-arkos-light italic">a Lab</span>
          </h1>
          <p className="font-body text-white/80 mt-6 max-w-xl text-lg">
            We didn't start Arkos because the CBD industry needed another brand. We started it because the CBD industry needed to actually work.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-3 block">The Problem</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss mb-6">The Problem With <span className="text-arkos-deep italic">Standard CBD</span></h2>
          <div className="space-y-4 font-body text-arkos-charcoal/70 leading-relaxed">
            <p>Here's a fact most CBD companies don't advertise: <strong className="text-arkos-abyss">your body absorbs less than 6% of a standard CBD oil</strong>. That means if you take a 30mg dose, you're actually getting less than 2mg of usable CBD. The rest passes through your system unused.</p>
            <p>The reason is simple chemistry. CBD molecules are hydrophobic — they repel water. Since your body is mostly water, the molecules clump together into large clusters that your digestive system can barely process. It's like trying to dissolve a marble in a glass of water.</p>
            <p>This is the dirty secret of the hemp CBD industry. Millions of people buy CBD products, feel little to nothing, and assume CBD just doesn't work for them. But it's not the compound that's failing — it's the delivery.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gradient-to-b from-arkos-mist/20 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-3 block">The Solution</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss mb-6">When <span className="text-arkos-deep">Science</span> Met Obsession</h2>
          <div className="space-y-4 font-body text-arkos-charcoal/70 leading-relaxed">
            <p>Arkos started the way most things worth doing start — with a problem that wouldn't leave someone alone.</p>
            <p>Our co-founder is the kind of entrepreneur who takes things apart to understand how they work, then refuses to put them back together until they work better. After a personal experience with CBD that left him underwhelmed, he didn't just move on. He went down the rabbit hole.</p>
            <p>Why was the absorption so low? Why wasn't anyone fixing it? And if someone could fix it, why hadn't they?</p>
            <p>The answer led him to a Yale PhD scientist who had spent his career engineering nano-encapsulation systems for drug delivery. Together, they developed a proprietary process that breaks CBD into roughly 60-nanometer particles — roughly 1/1000th the width of a human hair.</p>
            <p>At that size, CBD particles can pass through cell membranes and enter your bloodstream efficiently. But making the particles small was only half the challenge. Left alone, nano-sized CBD particles will naturally re-cluster back together. So they developed an encapsulation method that wraps each individual particle, keeping it separated and stable.</p>
            <div className="bg-arkos-abyss/5 border-l-4 border-arkos-cyan rounded-r-xl p-5 mt-6">
              <p className="font-body text-sm text-arkos-charcoal/80 italic">"The result: peer-reviewed nano-encapsulation research shows particle-reduced CBD formulations deliver <strong className="text-arkos-abyss not-italic">3-8x better absorption</strong> than standard CBD oil, with some studies showing <strong className="text-arkos-abyss not-italic">20-50% bioavailability rates</strong> compared to the industry baseline of ~6%."</p>
              <p className="font-body text-xs text-arkos-charcoal/50 mt-2">— National Library of Medicine, 2023; PMC7400941, 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-arkos-cyan mb-2 block">The Team</span>
            <h2 className="font-display text-3xl font-bold text-arkos-abyss">Two Very Different People Who Agreed on One Thing</h2>
            <p className="font-body text-arkos-charcoal/60 mt-3">If you're going to make a CBD product, it should actually do something.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-arkos-mist/30 to-white border border-arkos-light/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-arkos-cyan/10 flex items-center justify-center mx-auto mb-5">
                <GraduationCap className="w-8 h-8 text-arkos-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold text-arkos-abyss">The Scientist</h3>
              <span className="font-body text-xs font-bold tracking-wider uppercase text-arkos-cyan mt-1 block">Yale PhD &middot; Nano-Encapsulation</span>
              <p className="font-body text-sm text-arkos-charcoal/60 mt-4 leading-relaxed">A career spent engineering nano-encapsulation systems for drug delivery. He brought the peer-reviewed research, the encapsulation methodology, and the scientific rigor that turns isolated CBD particles into a stable, water-compatible compound the body can actually absorb — consistently, batch after batch.</p>
            </div>
            <div className="bg-gradient-to-br from-arkos-sand/30 to-white border border-arkos-light/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-arkos-cyan/10 flex items-center justify-center mx-auto mb-5">
                <Lightbulb className="w-8 h-8 text-arkos-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold text-arkos-abyss">The Entrepreneur</h3>
              <span className="font-body text-xs font-bold tracking-wider uppercase text-arkos-cyan mt-1 block">Co-Founder &middot; Operations</span>
              <p className="font-body text-sm text-arkos-charcoal/60 mt-4 leading-relaxed">The one who asks "why not?" until something happens. He came from outside the CBD industry with no attachment to how things had always been done — just a conviction that if the science existed to make CBD work better, someone should bring it to people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-16 bg-gradient-to-r from-arkos-abyss via-arkos-deep to-arkos-abyss relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FlaskConical className="w-10 h-10 text-arkos-light mx-auto mb-5" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">What Does <span className="text-arkos-light italic">Arkos</span> Mean?</h2>
          <p className="font-body text-white/70 leading-relaxed max-w-xl mx-auto">In Greek mythology, Arkos was the son of Zeus and the nymph Callisto — a figure known for bravery, strength, and unwavering loyalty. His name carries the meaning of <strong className="text-white">"defender"</strong> and <strong className="text-white">"protector"</strong>: qualities associated with courage and steadfast guardianship.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-arkos-abyss mb-4">Ready to Experience the Difference?</h2>
          <Link to="/shop" className="group inline-flex items-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all hover:shadow-xl">
            Shop Collection <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
