import { motion } from "framer-motion";

function About() {
  const stats = [
    { number: "500+", label: "Healthcare Clients" },
    { number: "20+", label: "Product Variants" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sky-600 font-semibold">
              ABOUT COMPANY
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Delivering Trusted Sterilization Solutions
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              We provide high-quality sterilization rolls,
              pouches, indicators and CSSD consumables
              designed to maintain patient safety and
              infection control standards.
            </p>

            <p className="text-slate-600 mt-4 leading-relaxed">
              Our products are trusted by hospitals,
              dental clinics, laboratories and healthcare
              professionals nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">

            {stats.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <h3 className="text-4xl font-bold text-sky-600">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;