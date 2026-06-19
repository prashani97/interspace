import { useState } from 'react';
import SectionLabel from '../components/ui/SectionLabel';
import RevealUp from '../components/ui/RevealUp';

const STUDIO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ45REppBxt8jXc7NEilwq02IhCFoCx8Sz7sOXlIpu4mTxWciXsD_a5tqSuTu1idAaCeDvL8pqODeQRyS1ZcZPPBk6KW_EAPG3kZU0IJWMVJwarHhCAoaV365Xp8Tw0DZR0ep10JXmeOD5lgnLNPio6Rvno8nDo5n7Z5vO7JUmUVsM0ohdkbzzNLHGDQPMxydwZr3nNjJpDetZhnYQWr58El-LHvaf3k5Lugv_Ujle74qDk4mon4xbl10v6rBW_Kq9DkyaWBD5DQ';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mvznepwb', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h1 className="font-display-lg text-[48px] md:text-display-lg mb-8 max-w-3xl leading-tight">
              Begin your <span className="text-primary italic">architectural</span> journey.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We transform vision into structural reality. Reach out to discuss your project or visit our studio for a private consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Form */}
          <RevealUp className="md:col-span-7 lg:col-span-6 mb-16 md:mb-0">
            <div className="p-8 md:p-12 glass-panel">
              {status === 'success' ? (
                <div className="py-16 text-center">
                  <span className="material-symbols-outlined text-primary text-5xl mb-6 block">check_circle</span>
                  <h3 className="font-headline-md text-headline-md mb-4">Inquiry Received</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Thank you for reaching out. We'll be in contact within 48 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-12" onSubmit={handleSubmit}>
                  <div className="group relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-[0.2em]">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Type your name here"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-body-lg py-3 px-0 transition-colors text-on-surface placeholder:text-surface-variant"
                    />
                  </div>
                  <div className="group relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-[0.2em]">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-body-lg py-3 px-0 transition-colors text-on-surface placeholder:text-surface-variant"
                    />
                  </div>
                  <div className="group relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-[0.2em]">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-body-lg py-3 px-0 transition-colors appearance-none text-on-surface cursor-pointer"
                    >
                      <option className="bg-surface">Residential Inquiry</option>
                      <option className="bg-surface">Commercial Concept</option>
                      <option className="bg-surface">Hospitality Project</option>
                      <option className="bg-surface">General Question</option>
                    </select>
                  </div>
                  <div className="group relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 tracking-[0.2em]">
                      Project Vision
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your spatial requirements..."
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-body-lg py-3 px-0 transition-colors resize-none text-on-surface placeholder:text-surface-variant"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="font-label-caps text-label-caps text-error">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-on-primary py-6 font-label-caps text-label-caps tracking-[0.3em] uppercase hover:opacity-90 transition-all transform active:scale-[0.98] disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'PROCESSING...' : 'SEND INQUIRY'}
                  </button>
                </form>
              )}
            </div>
          </RevealUp>

          {/* Studio Info */}
          <RevealUp delay={200} className="md:col-span-5 lg:col-start-8 lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                <h3 className="font-label-caps text-label-caps tracking-[0.2em] text-primary uppercase">
                  Studio Address
                </h3>
              </div>
              <p className="font-headline-md text-headline-md leading-snug">
                88 Architectural Plaza<br />
                Colton District, NY 10012
              </p>
              <a
                href="#"
                className="inline-block font-label-caps text-label-caps border-b border-outline hover:border-primary transition-colors pb-1"
              >
                VIEW ON MAP
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  alternate_email
                </span>
                <h3 className="font-label-caps text-label-caps tracking-[0.2em] text-primary uppercase">
                  Direct Contact
                </h3>
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:studio@interspace.design"
                  className="block font-body-lg text-body-lg hover:text-primary transition-colors"
                >
                  studio@interspace.design
                </a>
                <a
                  href="tel:+12128880000"
                  className="block font-body-lg text-body-lg hover:text-primary transition-colors"
                >
                  +1 (212) 888-0000
                </a>
              </div>
            </div>

            <div className="aspect-square w-full relative overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-700">
              <img
                className="w-full h-full object-cover"
                src={STUDIO_IMG}
                alt="Interspace Design Studio entrance"
              />
              <div className="absolute inset-0 border border-outline-variant/30 pointer-events-none" />
            </div>

            <div className="flex gap-12 pt-8">
              {['INSTAGRAM', 'LINKEDIN', 'PINTEREST'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest"
                >
                  {s}
                </a>
              ))}
            </div>
          </RevealUp>
        </div>
      </section>
    </>
  );
}
