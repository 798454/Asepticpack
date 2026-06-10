import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";

function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Sterilization Rolls",
      image: "/src/assets/Rolls1.png",
      description:
        "Medical-grade sterilization rolls designed for secure packaging and reliable sterilization processes.",
    },
    {
      id: 2,
      title: "Sterilization Pouches",
      image: "/src/assets/pouchs1.png",
      description:
        "Self-sealing and heat-seal pouches ensuring instrument protection and sterility maintenance.",
    },
    {
      id: 3,
      title: "Indicator Tapes",
      image: "src/assets/Itapes.png",
      description:
        "High-performance indicator tapes for visual verification of sterilization cycles.",
    },
    {
      id: 4,
      title: "Chemical Indicators",
      image: "src/assets/Strips.png",
      description:
        "Reliable monitoring products for validating sterilization effectiveness.",
    },
    {
      id: 5,
      title: "Bowie Dick Test Pack",
      image: "src/assets/Bdick.png",
      description:
        "Designed to evaluate air removal efficiency and steam penetration in sterilizers.",
    },
    {
      id: 6,
      title: "CSSD Consumables",
      image: "src/assets/Crepe.png",
      description:
        "Complete range of consumables supporting Central Sterile Supply Departments.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container-custom text-center">

          <span className="text-sky-600 font-semibold">
            OUR PRODUCTS
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-4">
            CSSD & Sterilization Solutions
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600">
            High-quality sterilization packaging,
            monitoring products and CSSD consumables
            trusted by healthcare professionals.
          </p>

        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {product.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {product.description}
                  </p>

                  <a
                    href="https://wa.me/917984546166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sky-600 font-semibold"
                  >
                    Request Details
                    <FiArrowRight />
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="pb-24">

        <div className="container-custom">

          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Need Custom CSSD Solutions?
            </h2>

            <p className="mt-4 text-sky-100">
              Contact our team for product catalogs,
              pricing, distributorship, and bulk orders.
            </p>

            <a
              href="https://wa.me/917984546166"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductsPage;