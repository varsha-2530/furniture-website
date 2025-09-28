const HeroSection = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center bg-[#2E3A59]">
      <img
        src="https://i.pinimg.com/1200x/d0/8f/58/d08f58670db09c8817026d8bf627bdd5.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center text-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Up to 50% off on Latest Arrivals
        </h1>
        <p className="mt-4 text-base sm:text-lg">Modern furniture for stylish homes</p>
        <button className="mt-6 px-6 py-3 bg-[#dd980d] rounded-md font-semibold hover:scale-105 transition transform shadow-xl">
          Shop Now
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
