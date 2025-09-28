const services = [
  { title: "Free Shipping", desc: "On orders over $100" },
  { title: "24/7 Support", desc: "We are here to help" },
  { title: "Easy Returns", desc: "Hassle-free returns" },
];

const Services = () => {
  return (
    <section className="py-16 bg-blue-50 container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="text-center p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
