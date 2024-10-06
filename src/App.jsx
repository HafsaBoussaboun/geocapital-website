import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testemonials/Testimonials";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <div className="container">
            <Services/>
        </div>
        <FeatureSection />        
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
