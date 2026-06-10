import {
  FaHospital,
  FaTooth,
  FaFlask,
  FaClinicMedical,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      icon: <FaHospital />,
      title: "Hospitals",
      desc: "Comprehensive sterilization support for healthcare facilities.",
    },
    {
      icon: <FaTooth />,
      title: "Dental Clinics",
      desc: "Reliable packaging and infection control solutions.",
    },
    {
      icon: <FaFlask />,
      title: "Laboratories",
      desc: "Safe sterilization systems for laboratory instruments.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Surgical Centers",
      desc: "Sterility assurance for critical procedures.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Trusted Across Healthcare
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-sky-600 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;