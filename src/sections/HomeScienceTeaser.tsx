import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

export function HomeScienceTeaser() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-arkos-mist/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">The Science</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">
            Why Most CBD <span className="text-arkos-deep italic">Never Gets Absorbed</span>
          </h2>
          <p className="font-body text-arkos-charcoal/70 mt-4 max-w-2xl mx-auto">
            Your body is 60% water. Traditional CBD oil is hydrophobic — it repels water. 
            That's why most CBD passes right through you unused.
          </p>
        </div>

        {/* The Comparison Image — KEY VISUAL */}
        <div className={`max-w-5xl mx-auto mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-arkos-light/20">
            <img 
              src="/images/home-science-compare.jpg" 
              alt="Traditional CBD Oil clusters at 2,000nm are too big and bounce off cell walls. Arkos Nano-CBD at 60nm passes through and gets absorbed."
              className="w-full h-auto"
            />
          </div>
          <p className="font-body text-xs text-arkos-charcoal/50 text-center mt-3">
            Traditional CBD oil clusters (left) vs. Arkos Nano-CBD particles (right) at the cellular level
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
            <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-red-500">~2,000nm</div>
            <p className="font-body text-xs text-arkos-charcoal/60 mt-1">Traditional CBD oil cluster size — too big to absorb</p>
          </div>
          <div className="bg-arkos-mist/50 border border-arkos-light/30 rounded-xl p-5 text-center">
            <div className="font-display text-2xl font-bold text-arkos-abyss">30x</div>
            <p className="font-body text-xs text-arkos-charcoal/60 mt-1">Smaller particles = dramatically better absorption</p>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
            <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-green-600">~60nm</div>
            <p className="font-body text-xs text-arkos-charcoal/60 mt-1">Arkos Nano-CBD size — passes directly into cells</p>
          </div>
        </div>

        {/* CTA to full science */}
        <div className="text-center">
          <Link to="/science" className="group inline-flex items-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl">
            Explore the Full Science <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="font-body text-xs text-arkos-charcoal/40 mt-3">Peer-reviewed research, bioavailability data, and FAQ</p>
        </div>
      </div>
    </section>
  );
}
