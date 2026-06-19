import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.autoplay = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again on user interaction
          const handleInteraction = () => {
            video.play().catch(() => {});
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          };
          document.addEventListener('click', handleInteraction, { once: true });
          document.addEventListener('touchstart', handleInteraction, { once: true });
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-arkos-abyss">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/science-hero.jpg"
        preload="auto"
        muted
        loop
        playsInline
        autoPlay
        aria-label="Nano-CBD particle animation"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-arkos-abyss/80 via-arkos-deep/60 to-arkos-abyss/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/70 via-transparent to-arkos-abyss/50" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="absolute rounded-full bg-arkos-cyan/30 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-arkos-cyan animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-wider uppercase text-white/90">Nano-CBD Technology</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            Absorb<br /><span className="text-arkos-light">the Difference</span>
          </h1>

          <p className="font-body text-lg lg:text-xl text-white/80 max-w-lg mb-3 leading-relaxed">
            Nano-engineered CBD with <span className="font-semibold text-arkos-light">3-8x better absorption</span> than traditional oil-based CBD.
          </p>

          <p className="font-body text-sm text-white/50 mb-10">Your body is mostly water. Shouldn't your CBD be too?</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-white hover:text-arkos-deep text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-center">
              Shop Collection <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/science" className="group inline-flex items-center justify-center gap-2 font-body font-semibold text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm text-center">
              <Play className="w-4 h-4" /> See the Science
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
