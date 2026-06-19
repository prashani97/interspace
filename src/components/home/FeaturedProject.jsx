import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import SectionLabel from '../ui/SectionLabel';
import RevealUp from '../ui/RevealUp';

const featured = projects[0];

const SECONDARY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAczxIAqz8zJdHbo1sgZrj-1avWszigKK0BPG8-_Doakr1-nTs8f7Ux8qIQ2LbFBJcZ1Xzx63DFEEFMM6xc4Dj8d_yPreoYg1QU0KTGsdYW2cCZdlHJIB58EfwGpu33dekAezfnbMl3LTHB9b0Bv0QWkuSBk76ZXcPlxbhBKctCmkWd0Mo61sRKoUoX0EWddzwXDwHcz1ww5tZy-I-r9yS20PYdPFdvq8yQ10jgSJObzPJFU6CNyYQ9_Rg333tFnMHk1i7JzEF6_D4';

export default function FeaturedProject() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
        <div className="md:w-1/2">
          <SectionLabel>FEATURED PROJECT</SectionLabel>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            {featured.title}
          </h2>
        </div>
        <div className="md:w-1/3">
          <p className="font-body-md text-body-md text-on-surface-variant">{featured.excerpt}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <RevealUp className="md:col-span-7 group cursor-pointer overflow-hidden relative">
          <Link to={`/projects/${featured.id}`}>
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${featured.coverImage}')` }}
              />
            </div>
            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="font-label-caps text-label-caps px-6 py-2 bg-primary text-on-primary">
                VIEW PROJECT
              </span>
            </div>
          </Link>
        </RevealUp>

        <RevealUp delay={200} className="md:col-span-5 flex flex-col gap-12 pt-0 md:pt-12">
          <div className="bg-surface-container-high p-10 border border-outline-variant/30">
            <div className="flex gap-4 mb-6">
              <span className="px-3 py-1 border border-primary/30 text-primary font-label-caps text-[10px]">
                {featured.categoryLabel}
              </span>
              <span className="px-3 py-1 border border-primary/30 text-primary font-label-caps text-[10px]">
                {featured.year}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 italic">
              {featured.subtitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {featured.description.slice(0, 200)}...
            </p>
            <Link
              to={`/projects/${featured.id}`}
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover-line relative group"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="aspect-square overflow-hidden hidden md:block">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${SECONDARY_IMG}')` }}
            />
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
