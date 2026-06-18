import { useEffect, useRef, useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export function PetSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pets" ref={ref} className="section-padding bg-gradient-to-br from-arkos-sand/40 via-white to-arkos-mist/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-arkos-sand/30">
              <img src="/images/lifestyle-pet.jpg" alt="Happy dog with Arkos Pet CBD" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-arkos-light fill-arkos-light" />
                  <span className="font-body text-xs text-white/90">Because they're family</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan mb-3 block">Pet Wellness</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-arkos-abyss leading-tight mb-5">
              NanoCBD for Your <br /><span className="text-arkos-deep italic">Furry Family</span>
            </h2>
            <p className="font-body text-arkos-charcoal/70 mb-4 leading-relaxed">
              Your pets have the same endocannabinoid system you do — and they experience the same 
              absorption challenges with traditional CBD oil. Our pet formula uses the same nano-technology 
              to deliver 3-8x better absorption, helping your companions feel their best.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Same nano-encapsulation technology as our human formulas',
                'THC-free and third-party lab tested for safety',
                'Easy-to-administer with food or treats',
                'Formulated specifically for pet metabolism',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-arkos-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-arkos-cyan" />
                  </div>
                  <span className="font-body text-sm text-arkos-charcoal/70">{item}</span>
                </div>
              ))}
            </div>

            <a href="#products" className="group inline-flex items-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg">
              Shop Pet Tincture
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
