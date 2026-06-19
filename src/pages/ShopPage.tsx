import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { SEO } from '@/components/SEO';

const categories = ['All', 'Tinctures', 'Pain Relief', 'Sleep'];

const products = [
  { slug: 'nanocbd-tincture-600mg', name: 'NanoCBD Tincture', strength: '600mg', price: 65, image: '/images/product-tincture.jpg', category: 'Tinctures', tag: 'Best Seller', desc: 'Daily wellness support with maximum absorption. Water-compatible nano-CBD for 3-8x better bioavailability.', rating: 4.9, reviews: 124 },
  { slug: 'nanocbd-tincture-1200mg', name: 'High Potency NanoCBD Tincture', strength: '1200mg', price: 125, image: '/images/product-tincture.jpg', category: 'Tinctures', tag: 'Maximum Strength', desc: 'Double-strength formula for those who need more. Same nano-technology, twice the potency.', rating: 4.8, reviews: 89 },
  { slug: 'sleepy-time', name: 'Sleepy Time', strength: '600mg + Melatonin', price: 80, image: '/images/product-sleep.jpg', category: 'Sleep', tag: 'For Rest', desc: 'Nano-CBD plus melatonin for deeper, more restorative sleep. Fall asleep faster, wake up refreshed.', rating: 4.9, reviews: 156 },
  { slug: 'pain-relief-spray', name: 'Pain Relief Spray', strength: '300mg Topical', price: 60, image: '/images/product-spray.jpg', category: 'Pain Relief', tag: 'Fast Acting', desc: 'Targeted topical relief where you need it most. Fast-absorbing nano-CBD spray for muscles and joints.', rating: 4.7, reviews: 98 },
  { slug: 'pain-relief-roller', name: 'Pain Relief Roller', strength: '250mg Roll-On', price: 45, image: '/images/product-roller.jpg', category: 'Pain Relief', tag: 'On-the-Go', desc: 'Portable roll-on relief. Keep one in your gym bag, desk drawer, or car for convenient application.', rating: 4.8, reviews: 112 },

];

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Shop NanoCBD Products | Arkos Bioscience"
        description="Shop nano-CBD tinctures, pain relief topicals, and sleep formulas. 3-8x better absorption. THC-free, third-party tested, made in USA."
        pathname="/shop"
        image="/images/shop-hero.jpg"
      />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/shop-hero.jpg" alt="Arkos CBD product collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/85 via-arkos-abyss/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-light mb-4 block">The Collection</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Find Your <span className="text-arkos-light italic">Formula</span></h1>
          <p className="font-body text-white/80 mt-4 max-w-xl text-lg">Nano-encapsulated, lab-verified, made in the USA. Every formula is designed for what you actually need it to do.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Filter className="w-4 h-4 text-arkos-cyan" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all ${activeCategory === cat ? 'bg-arkos-cyan text-white' : 'bg-arkos-mist/40 text-arkos-charcoal hover:bg-arkos-cyan/10'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product, i) => (
              <Link to={`/product/${product.slug}`} key={product.slug} className="group bg-white border border-arkos-light/20 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-arkos-mist/30 to-arkos-sand/20">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 font-body text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-arkos-deep px-2.5 py-1 rounded-full">{product.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss group-hover:text-arkos-deep transition-colors">{product.name}</h3>
                  <p className="font-body text-xs text-arkos-charcoal/50 mt-1">{product.strength}</p>
                  <p className="font-body text-sm text-arkos-charcoal/60 mt-2 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center gap-1 mt-3">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-body text-xs font-medium text-arkos-charcoal/70">{product.rating}</span>
                    <span className="font-body text-xs text-arkos-charcoal/40">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-xl font-bold text-arkos-abyss">${product.price}</span>
                    <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold bg-arkos-cyan text-white px-4 py-2 rounded-full group-hover:bg-arkos-deep transition-colors">
                      <ShoppingCart className="w-3.5 h-3.5" /> View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 bg-arkos-mist/40 border border-arkos-light/30 rounded-full px-5 py-2.5">
              <Star className="w-4 h-4 text-arkos-cyan fill-arkos-cyan" />
              <span className="font-body text-sm text-arkos-charcoal/70">30-Day Money-Back Guarantee &middot; Free Shipping Over $75</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
