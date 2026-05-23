import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ProductsOverview from './components/ProductsOverview';
import WhyNovaspace from './components/WhyNovaspace';
import TrinaPartnership from './components/TrinaPartnership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ProductsOverview />
      <WhyNovaspace />
      <TrinaPartnership />
      <Footer />
    </div>
  );
}

export default App;
