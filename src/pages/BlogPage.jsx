import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Importance of Sterilization Packaging in Healthcare",
      image: "/blog/blog1.jpg",
      date: "June 2026",
      category: "Sterilization",
      description:
        "Learn why sterilization packaging plays a critical role in infection prevention and patient safety.",
    },
    {
      id: 2,
      title: "How CSSD Departments Improve Hospital Safety",
      image: "/blog/blog2.jpg",
      date: "May 2026",
      category: "CSSD",
      description:
        "Understanding the importance of Central Sterile Supply Departments in healthcare facilities.",
    },
    {
      id: 3,
      title: "Choosing The Right Sterilization Roll",
      image: "/blog/blog3.jpg",
      date: "April 2026",
      category: "Products",
      description:
        "Factors to consider when selecting sterilization rolls for hospitals and clinics.",
    },
    {
      id: 4,
      title: "Chemical Indicators Explained",
      image: "/blog/blog4.jpg",
      date: "March 2026",
      category: "Indicators",
      description:
        "Everything healthcare professionals should know about sterilization indicators.",
    },
    {
      id: 5,
      title: "Best Practices For Infection Control",
      image: "/blog/blog5.jpg",
      date: "February 2026",
      category: "Healthcare",
      description:
        "Key infection prevention practices every healthcare facility should follow.",
    },
    {
      id: 6,
      title: "Future Trends In CSSD Technology",
      image: "/blog/blog6.jpg",
      date: "January 2026",
      category: "Innovation",
      description:
        "Emerging technologies shaping the future of sterilization and healthcare safety.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-sky-50 to-white">

        <div className="container-custom text-center">

          <span className="text-sky-600 font-semibold">
            KNOWLEDGE CENTER
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-4">
            Blogs & Resources
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600">
            Stay updated with the latest insights,
            sterilization best practices, CSSD innovations,
            and healthcare industry knowledge.
          </p>

        </div>

      </section>

      {/* Featured Blog */}

      <section className="pb-20">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="/blog/featured.jpg"
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />

            <div className="p-10">

              <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full">
                Featured Article
              </span>

              <h2 className="text-4xl font-bold mt-6">
                Complete Guide To Sterilization Packaging
              </h2>

              <p className="mt-5 text-slate-600">
                Explore the essential principles,
                standards, and best practices for
                maintaining sterile medical instruments
                through proper packaging systems.
              </p>

              <button className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl">
                Read Article
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Blog Grid */}

      <section className="pb-24">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>

                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <FiCalendar />
                      {blog.date}
                    </div>

                  </div>

                  <h3 className="text-xl font-bold">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {blog.description}
                  </p>

                  <button className="mt-6 text-sky-600 font-semibold flex items-center gap-2">
                    Read More
                    <FiArrowRight />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Newsletter */}

      <section className="pb-24">

        <div className="container-custom">

          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Subscribe For Updates
            </h2>

            <p className="mt-4 text-sky-100">
              Receive healthcare sterilization insights,
              product updates, and industry news.
            </p>

            <div className="max-w-xl mx-auto mt-8 flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl text-slate-900"
              />

              <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default BlogPage;