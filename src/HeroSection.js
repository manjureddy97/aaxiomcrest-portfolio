export default function HeroSection() {
  return (
    <section className="py-20 text-center bg-blue-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Our Company
      </h1>
      <p className="text-xl mb-8">
        We create innovative solutions to help your business grow.
      </p>
      <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
        <a href="#contact">Get in Touch</a>
      </button>
    </section>
  );
}
