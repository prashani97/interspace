import { Link } from 'react-router-dom';

export default function CtaStrip() {
  return (
    <section className="bg-primary py-24 px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary max-w-lg">
          Let's Build Something <span className="italic">Enduring</span>
        </h2>
        <Link
          to="/contact"
          className="flex-shrink-0 border-2 border-on-primary text-on-primary px-12 py-5 font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-all duration-300"
        >
          BEGIN YOUR JOURNEY
        </Link>
      </div>
    </section>
  );
}
