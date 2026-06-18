import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Arkos Bioscience"
        description="Have questions about nano-CBD? Contact the Arkos Bioscience team. Email info@arkosbio.com or call (888) 400-1080. We're here to help."
        pathname="/contact"
        image="/images/contact-hero.jpg"
      />

      {/* Hero */}
      <section className="relative pt-20 min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/contact-hero.jpg" alt="Water ripple" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-arkos-abyss/80 via-arkos-abyss/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-arkos-light mb-4 block">Get in Touch</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">We're Here to <span className="text-arkos-light italic">Help</span></h1>
          <p className="font-body text-white/80 mt-4 max-w-xl text-lg">Questions about nano-CBD, dosing, or our products? Our team is ready to answer.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold text-arkos-abyss">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-arkos-mist/30 rounded-xl">
                  <Mail className="w-5 h-5 text-arkos-cyan mt-0.5" />
                  <div>
                    <span className="font-body text-sm font-semibold text-arkos-abyss block">Email</span>
                    <span className="font-body text-sm text-arkos-charcoal/60">info@arkosbio.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-arkos-mist/30 rounded-xl">
                  <Phone className="w-5 h-5 text-arkos-cyan mt-0.5" />
                  <div>
                    <span className="font-body text-sm font-semibold text-arkos-abyss block">Phone</span>
                    <span className="font-body text-sm text-arkos-charcoal/60">(888) 400-1080</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-arkos-mist/30 rounded-xl">
                  <MapPin className="w-5 h-5 text-arkos-cyan mt-0.5" />
                  <div>
                    <span className="font-body text-sm font-semibold text-arkos-abyss block">Location</span>
                    <span className="font-body text-sm text-arkos-charcoal/60">Made in the USA</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-arkos-mist/30 rounded-xl">
                  <Clock className="w-5 h-5 text-arkos-cyan mt-0.5" />
                  <div>
                    <span className="font-body text-sm font-semibold text-arkos-abyss block">Response Time</span>
                    <span className="font-body text-sm text-arkos-charcoal/60">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="mt-8 p-5 bg-arkos-abyss/5 rounded-xl border border-arkos-light/20">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-arkos-cyan" />
                  <span className="font-body text-sm font-semibold text-arkos-abyss">Common Questions</span>
                </div>
                <ul className="space-y-2">
                  {['How fast does nano-CBD work?', 'Will this show up on a drug test?', 'How do I choose the right product?', 'What is your return policy?'].map(q => (
                    <li key={q} className="font-body text-xs text-arkos-charcoal/60">&bull; {q}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-sm font-semibold text-arkos-charcoal mb-1.5 block">Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full font-body text-sm border border-arkos-light/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-arkos-cyan/30 focus:border-arkos-cyan bg-white" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-arkos-charcoal mb-1.5 block">Email *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full font-body text-sm border border-arkos-light/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-arkos-cyan/30 focus:border-arkos-cyan bg-white" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-arkos-charcoal mb-1.5 block">Subject</label>
                    <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full font-body text-sm border border-arkos-light/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-arkos-cyan/30 focus:border-arkos-cyan bg-white">
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Dosing Help</option>
                      <option>Wholesale / Partnership</option>
                      <option>Order Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-arkos-charcoal mb-1.5 block">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full font-body text-sm border border-arkos-light/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-arkos-cyan/30 focus:border-arkos-cyan bg-white resize-none" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="group inline-flex items-center justify-center gap-2 font-body font-semibold bg-arkos-cyan hover:bg-arkos-deep text-white px-8 py-4 rounded-full transition-all hover:shadow-xl w-full sm:w-auto">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-arkos-cyan mx-auto mb-5" />
                  <h3 className="font-display text-2xl font-bold text-arkos-abyss mb-3">Message Sent!</h3>
                  <p className="font-body text-arkos-charcoal/60">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
