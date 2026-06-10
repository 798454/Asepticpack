import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Raj Patel",
      role: "Dental Surgeon",
      review:
        "Excellent sterilization packaging quality and reliable delivery. Highly recommended.",
    },
    {
      name: "Mr. Aakash Arora",
      role: "Purchase Manager at JHP Multi-Speciality Hospital",
      review:
        "Consistent product quality and professional customer support.",
    },
    {
      name: "Mr. mukesh Shah",
      role: "CSSD Supervisor at City Hospital",
      review:
        "Their sterilization rolls perform exceptionally well in daily operations.",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">

        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <FaQuoteLeft className="text-sky-600 text-3xl mb-5" />

              <p className="text-slate-600 leading-relaxed">
                {item.review}
              </p>

              <div className="mt-6">
                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-slate-500 text-sm">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;