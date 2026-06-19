import { Link } from 'react-router-dom';

const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_DRqvFRQgVqnaYuxxbDueAzRXHpgcCnh3ZEha44YERMhxkyAF8okZCbZ8MO2JJyQURlLwkqpqpFFU_4AsVd4OeDfxJCAzMSFQfmHGK_yhTYR0fCO-jzhqplaC4cHW9q-ASy7N2SZDbaMxxp2DUDiYfGKNPXvS2y2ZVN_KkLbRNEMgizMRTXgbeQXn4ZrrXwkApuLxeRvWyMJo9Avx4hBZAIRNH0Dn2moGdbwB4xkAKQ1JsfadJwRmnb3Nw7zlj3OUBIgXXDUX4Xo';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full md:w-2/3 lg:w-1/2">
        <h1 className="font-display-lg text-[48px] md:text-display-lg text-on-surface mb-stack-unit reveal-up active leading-tight">
          Crafting <span className="text-primary italic">Timeless</span> Spaces
        </h1>
        <p
          className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg reveal-up active"
          style={{ transitionDelay: '200ms' }}
        >
          We translate the physical precision of architectural practice into immersive living environments. Where structural integrity meets the art of minimalism.
        </p>
        <div
          className="flex flex-wrap gap-6 reveal-up active"
          style={{ transitionDelay: '400ms' }}
        >
          <Link
            to="/projects"
            className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps hover:opacity-90 transition-all duration-300"
          >
            VIEW PORTFOLIO
          </Link>
          <Link
            to="/about"
            className="border border-outline text-on-surface px-10 py-4 font-label-caps text-label-caps hover:bg-on-surface hover:text-background transition-all duration-300"
          >
            OUR PHILOSOPHY
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-[80px] hidden md:flex items-center gap-4 reveal-up active"
        style={{ transitionDelay: '600ms' }}
      >
        <span className="w-12 h-px bg-primary" />
        <span className="font-label-caps text-label-caps text-primary">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
