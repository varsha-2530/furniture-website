const items = [
  { img: "https://i.pinimg.com/736x/42/56/06/425606a487e042fcc859b7c19de8dce9.jpg", title: "Sofas" },
  { img: "https://i.pinimg.com/1200x/51/d0/8e/51d08e81172a394ced8bee9c41898aa6.jpg", title: "Chairs" },
  { img: "https://i.pinimg.com/1200x/59/0c/86/590c86ce635b93e93d7c203cbd18fe58.jpg", title: "Beds" },
  { img: "https://i.pinimg.com/736x/48/ac/68/48ac6826f9972fb36937280ac5dc9641.jpg", title: "Tables" },
];

const Collection = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#2E3A59] mb-12 text-center">Our Collection</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#2E3A59] group-hover:text-[#d49a11] transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
