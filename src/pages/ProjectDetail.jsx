import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import RevealUp from '../components/ui/RevealUp';
import SectionLabel from '../components/ui/SectionLabel';

function LazyImage({ src, alt, className, style }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      {!loaded && <div className="absolute inset-0 skeleton" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/projects" replace />;

  const nextProject = projects.find((p) => p.id === project.nextProject);

  return (
    <>
      <Helmet>
        <title>{project.title} — Interspace Design Studio</title>
        <meta name="description" content={project.excerpt} />
        <meta property="og:title" content={`${project.title} — Interspace Design Studio`} />
        <meta property="og:description" content={project.excerpt} />
        <meta property="og:image" content={project.coverImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-primary transition-none"
        style={{ width: `${progress}%` }}
      />

      {/* Hero */}
      <section className="relative pt-24 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-margin-mobile md:px-margin-desktop pb-4 z-10">
          <nav className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant/70 text-[10px]">
            <Link to="/projects" className="hover:text-primary transition-colors">WORK</Link>
            <span>/</span>
            <span>{project.title.toUpperCase()}</span>
          </nav>
        </div>

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
            <LazyImage
              src={project.gallery[0]}
              alt={project.title}
              className="aspect-[4/3]"
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
              <LazyImage
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                className="aspect-[4/3]"
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
