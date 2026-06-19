import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div className="md:col-span-5 mb-12 md:mb-0">
          <Link to="/" className="block mb-8 hover:opacity-90 transition-opacity">
            <img
              src="images/logo.jpeg"
              alt="Interspace Design Studio"
              className="h-12 w-auto max-w-[220px]"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Crafting enduring environments through architectural precision and minimalist luxury since 2018.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <span className="font-label-caps text-label-caps text-primary mb-6 block">NAVIGATION</span>
          <div className="flex flex-col gap-4">
            {[
              { to: '/', label: 'HOME' },
              { to: '/projects', label: 'WORK' },
              { to: '/about', label: 'ABOUT' },
              { to: '/contact', label: 'CONTACT' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <span className="font-label-caps text-label-caps text-primary mb-6 block">SOCIAL</span>
          <div className="flex flex-col gap-4">
            {['INSTAGRAM', 'LINKEDIN', 'BEHANCE'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 INTERSPACE DESIGN STUDIO. ARCHITECTURAL EXCELLENCE.
        </p>
        <div className="flex gap-8">
          {['PRIVACY', 'TERMS'].map((l) => (
            <a
              key={l}
              href="#"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
