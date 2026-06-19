import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import SectionLabel from '../components/ui/SectionLabel';

const filters = [
  { key: 'all', label: 'ALL' },
  { key: 'residential', label: 'RESIDENTIAL' },
  { key: 'commercial', label: 'COMMERCIAL' },
  { key: 'hospitality', label: 'HOSPITALITY' },
];

export default function Projects() {
  const [active, setActive] = useState('all');

  const visible = projects.filter(
    (p) => active === 'all' || p.category === active
  );

  return (
    <>
      {/* Page Hero */}
      <section className="pt-48 pb-24 px-margin-mobile md:px-margin-desktop architectural-grid">
        <SectionLabel>OUR PORTFOLIO</SectionLabel>
        <h1 className="font-display-lg text-[48px] md:text-display-lg text-on-surface mb-8 leading-tight max-w-2xl">
          Spaces That <span className="text-primary italic">Endure</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          A curated selection of residential, commercial, and hospitality projects that define our practice.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-margin-mobile md:px-margin-desktop pb-16 border-b border-outline-variant/20">
        <div className="flex gap-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-label-caps text-label-caps pb-2 transition-all duration-300 ${
                active === f.key
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="font-body-lg text-body-lg text-on-surface-variant text-center py-24">
            No projects in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
