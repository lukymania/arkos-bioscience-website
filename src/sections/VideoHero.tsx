import { useRef, useEffect } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-lifestyle.jpg"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-arkos-abyss/70 via-arkos-abyss/50 to-arkos-abyss/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/60 via-transparent to-arkos-abyss/40" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-arkos-cyan/20 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-arkos-cyan animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-white/90">
              Nano-CBD Technology
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            Absorb
            <br />
            <span className="text-arkos-light">the Difference</span>
          </h1>

          <p className="font-body text-lg lg:text-xl text-white/80 max-w-lg mb-3 leading-relaxed">
            Nano-engineered CBD with{' '}
            <span className="font-semibold text-arkos-light">3-8x better absorption</span>{' '}
            than traditional oil-based CBD.
          </p>

          <p className="font-body text-sm text-white/50 mb-10">
            Your body is mostly water. Shouldn't your CBD be too?
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('products')}
              className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-white hover:text-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('science')}
              className="group inline-flex items-center justify-center gap-2 font-body font-semibold text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="w-4 h-4" />
              See the Science
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('trust')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors z-10"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
