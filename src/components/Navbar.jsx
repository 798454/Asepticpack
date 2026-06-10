import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import APSLogo from "../assets/APS4k.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center">
  <img
  src={APSLogo}
  alt="Aseptic Packaging"
  className="h-30 w-auto"
/>
</Link>

          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-slate-700 hover:text-sky-600 transition"
              >
                {link.name}
              </Link>
            ))}

            {/* <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl transition">
              Request Quote
            </button> */}
          </nav>

          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col p-6 gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700"
              >
                {link.name}
              </Link>
            ))}

            {/* <button className="bg-sky-600 text-white py-3 rounded-lg"> */}
              {/* <a href="/">Request Quote</a>
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;