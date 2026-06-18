import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const dropletRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const droplet = dropletRef.current;
    if (!droplet) return;
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const yOffset = Math.sin(elapsed / 800) * 8;
      droplet.style.transform = `translateY(${yOffset}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-arkos-mist/30 to-arkos-sand/40">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(193,100%,42%) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(201,100%,36%) 0%, transparent 40%)`,
      }} />

      {/* Floating geometric accents */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-arkos-light animate-pulse-glow" />
      <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-arkos-cyan/40 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-[20%] w-1 h-1 rounded-full bg-arkos-deep/30 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-arkos-mist/60 border border-arkos-light/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-arkos-cyan animate-pulse" />
              <span className="font-body text-xs font-semibold tracking-wider uppercase text-arkos-deep">
                Nano-CBD Technology
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-arkos-abyss leading-[1.1] mb-6">
              Absorb
              <br />
              <span className="text-arkos-cyan">the Difference</span>
            </h1>

            <p className="font-body text-base lg:text-lg text-arkos-charcoal/80 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              Ivy League PhD formulated nano-CBD with{' '}
              <span className="font-semibold text-arkos-deep">3-8x better absorption</span>{' '}
              than oil-based CBD. Water-compatible. THC-free. Made in USA.
            </p>

            <p className="font-body text-sm text-arkos-charcoal/50 mb-8">
              Your body is mostly water. Shouldn't your CBD be too?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('products')}
                className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-arkos-cyan/20"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('science')}
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-arkos-deep border-2 border-arkos-light hover:border-arkos-cyan hover:text-arkos-cyan px-8 py-3.5 rounded-full transition-all duration-300"
              >
                Explore the Science
              </button>
            </div>
          </div>

          {/* Right: Droplet */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect behind droplet */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-arkos-cyan/10 blur-3xl" />
              </div>
              {/* Secondary glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-arkos-light/20 blur-2xl" />
              </div>
              {/* Droplet */}
              <img
                ref={dropletRef}
                src="/images/arkos-droplet.png"
                alt="Arkos Nano-CBD Droplet"
                className="relative w-48 sm:w-56 lg:w-72 xl:w-80 h-auto drop-shadow-2xl"
              />
              {/* Stats floating around */}
              <div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-sm border border-arkos-light/40 rounded-xl px-3 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="font-display text-lg font-bold text-arkos-abyss">3-8x</div>
                <div className="font-body text-[10px] text-arkos-charcoal/60 uppercase tracking-wider">Better Absorption</div>
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-sm border border-arkos-light/40 rounded-xl px-3 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="font-display text-lg font-bold text-arkos-abyss">~60nm</div>
                <div className="font-body text-[10px] text-arkos-charcoal/60 uppercase tracking-wider">Particle Size</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('trust')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-arkos-cyan/60 hover:text-arkos-cyan transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
