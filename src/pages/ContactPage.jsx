import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-24 bg-slate-50">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold">
              CONTACT US
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-4">
              Let's Connect
            </h1>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Contact our team for sterilization rolls,
              pouches, indicators, CSSD consumables,
              quotations and distributorship inquiries.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

            <a
              href="https://wa.me/917984546166"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <FaWhatsapp className="text-5xl text-green-500 mb-5" />

              <h3 className="text-2xl font-bold">
                WhatsApp
              </h3>

              <p className="mt-2 text-slate-600">
                +91 79845 46166
              </p>
            </a>

            <a
              href="tel:+917984546166"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <FaPhoneAlt className="text-5xl text-blue-600 mb-5" />

              <h3 className="text-2xl font-bold">
                Call Us
              </h3>

              <p className="mt-2 text-slate-600">
                +91 7984546166
              </p>
            </a>

            <a
              href="mailto:info@asepticpackagingsolutions.com"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <FaEnvelope className="text-5xl text-red-500 mb-5" />

              <h3 className="text-2xl font-bold">
                Email
              </h3>

              <p className="mt-2 text-slate-600">
                info@asepticpackagingsolutions.com
              </p>
            </a>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <FaMapMarkerAlt className="text-5xl text-sky-600 mb-5" />

              <h3 className="text-2xl font-bold">
                Address
              </h3>

              <p className="mt-2 text-slate-600">
                Ahmedabad, Gujarat, India
              </p>
            </div>

          </div>

          <div className="max-w-5xl mx-auto mt-8 bg-white rounded-3xl p-8 shadow-lg">

            <div className="flex items-center gap-4">
              <FaClock className="text-3xl text-sky-600" />

              <div>
                <h3 className="text-xl font-bold">
                  Business Hours
                </h3>

                <p className="text-slate-600">
                  Monday - Friday : 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;