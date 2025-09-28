const Footer = () => {
  return (
    <footer className="bg-[#2E3A59] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">rūma</h3>
          <p className="text-sm mt-4">Furniture that defines your home.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FF6F61]">Home</a></li>
            <li><a href="#" className="hover:text-[#FF6F61]">Collection</a></li>
            <li><a href="#" className="hover:text-[#FF6F61]">Offers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm">contact@ruma.com</p>
          <p className="text-sm">+1 234 567 890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
