import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import RevealUp from '../components/ui/RevealUp';
import SectionLabel from '../components/ui/SectionLabel';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const nextProject = projects.find((p) => p.id === project.nextProject);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-16 w-full">
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 border border-primary/40 text-primary font-label-caps text-[10px]">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 border border-outline-variant/40 text-on-surface-variant font-label-caps text-[10px]">
              {project.year}
            </span>
          </div>
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-on-surface leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <RevealUp className="md:col-span-7 overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{ backgroundImage: `url('${project.gallery[0]}')` }}
            />
          </RevealUp>
          <RevealUp delay={200} className="md:col-span-5 md:pt-12">
            <SectionLabel>PROJECT OVERVIEW</SectionLabel>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 italic">
              {project.subtitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
          </RevealUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'LOCATION', value: project.location },
            { label: 'AREA', value: project.area },
            { label: 'TYPE', value: project.categoryLabel },
            { label: 'YEAR', value: project.year },
          ].map((stat, i) => (
            <div key={stat.label} className={`${i > 0 ? 'md:pl-8 md:border-l border-outline-variant/30' : ''}`}>
              <span className="font-label-caps text-label-caps text-primary block mb-2">
                {stat.label}
              </span>
              <span className="font-headline-md text-headline-md text-on-surface">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <SectionLabel>PROJECT GALLERY</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((src, i) => (
            <RevealUp key={i} delay={i * 100}>
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </RevealUp>
          ))}
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <SectionLabel>NEXT PROJECT</SectionLabel>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                {nextProject.title}
              </h3>
            </div>
            <Link
              to={`/projects/${nextProject.id}`}
              className="flex-shrink-0 flex items-center gap-3 font-label-caps text-label-caps text-primary hover-line relative group"
            >
              VIEW PROJECT
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      )}

      <div className="px-margin-mobile md:px-margin-desktop pb-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm rotate-180">arrow_forward</span>
          BACK TO ALL WORK
        </Link>
      </div>
    </>
  );
}
