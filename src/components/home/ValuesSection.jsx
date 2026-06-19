import RevealUp from '../ui/RevealUp';

const values = [
  {
    icon: 'architecture',
    title: 'Structural Integrity',
    body: 'Our designs are rooted in the honesty of materials and the logic of engineering. We build for longevity, not for trends.',
  },
  {
    icon: 'grid_view',
    title: 'Calculated Minimalism',
    body: 'Space is a luxury. We use a rigorous grid system to ensure every element serves a purpose and every void is intentional.',
  },
  {
    icon: 'light_mode',
    title: 'Luminous Atmosphere',
    body: 'We treat light as a building material. Our spaces transform throughout the day as light moves across sculpted surfaces.',
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-surface-container-lowest py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">
        {values.map((v, i) => (
          <RevealUp key={v.title} delay={i * 200}>
            <span className="material-symbols-outlined text-primary text-4xl mb-6">{v.icon}</span>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-4">{v.title}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">{v.body}</p>
          </RevealUp>
        ))}
      </div>
    </section>
  );
}
