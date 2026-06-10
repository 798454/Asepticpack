import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <FloatingContact />
    </>
  );
}

export default App;
