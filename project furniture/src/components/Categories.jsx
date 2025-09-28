import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["All", "Sofa", "Chair", "Table", "Bed", "Cabinet", "Decor"];

const items = [
  {
    name: "Modern Sofa",
    category: "Sofa",
    image: "https://i.pinimg.com/736x/f2/1e/96/f21e96aa64a8c52f1a4654895d7d501d.jpg",
  },
  {
    name: "Classic Chair",
    category: "Chair",
    image: "https://i.pinimg.com/1200x/70/e8/c2/70e8c2117a580ef9d66cb4c4e58424e5.jpg",
  },
  {
    name: "Dining Table",
    category: "Table",
    image: "https://i.pinimg.com/1200x/36/e1/cf/36e1cfc751d772ef992b2f5a79f5f53f.jpg",
  },
  {
    name: "Queen Bed",
    category: "Bed",
    image: "https://i.pinimg.com/736x/d6/c3/0a/d6c30a05828434718691b0dd6713ca2f.jpg",
  },
  {
    name: "Glass Cabinet",
    category: "Cabinet",
    image: "https://i.pinimg.com/736x/2f/c1/66/2fc166424ec1fd1825b57da3bcfc0d24.jpg",
  },
  {
    name: "Wall Decor",
    category: "Decor",
    image: "https://i.pinimg.com/1200x/62/49/80/624980c3817d9576bfedc13a7f2dc26c.jpg",
  },
  {
    name: "Lounge Chair",
    category: "Chair",
    image: "https://i.pinimg.com/1200x/b3/20/b4/b320b420afb86d4dfea687d16910784d.jpg",
  },
  {
    name: "Wooden Bed",
    category: "Bed",
    image: "https://i.pinimg.com/736x/e6/4f/92/e64f926f9ba06d981b40629da4a9e508.jpg",
  },
  {
    name: "Luxury Sofa",
    category: "Sofa",
    image: "https://i.pinimg.com/1200x/8f/b8/71/8fb8716bc8bd7ae73a9290cf110d44a8.jpg",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-blue-50" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2
          className="text-3xl font-bold text-[#2E3A59] mb-10 text-center"
          data-aos="fade-up"
        >
          Shop by Category
        </h2>

        {/* Category Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#d49a11] text-white border-[#d2b555]"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image with hover zoom */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2E3A59]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
