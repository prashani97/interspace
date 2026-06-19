import { Link } from 'react-router-dom';
import RevealUp from './RevealUp';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <RevealUp delay={delay}>
      <Link to={`/projects/${project.id}`} className="block group cursor-pointer">
        <div className="overflow-hidden relative mb-6">
          <div
            className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${project.coverImage}')` }}
          />
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
            <span className="font-label-caps text-label-caps px-6 py-2 bg-primary text-on-primary">
              VIEW PROJECT
            </span>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <span className="px-3 py-1 border border-primary/30 text-primary font-label-caps text-[10px]">
            {project.categoryLabel}
          </span>
          <span className="px-3 py-1 border border-outline-variant/40 text-on-surface-variant font-label-caps text-[10px]">
            {project.year}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
          {project.excerpt}
        </p>
      </Link>
    </RevealUp>
  );
}
