import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Offers from "./components/Offers";
import PromoBanner from "./components/PromoBanner";
import Services from "./components/Services";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    // Fake loading timeout (you can replace this with actual logic later)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-4 border-[#d49a11] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      <section id="home" data-aos="fade-up">
        <HeroSection />
      </section>

      <section id="collection" data-aos="fade-up">
        <Collection />
      </section>

      <section id="categories" data-aos="fade-up">
        <Categories />
      </section>

      <section id="brands" data-aos="fade-up">
        <Brands />
      </section>

      <section id="offers" data-aos="fade-up">
        <Offers />
      </section>

      <section id="promo" data-aos="fade-up">
        <PromoBanner />
      </section>

      <section id="services" data-aos="fade-up">
        <Services />
      </section>

      <section id="contact" data-aos="fade-up">
        <Footer />
      </section>
    </div>
  );
};

export default App;
