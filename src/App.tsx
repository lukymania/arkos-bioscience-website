import { Header } from './sections/Header';
import { VideoHero } from './sections/VideoHero';
import { TrustBar } from './sections/TrustBar';
import { ScienceExplained } from './sections/ScienceExplained';
import { Stats } from './sections/Stats';
import { Process } from './sections/Process';
import { Products } from './sections/Products';
import { PetSection } from './sections/PetSection';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(30,33%,97%)] font-body">
      <Header />
      <main>
        <VideoHero />
        <TrustBar />
        <ScienceExplained />
        <Stats />
        <Process />
        <Products />
        <PetSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
