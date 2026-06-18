import { ShieldCheck, FlaskConical, Globe, Zap } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'THC-Free', desc: 'Zero THC guaranteed' },
  { icon: FlaskConical, label: '3rd-Party Lab Tested', desc: 'Verified purity & potency' },
  { icon: Globe, label: 'Made in USA', desc: 'American crafted' },
  { icon: Zap, label: '15-30 Min Onset', desc: 'Fast absorption' },
];

export function TrustBar() {
  return (
    <section id="trust" className="relative bg-white border-y border-arkos-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 group p-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-arkos-mist/60 flex items-center justify-center group-hover:bg-arkos-cyan/10 transition-colors">
                <badge.icon className="w-5 h-5 text-arkos-cyan" />
              </div>
              <div>
                <span className="font-body text-sm font-semibold text-arkos-charcoal block leading-tight">{badge.label}</span>
                <span className="font-body text-[11px] text-arkos-charcoal/50">{badge.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
