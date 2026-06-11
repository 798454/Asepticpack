import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top CTA Section */}
      <div className="border-b border-slate-800">

        <div className="container-custom py-16">

          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-10 lg:p-14">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready To Upgrade Your
                  Sterilization Process?
                </h2>

                <p className="mt-4 text-sky-100 max-w-2xl">
                  Get premium sterilization rolls,
                  pouches, indicators and CSSD
                  consumables for your healthcare facility.
                </p>
              </div>

              <a
  href="https://wa.me/917984546166text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20sterilization%20rolls."
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  <FaWhatsapp className="text-3xl group-hover:rotate-12 transition" />

  <div className="text-left">
    <div className="text-sm opacity-90">
      Chat Instantly
    </div>

    <div>
      WhatsApp Sales Team
    </div>
  </div>
</a>

            </div>

          </div>

        </div>

      </div>

      {/* Main Footer */}
      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}
          <div>

            <h3 className="text-3xl font-bold text-sky-400">
              Aseptic<span className="text-white">Packaging</span>
            </h3>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Trusted supplier of sterilization rolls,
              pouches, indicators and CSSD consumables
              helping healthcare facilities maintain
              the highest standards of infection control.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-sky-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-sky-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-sky-400 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-sky-400 transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-sky-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Products */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Product Categories
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-sky-400 transition cursor-pointer">
                Sterilization Rolls
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                Sterilization Pouches
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                Indicator Tapes
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                Chemical Indicators
              </li>

              <li className="hover:text-sky-400 transition cursor-pointer">
                CSSD Consumables
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>
  <h4 className="text-xl font-semibold mb-6">
    Contact Information
  </h4>

  <div className="space-y-5 text-slate-400">

    {/* Address */}
    <div className="flex gap-3 items-start">
      <FaMapMarkerAlt className="text-sky-400 mt-1 flex-shrink-0" />
      <span>
        Ahmedabad, Gujarat, India
      </span>
    </div>

    {/* Phone */}
    <div className="flex gap-3 items-start">
      <FaPhoneAlt className="text-sky-400 mt-1 flex-shrink-0" />
      <div className="flex flex-col">
        <a
          href="tel:+917984546166"
          className="hover:text-white transition"
        >
          +91 79845 46166
        </a>
        <a
          href="tel:+919106887561"
          className="hover:text-white transition"
        >
          +91 91068 87561
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex gap-3 items-start">
      <FaEnvelope className="text-sky-400 mt-1 flex-shrink-0" />
      <a
        href="mailto:info@asepticpackagingsolutions.com"
        className="break-all hover:text-white transition"
      >
        info@asepticpackagingsolutions.com
      </a>
    </div>

  </div>
</div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Aseptic Packaging Solutions.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-500 text-sm">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

            <a href="#">
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;