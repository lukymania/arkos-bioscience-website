import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    name: 'NanoCBD Tincture',
    strength: '600mg',
    price: '$65',
    tag: 'Best Seller',
    color: 'from-arkos-cyan/10 to-arkos-light/10',
    borderColor: 'border-arkos-cyan/20',
  },
  {
    name: 'High Potency Tincture',
    strength: '1200mg',
    price: '$125',
    tag: 'Maximum Strength',
    color: 'from-arkos-deep/10 to-arkos-cyan/10',
    borderColor: 'border-arkos-deep/20',
  },
  {
    name: 'Sleepy Time',
    strength: '600mg + Melatonin',
    price: '$80',
    tag: 'For Rest',
    color: 'from-arkos-abyss/10 to-arkos-deep/10',
    borderColor: 'border-arkos-abyss/15',
  },
  {
    name: 'Pain Relief Spray',
    strength: '300mg Topical',
    price: '$60',
    tag: 'Fast Acting',
    color: 'from-arkos-light/20 to-arkos-mist/30',
    borderColor: 'border-arkos-light/30',
  },
  {
    name: 'Pain Relief Roller',
    strength: '250mg Roll-On',
    price: '$45',
    tag: 'On-the-Go',
    color: 'from-arkos-cyan/10 to-arkos-mist/20',
    borderColor: 'border-arkos-cyan/15',
  },
  {
    name: 'Pet Tincture',
    strength: '300mg',
    price: '$65',
    tag: 'For Pets',
    color: 'from-arkos-sand/30 to-arkos-mist/20',
    borderColor: 'border-arkos-sand/40',
  },
];

export function Products() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">
            The Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-arkos-abyss mt-3">
            Find Your <span className="text-arkos-deep">Formula</span>
          </h2>
          <p className="font-body text-arkos-charcoal/60 mt-4 max-w-xl mx-auto">
            Nano-encapsulated, lab-verified, made in the USA. Every formula is designed for what you actually need it to do.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative bg-gradient-to-br ${product.color} border ${product.borderColor} rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-arkos-cyan/5 hover:-translate-y-1 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Tag */}
              <span className="inline-block font-body text-[10px] font-semibold tracking-wider uppercase bg-white/80 border border-arkos-light/30 text-arkos-deep px-2.5 py-1 rounded-full mb-4">
                {product.tag}
              </span>

              {/* Product Image Placeholder */}
              <div className="relative h-40 flex items-center justify-center mb-5">
                <div className="absolute w-28 h-28 rounded-full bg-arkos-cyan/5 group-hover:bg-arkos-cyan/10 transition-colors" />
                <img
                  src="/images/arkos-droplet.png"
                  alt={product.name}
                  className="relative h-20 w-auto opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-semibold text-arkos-abyss group-hover:text-arkos-deep transition-colors">
                {product.name}
              </h3>
              <p className="font-body text-xs text-arkos-charcoal/50 mt-1">
                {product.strength}
              </p>

              <div className="flex items-center justify-between mt-5">
                <span className="font-display text-xl font-bold text-arkos-abyss">
                  {product.price}
                </span>
                <button className="font-body text-xs font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-4 py-2 rounded-full transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 bg-arkos-mist/40 border border-arkos-light/30 rounded-full px-5 py-2.5">
            <Star className="w-4 h-4 text-arkos-cyan fill-arkos-cyan" />
            <span className="font-body text-sm text-arkos-charcoal/70">
              30-Day Money-Back Guarantee on all products
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
