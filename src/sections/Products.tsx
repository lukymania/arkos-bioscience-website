import { useEffect, useRef, useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'NanoCBD Tincture',
    strength: '600mg',
    price: '$65',
    image: '/images/product-tincture.jpg',
    tag: 'Best Seller',
    desc: 'Daily wellness support with maximum absorption.',
  },
  {
    name: 'NanoCBD Tincture',
    strength: '1200mg',
    price: '$125',
    image: '/images/product-tincture.jpg',
    tag: 'High Potency',
    desc: 'Double strength for those who need more.',
  },
  {
    name: 'Sleepy Time',
    strength: '600mg + Melatonin',
    price: '$80',
    image: '/images/product-sleep.jpg',
    tag: 'For Rest',
    desc: 'Fall asleep faster, wake up refreshed.',
  },
  {
    name: 'Pain Relief Spray',
    strength: '300mg Topical',
    price: '$60',
    image: '/images/product-spray.jpg',
    tag: 'Fast Acting',
    desc: 'Targeted relief where you need it most.',
  },
  {
    name: 'Pain Relief Roller',
    strength: '250mg Roll-On',
    price: '$45',
    image: '/images/product-roller.jpg',
    tag: 'On-the-Go',
    desc: 'Portable relief in a convenient roll-on.',
  },
  {
    name: 'Pet Tincture',
    strength: '300mg',
    price: '$65',
    image: '/images/product-pet.jpg',
    tag: 'For Pets',
    desc: 'Because they deserve wellness too.',
  },
];

export function Products() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-cyan">The Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-arkos-abyss mt-3">
            Find Your <span className="text-arkos-deep">Formula</span>
          </h2>
          <p className="font-body text-arkos-charcoal/60 mt-4 max-w-xl mx-auto">
            Nano-encapsulated, lab-verified, made in the USA. Every formula is designed for what you actually need it to do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={`${product.name}-${i}`}
              className={`group bg-white border border-arkos-light/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-arkos-cyan/5 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-arkos-mist/30 to-arkos-sand/20">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 font-body text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-arkos-deep px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-arkos-abyss group-hover:text-arkos-deep transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-arkos-charcoal/50 mt-1">{product.strength}</p>
                <p className="font-body text-sm text-arkos-charcoal/60 mt-2">{product.desc}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="font-display text-xl font-bold text-arkos-abyss">{product.price}</span>
                  <button className="inline-flex items-center gap-1.5 font-body text-xs font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-4 py-2 rounded-full transition-colors">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 bg-arkos-mist/40 border border-arkos-light/30 rounded-full px-5 py-2.5">
            <Star className="w-4 h-4 text-arkos-cyan fill-arkos-cyan" />
            <span className="font-body text-sm text-arkos-charcoal/70">30-Day Money-Back Guarantee on all products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
