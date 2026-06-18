import { ShieldCheck, FlaskConical, Globe, Zap } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'THC-Free' },
  { icon: FlaskConical, label: '3rd-Party Lab Tested' },
  { icon: Globe, label: 'Made in USA' },
  { icon: Zap, label: 'Fast Onset (15-30 min)' },
];

export function TrustBar() {
  return (
    <section id="trust" className="relative bg-white border-y border-arkos-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-3 group"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-arkos-mist/60 flex items-center justify-center group-hover:bg-arkos-cyan/10 transition-colors">
                <badge.icon className="w-4.5 h-4.5 text-arkos-cyan" />
              </div>
              <span className="font-body text-sm font-semibold text-arkos-charcoal tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
