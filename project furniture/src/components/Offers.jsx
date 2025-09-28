const offers = [
  {
    img: "https://i.pinimg.com/1200x/aa/26/5c/aa265cd71b567e57cc629ab96d958e98.jpg",
    name: "Wooden Chair",
    price: "$120",
  },
  {
    img: "https://i.pinimg.com/1200x/bc/f4/d2/bcf4d21303f9876a12f5fb6325763799.jpg",
    name: "Modern Lamp",
    price: "$80",
  },
  {
    img: "https://i.pinimg.com/736x/b4/66/bc/b466bce09711bf76fd99880d4e7783d0.jpg",
    name: "Decor Set",
    price: "$45",
  },
];

const Offers = () => {
  return (
    <section className="py-12 sm:py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-[#2E3A59] mb-10 text-center">Special Offers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300"
            >
              {/* Image without white space */}
              <div className="w-full h-60 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2E3A59] mb-1">{item.name}</h3>
                <p className="text-[#b17f13] font-bold text-base">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
