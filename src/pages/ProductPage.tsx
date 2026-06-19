import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Star, ArrowLeft, Minus, Plus, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { SEO } from '@/components/SEO';

const allProducts = [
  { slug: 'nanocbd-tincture-600mg', name: 'NanoCBD Tincture', strength: '600mg', price: 65, image: '/images/product-tincture.jpg', gallery: ['/images/hero-lifestyle.jpg', '/images/lifestyle-calm.jpg'], tag: 'Best Seller', desc: 'Our signature daily wellness formula. 600mg of nano-encapsulated CBD for 3-8x better absorption than traditional oil-based CBD.', longDesc: "Most CBD oils deliver less than 6% of their active compounds to your bloodstream. Our NanoCBD Tincture changes the game with ~60nm particles that pass directly through cell membranes, achieving 20-50% bioavailability in published research.\n\nEach dropper delivers precisely measured nano-CBD suspended in a clean, water-compatible formula. No oil. No mess. Just effective, fast-absorbing CBD that works with your body's natural biology.", ingredients: 'Nano-encapsulated CBD (cannabidiol isolate), purified water, natural flavoring, preservative.', usage: 'Place one full dropper (1ml) under tongue or mix into beverage. Take 1-2 times daily as needed. Effects typically felt within 15-30 minutes.', specs: { size: '30ml (1 fl oz)', serving: '1ml (20mg CBD)', servings: '30', thc: '0.0%', lab: 'Third-party tested' } },
  { slug: 'nanocbd-tincture-1200mg', name: 'High Potency NanoCBD Tincture', strength: '1200mg', price: 125, image: '/images/product-tincture.jpg', gallery: ['/images/lifestyle-fitness.jpg', '/images/lifestyle-calm.jpg'], tag: 'Maximum Strength', desc: 'Double-strength nano-CBD for those who need more. 1200mg of our proprietary nano-encapsulated formula.', longDesc: "When you need more from your CBD, the High Potency Tincture delivers. With 1200mg of nano-encapsulated CBD in every bottle, this is our most concentrated oral formula — delivering 40mg per serving for those with higher wellness demands.\n\nThe same precision mechanical disruption technology, the same ~60nm particle size, the same water-compatible delivery. Just more of what works.", ingredients: 'Nano-encapsulated CBD (cannabidiol isolate), purified water, natural flavoring, preservative.', usage: 'Place one full dropper (1ml) under tongue or mix into beverage. Take 1-2 times daily as needed. Start with half a dropper to assess tolerance.', specs: { size: '30ml (1 fl oz)', serving: '1ml (40mg CBD)', servings: '30', thc: '0.0%', lab: 'Third-party tested' } },
  { slug: 'sleepy-time', name: 'Sleepy Time', strength: '600mg + Melatonin', price: 80, image: '/images/product-sleep.jpg', gallery: ['/images/lifestyle-sleep.jpg', '/images/article-onset.jpg'], tag: 'For Rest', desc: 'Nano-CBD plus melatonin for deeper, more restorative sleep. Fall asleep faster and wake up refreshed.', longDesc: "Sleep is when your body recovers, repairs, and recharges. Sleepy Time combines 600mg of nano-CBD with 3mg of melatonin to help you fall asleep faster, stay asleep longer, and wake up without grogginess.\n\nThe nano-encapsulated CBD works quickly — most users feel effects within 15-30 minutes — while melatonin supports your body's natural sleep-wake cycle. The result is rest that actually restores you.", ingredients: 'Nano-encapsulated CBD (cannabidiol isolate), melatonin, purified water, natural lavender flavoring, preservative.', usage: 'Take one full dropper 30 minutes before bedtime. Place under tongue or mix into warm herbal tea. Do not operate machinery after taking.', specs: { size: '30ml (1 fl oz)', serving: '1ml (20mg CBD + 3mg Melatonin)', servings: '30', thc: '0.0%', lab: 'Third-party tested' } },
  { slug: 'pain-relief-spray', name: 'Pain Relief Spray', strength: '300mg Topical', price: 60, image: '/images/product-spray.jpg', gallery: ['/images/lifestyle-fitness.jpg', '/images/about-lab.jpg'], tag: 'Fast Acting', desc: 'Targeted topical nano-CBD spray for fast-acting relief where you need it most.', longDesc: "The Pain Relief Spray delivers 300mg of nano-CBD directly to muscles and joints through a fine, fast-drying mist. The nano-sized particles penetrate the skin barrier quickly — reaching underlying tissue in minutes, not hours.\n\nPerfect for post-workout recovery, daily aches, or targeted comfort. The non-greasy formula absorbs completely without residue.", ingredients: 'Nano-encapsulated CBD (cannabidiol isolate), aloe vera, menthol, purified water, botanical extracts.', usage: 'Spray 3-5 pumps directly onto affected area. Massage gently. Reapply every 4-6 hours as needed. For external use only.', specs: { size: '60ml (2 fl oz)', serving: '3-5 sprays (~5mg CBD)', servings: '60', thc: '0.0%', lab: 'Third-party tested' } },
  { slug: 'pain-relief-roller', name: 'Pain Relief Roller', strength: '250mg Roll-On', price: 45, image: '/images/product-roller.jpg', gallery: ['/images/lifestyle-fitness.jpg', '/images/hero-lifestyle.jpg'], tag: 'On-the-Go', desc: 'Portable roll-on nano-CBD relief. Keep one in your gym bag, desk, or car for convenient application.', longDesc: "The Pain Relief Roller is designed for life in motion. The stainless steel roller ball glides smoothly over skin, delivering 250mg of nano-CBD exactly where you need it — no mess, no fuss, no residue.\n\nThe compact size fits in any pocket, gym bag, or desk drawer. Perfect for on-the-go relief whenever discomfort strikes.", ingredients: 'Nano-encapsulated CBD (cannabidiol isolate), menthol, eucalyptus oil, carrier oils.', usage: 'Roll directly onto affected area. Massage gently. Reapply every 4-6 hours as needed. For external use only.', specs: { size: '10ml roller', serving: 'Roll-on application (~4mg CBD)', servings: '~60 rolls', thc: '0.0%', lab: 'Third-party tested' } },

];

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-display text-2xl text-arkos-abyss">Product Not Found</h1>
        <Link to="/shop" className="text-arkos-cyan hover:underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const galleryImages = [product.image, ...product.gallery];

  return (
    <>
      <SEO
        title={`${product.name} - ${product.strength} | Arkos Bioscience`}
        description={`${product.desc} Nano-encapsulated CBD with 3-8x better absorption. THC-free, third-party lab tested, made in USA. $${product.price}.`}
        pathname={`/product/${product.slug}`}
        image={product.image}
        type="product"
      />

      <div className="pt-24 lg:pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="inline-flex items-center gap-1.5 font-body text-sm text-arkos-charcoal/60 hover:text-arkos-cyan transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-arkos-mist/30 to-arkos-sand/20 aspect-[4/5] mb-4">
                <img src={galleryImages[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3">
                {galleryImages.map((img, i) => (
                  <button key={i} onClick={() => setActiveImage(i)} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-arkos-cyan' : 'border-transparent'}`}>
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="inline-block font-body text-[10px] font-bold tracking-wider uppercase bg-arkos-cyan/10 text-arkos-deep px-3 py-1 rounded-full mb-4">{product.tag}</span>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-arkos-abyss">{product.name}</h1>
              <p className="font-body text-arkos-charcoal/50 mt-1">{product.strength}</p>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <span className="font-body text-sm text-arkos-charcoal/60">4.9 (200+ reviews)</span>
              </div>

              <div className="mt-6">
                <span className="font-display text-3xl font-bold text-arkos-abyss">${product.price}</span>
                {product.price >= 60 && <span className="font-body text-sm text-arkos-charcoal/50 ml-2">Free shipping</span>}
              </div>

              <p className="font-body text-arkos-charcoal/70 mt-6 leading-relaxed">{product.desc}</p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-8">
                <span className="font-body text-sm font-semibold text-arkos-charcoal">Quantity:</span>
                <div className="flex items-center border border-arkos-light/40 rounded-full">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-arkos-charcoal hover:text-arkos-cyan"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center font-body text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-10 h-10 flex items-center justify-center text-arkos-charcoal hover:text-arkos-cyan"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Add to Cart */}
              <button className="w-full mt-6 inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-base">
                <ShoppingCart className="w-5 h-5" /> Add to Cart — ${product.price * qty}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[{ icon: ShieldCheck, label: 'THC-Free' }, { icon: Truck, label: 'Free Shipping $75+' }, { icon: RotateCcw, label: '30-Day Returns' }].map(badge => (
                  <div key={badge.label} className="text-center p-3 bg-arkos-mist/30 rounded-xl">
                    <badge.icon className="w-5 h-5 text-arkos-cyan mx-auto mb-1.5" />
                    <span className="font-body text-[11px] font-medium text-arkos-charcoal/70">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">Description</h3>
                  <p className="font-body text-sm text-arkos-charcoal/70 leading-relaxed whitespace-pre-line">{product.longDesc}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">How to Use</h3>
                  <p className="font-body text-sm text-arkos-charcoal/70 leading-relaxed">{product.usage}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">Ingredients</h3>
                  <p className="font-body text-sm text-arkos-charcoal/70">{product.ingredients}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-arkos-abyss mb-3">Product Details</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-arkos-light/20">
                        <span className="font-body text-xs text-arkos-charcoal/50 uppercase tracking-wider">{key}</span>
                        <span className="font-body text-xs font-semibold text-arkos-charcoal">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
