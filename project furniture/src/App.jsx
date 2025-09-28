import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Your components
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Offers from "./components/Offers";
import PromoBanner from "./components/PromoBanner";
import Services from "./components/Services";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation only once
      offset: 120, // offset (in px) from the original trigger point
    });
  }, []);

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

export default Home;
