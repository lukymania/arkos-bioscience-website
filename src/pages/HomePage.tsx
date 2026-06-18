import { SEO, organizationSchema } from '@/components/SEO';
import { VideoHero } from '@/sections/VideoHero';
import { TrustBar } from '@/sections/TrustBar';
import { ScienceExplained } from '@/sections/ScienceExplained';
import { Stats } from '@/sections/Stats';
import { Process } from '@/sections/Process';
import { Products } from '@/sections/Products';
import { PetSection } from '@/sections/PetSection';
import { Testimonials } from '@/sections/Testimonials';
import { Newsletter } from '@/sections/Newsletter';

export function HomePage() {
  return (
    <>
      <SEO
        title="Arkos Bioscience | Nano-CBD with 3-8x Better Absorption"
        description="Ivy League PhD formulated nano-CBD. 3-8x better absorption than oil-based CBD. Water-compatible, THC-free, third-party lab tested, made in USA. 20-50% bioavailability."
        pathname="/"
        image="/images/hero-lifestyle.jpg"
        schema={organizationSchema}
      />
      <VideoHero />
      <TrustBar />
      <ScienceExplained />
      <Stats />
      <Process />
      <Products />
      <PetSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
