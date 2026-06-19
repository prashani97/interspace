import { NavLink } from 'react-router-dom';

const tabs = [
  { to: '/', label: 'HOME', icon: 'home', end: true },
  { to: '/projects', label: 'WORK', icon: 'grid_view' },
  { to: '/about', label: 'ABOUT', icon: 'person' },
  { to: '/contact', label: 'CONTACT', icon: 'mail' },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-outline-variant/30">
      <div className="flex items-stretch h-16">
        {tabs.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`
            }
          >
            <span className="material-symbols-outlined text-[22px]">{icon}</span>
            <span className="font-label-caps text-[9px] tracking-[0.15em]">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
