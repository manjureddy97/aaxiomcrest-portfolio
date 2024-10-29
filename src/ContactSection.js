import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Contact Us
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-gray-600 p-2 rounded-full shadow hover:bg-gray-200 transition">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </button>
          <button className="bg-white text-gray-600 p-2 rounded-full shadow hover:bg-gray-200 transition">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </button>
          <button className="bg-white text-gray-600 p-2 rounded-full shadow hover:bg-gray-200 transition">
            <a href="mailto:info@company.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
