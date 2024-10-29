export default function ServicesSection() {
  const services = [
    "Consulting",
    "Development",
    "Design",
    "Marketing",
    "Support",
    "Training",
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-4 rounded-lg text-center shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service}
              </h3>
              <p className="text-gray-600">
                We offer comprehensive {service.toLowerCase()} services to help
                your business thrive.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
