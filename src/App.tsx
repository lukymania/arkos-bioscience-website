import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { Science } from './sections/Science';
import { Stats } from './sections/Stats';
import { Products } from './sections/Products';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(30,33%,97%)] font-body">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Science />
        <Stats />
        <Products />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
