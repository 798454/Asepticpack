import {
  FiCheckCircle,
  FiShield,
  FiAward,
} from "react-icons/fi";

function Quality() {
  const features = [
    {
      icon: <FiShield />,
      title: "Medical Grade Materials",
    },
    {
      icon: <FiAward />,
      title: "Quality Assured Production",
    },
    {
      icon: <FiCheckCircle />,
      title: "Reliable Sterility Barrier",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sky-600 font-semibold">
              QUALITY & COMPLIANCE
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Built For Safety And Reliability
            </h2>

            <p className="mt-6 text-slate-600">
              Our sterilization products are designed
              to support healthcare professionals with
              dependable performance and infection
              prevention standards.
            </p>
          </div>

          <div className="space-y-6">

            {features.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-2xl flex items-center gap-5"
              >
                <div className="text-4xl text-sky-600">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-xl">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Quality;