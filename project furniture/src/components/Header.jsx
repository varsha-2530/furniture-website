import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineUser } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Collection", href: "#collection" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="bg-blue-50 shadow-md fixed w-full z-50"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#2E3A59]">rūma</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {menuItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#d49a11] transition-colors"
                data-aos="fade-down"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* User Icon */}
          <button
            className="text-[#2E3A59] hover:text-[#d49a11] text-xl"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <HiOutlineUser />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-[#2E3A59] text-xl"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <HiOutlineUser />
          </button>

          <button
            onClick={toggleMenu}
            className="text-2xl text-[#2E3A59]"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-white shadow-lg border-t"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <nav className="flex flex-col p-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#cda852] text-base font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
