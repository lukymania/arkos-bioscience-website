import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer M.',
    role: 'Daily User',
    text: "I've tried dozens of CBD products over the years. Arkos is in a completely different league. The difference in absorption is noticeable — not hours, minutes. I feel the effects within 20 minutes every time.",
    rating: 5,
  },
  {
    name: 'Mark D.',
    role: 'Fitness Enthusiast',
    text: "The Pain Roller is the best topical I've ever used. I keep one in my gym bag and one at my desk. The roll-on makes it so easy to apply exactly where I need it. Recovery time is noticeably faster.",
    rating: 5,
  },
  {
    name: 'Amanda P.',
    role: 'Pet Parent',
    text: "My 12-year-old lab has been so much more comfortable since starting the pet tincture. He moves easier, seems genuinely happier, and even plays with his toys again. Thank you, Arkos.",
    rating: 5,
  },
];

export function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-gradient-to-b from-white to-arkos-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">Reviews</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">
            What Our <span className="text-arkos-deep">Customers</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white border border-arkos-light/20 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-arkos-light/40 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="font-body text-sm text-arkos-charcoal/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-arkos-light/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-arkos-cyan to-arkos-deep flex items-center justify-center">
                  <span className="font-body text-sm font-semibold text-white">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-arkos-abyss">{t.name}</div>
                  <div className="font-body text-xs text-arkos-charcoal/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
