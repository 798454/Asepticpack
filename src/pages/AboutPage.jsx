import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaShieldAlt,
  FaHospital,
  FaAward,
  FaUsers,
} from "react-icons/fa";

function AboutPage() {
  const stats = [
    {
      number: "500+",
      title: "Healthcare Clients",
    },
    {
      number: "20+",
      title: "Product Variants",
    },
    {
      number: "5+",
      title: "Years Experience",
    },
    {
      number: "99%",
      title: "Customer Satisfaction",
    },
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Quality First",
      desc: "We maintain strict quality standards for every product.",
    },
    {
      icon: <FaHospital />,
      title: "Healthcare Focused",
      desc: "Designed specifically for hospitals and healthcare facilities.",
    },
    {
      icon: <FaAward />,
      title: "Trusted Products",
      desc: "Reliable sterilization solutions trusted by professionals.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Support",
      desc: "Dedicated support for distributors and healthcare providers.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container-custom text-center">

          <span className="text-sky-600 font-semibold">
            ABOUT OUR COMPANY
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-4">
            Advancing Sterilization
            <br />
            Solutions For Healthcare
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600">
            We provide premium sterilization rolls,
            pouches, indicators, and CSSD consumables
            that help healthcare facilities maintain
            the highest standards of infection control.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="/src/assets/trust.jpg"
                alt="Company"
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>

              <span className="text-sky-600 font-semibold">
                WHO WE ARE
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Trusted Partner In Infection Control
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Our mission is to support hospitals,
                clinics, laboratories, and healthcare
                institutions with dependable sterilization
                products that ensure patient safety and
                operational excellence.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Through innovation, quality assurance,
                and customer commitment, we continue to
                build long-term partnerships across the
                healthcare sector.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-50">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg text-center"
              >
                <h3 className="text-5xl font-bold text-sky-600">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-24">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="glass-card rounded-3xl p-10">
              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-5 text-slate-600">
                To deliver high-quality sterilization
                and infection control products that
                contribute to safer healthcare
                environments worldwide.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-10">
              <h3 className="text-3xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 text-slate-600">
                To become a globally trusted name in
                sterilization packaging and CSSD
                solutions through quality,
                innovation, and customer trust.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">

        <div className="container-custom">

          <div className="text-center mb-16">

            <span className="text-sky-600 font-semibold">
              OUR VALUES
            </span>

            <h2 className="text-5xl font-bold mt-4">
              What Drives Us
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="text-sky-600 text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default AboutPage;