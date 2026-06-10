import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917984546166"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Phone */}
      <a
        href="tel:+917984546166"
        className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:info@asepticpackagingsolutions.com"
        className="group bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaEnvelope size={24} />
      </a>

    </div>
  );
}

export default FloatingContact;