const HeroSection = () => {
  return (
    <section className="relative w-full h-screen sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://i.pinimg.com/1200x/bf/c9/b4/bfc9b4c288cd00644ddf96eba7487312.jpg"
          alt="Hero Background"
          className="w-full h-full object-contain sm:object-cover object-center"
        />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-2xl">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
          Up to 50% off on Latest Arrivals
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          Modern furniture for stylish homes
        </p>
        <button className="mt-6 px-6 py-3 bg-[#dd980d] rounded-md font-semibold hover:scale-105 transition-transform shadow-xl">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
