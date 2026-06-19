import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, Heart, Moon, Sun } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Feel It in 15-30 Minutes',
    desc: 'Not hours. Our nano-particles bypass the digestive system and enter your bloodstream directly.',
    image: '/images/home-morning.jpg',
  },
  {
    icon: Zap,
    title: 'Active Recovery',
    desc: 'Post-workout relief that keeps up with your training. Targeted formulas for muscles and joints.',
    image: '/images/home-active.jpg',
  },
  {
    icon: Moon,
    title: 'Deeper Sleep',
    desc: 'Fall asleep faster and wake up refreshed. Our Sleepy Time formula combines nano-CBD with melatonin.',
    image: '/images/home-relax.jpg',
  },
  {
    icon: Heart,
    title: 'Daily Calm',
    desc: 'Find your center. Water-compatible nano-CBD works in harmony with your body for natural balance.',
    image: '/images/home-yoga.jpg',
  },
];

export function Lifestyle() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">How It Works</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">
            Nano-CBD Fits Your <span className="text-arkos-deep italic">Life</span>
          </h2>
          <p className="font-body text-arkos-charcoal/60 mt-4 max-w-xl mx-auto">
            However you live — active, busy, restful, or all three — there's an Arkos formula designed for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-arkos-abyss/80 via-arkos-abyss/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-arkos-cyan/20 backdrop-blur-sm flex items-center justify-center">
                    <b.icon className="w-4 h-4 text-arkos-light" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{b.title}</h3>
                </div>
                <p className="font-body text-sm text-white/80 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop" className="group inline-flex items-center gap-2 font-body font-semibold text-arkos-deep hover:text-arkos-cyan transition-colors">
            Find Your Formula <Sun className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
