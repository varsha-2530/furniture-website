const brands = [
  "https://i.pinimg.com/1200x/1a/04/3a/1a043a2647f84124dc9f5311c34f979d.jpg",
  "https://i.pinimg.com/736x/d3/b2/3d/d3b23d1177ed1064af22b3b2002ca0c8.jpg",
  "https://i.pinimg.com/736x/51/79/64/517964c24f4cfd17b11ee1e62b0a0e42.jpg",
  "https://i.pinimg.com/736x/b5/68/38/b5683884f33a684d20860c75569a117c.jpg",
  "https://i.pinimg.com/736x/51/79/64/517964c24f4cfd17b11ee1e62b0a0e42.jpg",
  "https://i.pinimg.com/736x/b5/68/38/b5683884f33a684d20860c75569a117c.jpg",
];

const Brands = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E3A59] mb-12 text-center">
          Our Trusted Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-center">
          {brands.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`brand-${idx}`}
              className="mx-auto h-12 sm:h-14 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
