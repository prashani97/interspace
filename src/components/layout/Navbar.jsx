import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavScroll } from '../../hooks/useNavScroll';

const navLinks = [
  { to: '/', label: 'HOME', end: true },
  { to: '/projects', label: 'WORK' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const isScrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeCls = 'text-primary hover-line';
  const inactiveCls = 'text-on-surface-variant hover:text-primary transition-colors duration-300 hover-line';

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
      >
        <NavLink to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <img
            src="images/logo.jpeg"
            alt="Interspace Design Studio"
            className="h-10 md:h-12 w-auto max-w-[200px]"
            style={{ mixBlendMode: 'screen' }}
          />
        </NavLink>

        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `font-label-caps text-label-caps ${isActive ? activeCls : inactiveCls}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            className="hidden md:block font-label-caps text-label-caps px-8 py-3 bg-primary text-on-primary hover:opacity-80 transition-all duration-300"
          >
            INQUIRY
          </NavLink>
          <button
            className="hidden text-on-surface p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6 text-on-surface p-2"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        {navLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `font-headline-md text-headline-md transition-colors ${isActive ? 'text-primary' : 'text-on-surface hover:text-primary'}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="mt-8 font-label-caps text-label-caps px-10 py-4 bg-primary text-on-primary"
          onClick={() => setMenuOpen(false)}
        >
          INQUIRY
        </NavLink>
      </div>
    </>
  );
}
