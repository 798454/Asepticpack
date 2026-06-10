import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Industries from "../components/Industries";
import Quality from "../components/Quality";
// import Referral from "../components/Referral";
import Testimonials from "../components/Testimonials";
// import BlogPreview from "../components/BlogPreview";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Quality />
      {/* <Referral /> */}
      <Testimonials />
      {/* <BlogPreview /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Home;