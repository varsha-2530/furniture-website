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

    // Loader timeout (1.5 sec)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-blue-50 text-center px-4 animate-fadeIn">
        {/* Spinner */}
        <div className="relative w-14 h-14 mb-4">
          <div className="absolute inset-0 border-4 border-[#d49a11] border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#2E3A59]">
          Loading your experience<span className="animate-pulse">...</span>
        </h2>
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
