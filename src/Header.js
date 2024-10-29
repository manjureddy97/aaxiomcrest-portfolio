import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          Company Name
        </a>
        <div className="md:hidden">
          <button
            className="text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent gap-4 p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
