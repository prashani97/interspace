import { Link } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import RevealUp from '../components/ui/RevealUp';

const PORTRAIT = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQuEWjFfBsLPEa03PYDDSxxjvvDHIp5FyEHszGB4vVoovRLGL7ZHl1uNS2r7F1RdmPXW5xL9G_M_6OJD_4yajnNVXUdjxD9SCH3DUoz4Ov9UjHAGwwZZEVg8_cqAyjBYi-hbuYZrZcySN-oqT16IjG-CmBPxA8ts5F7KSQB4TyIs9cw82oRegOYoWUbdeRZaMsmPTSMh28J9GHC_iASKcWLIvA2x8gopwaRGChnhx6AUafO7qgwiSdJ6gkwMwhUgZ6pEPU1ZsL6Jo';

const stats = [
  { value: '7', label: 'YEARS' },
  { value: '42', label: 'PROJECTS' },
  { value: '8', label: 'COUNTRIES' },
  { value: '14', label: 'AWARDS' },
];

const philosophy = [
  {
    num: '01',
    title: 'STRUCTURAL INTEGRITY',
    body: 'We believe that beauty is a byproduct of structural honesty. Every line, joint, and material choice serves a specific functional purpose while contributing to the overall aesthetic harmony of the space.',
  },
  {
    num: '02',
    title: 'SENSORY MINIMALISM',
    body: 'Luxury is found in the absence of clutter. We curate environments that engage the senses through texture, light play, and spatial rhythm, allowing the inhabitants to find clarity within the built environment.',
  },
];

export default function About() {
  return (
    <div className="architectural-grid">
      {/* Principal Section */}
      <section className="pt-48 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <RevealUp className="md:col-span-5 order-2 md:order-1">
            <SectionLabel>PRINCIPAL ARCHITECT</SectionLabel>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 leading-none">
              Ishan<br />Hasara
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
              Redefining the dialogue between structural precision and human emotion. My practice is centred on the belief that a well-designed space is a quiet luxury that speaks volumes.
            </p>
          </RevealUp>

          <RevealUp delay={200} className="md:col-span-7 order-1 md:order-2 relative">
            <div className="geometric-accent bg-surface-container-high aspect-[4/5] md:aspect-[16/10] overflow-hidden border border-outline-variant/20 relative">
              <img
                className="w-full h-full object-cover"
                src={PORTRAIT}
                alt="Ishan Hasara, Principal Architect"
              />
              <div className="absolute bottom-0 right-0 p-8 bg-background/60 backdrop-blur-md">
                <span className="font-label-caps text-label-caps text-on-surface">EST. 2018</span>
              </div>
            </div>
          </RevealUp>
        </div>
      </section>

      {/* Studio Stats */}
      <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container border-y border-outline-variant/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <RevealUp key={s.label} delay={i * 100} className={i > 0 ? 'md:pl-8 md:border-l border-outline-variant/30' : ''}>
              <span className="font-display-lg text-[48px] md:text-[64px] text-primary leading-none block mb-2">
                {s.value}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">{s.label}</span>
            </RevealUp>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest border-b border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <RevealUp className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md mb-8">
              Design<br />Philosophy
            </h2>
          </RevealUp>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {philosophy.map((p, i) => (
              <RevealUp key={p.num} delay={i * 200} className="space-y-6">
                <div className="w-12 h-1 bg-primary" />
                <h3 className="font-label-caps text-label-caps text-on-surface">{p.num}. {p.title}</h3>
                <p className="text-on-surface-variant">{p.body}</p>
              </RevealUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg max-w-lg">
            Let's build something <span className="text-primary italic">enduring.</span>
          </h2>
          <Link
            to="/contact"
            className="flex-shrink-0 font-label-caps text-label-caps px-10 py-4 bg-primary text-on-primary hover:opacity-80 transition-all duration-300"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
