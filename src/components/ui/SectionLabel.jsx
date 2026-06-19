export default function SectionLabel({ children, className = '' }) {
  return (
    <span className={`font-label-caps text-label-caps text-primary mb-4 block ${className}`}>
      {children}
    </span>
  );
}
