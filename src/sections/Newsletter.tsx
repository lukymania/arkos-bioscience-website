import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-arkos-abyss via-arkos-deep to-arkos-abyss relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-10 h-10 text-arkos-light mx-auto mb-5" />
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
          Join the Arkos Community
        </h2>
        <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">
          Exclusive access to new formulas, science updates, and wellness insights — plus a welcome offer for new members.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 font-body text-sm bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-arkos-cyan/50 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-white text-white hover:text-arkos-deep px-6 py-3 rounded-full transition-all duration-300"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-arkos-light">
            <CheckCircle className="w-5 h-5" />
            <span className="font-body text-sm font-medium">Welcome to the community! Check your inbox.</span>
          </div>
        )}

        <p className="font-body text-xs text-white/40 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
