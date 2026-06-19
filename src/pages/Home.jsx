import Hero from '../components/home/Hero';
import FeaturedProject from '../components/home/FeaturedProject';
import ValuesSection from '../components/home/ValuesSection';
import MarqueeGallery from '../components/ui/MarqueeGallery';
import CtaStrip from '../components/home/CtaStrip';
import { marqueeImages } from '../data/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <ValuesSection />
      <MarqueeGallery images={marqueeImages} />
      <CtaStrip />
    </>
  );
}
