import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProject from '../components/home/FeaturedProject';
import ValuesSection from '../components/home/ValuesSection';
import MarqueeGallery from '../components/ui/MarqueeGallery';
import CtaStrip from '../components/home/CtaStrip';
import { marqueeImages } from '../data/projects';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Interspace Design Studio — Architectural Interior Design</title>
        <meta name="description" content="Crafting timeless spaces through structural precision and minimalist luxury. Architectural interior design studio established 2018." />
        <meta property="og:title" content="Interspace Design Studio" />
        <meta property="og:description" content="Crafting timeless spaces through structural precision and minimalist luxury." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <FeaturedProject />
      <ValuesSection />
      <MarqueeGallery images={marqueeImages} />
      <CtaStrip />
    </>
  );
}
