import ProductCard from "./ProductCard";
import RollsImage from "../assets/Rolls1.png";

function Products() {
  const products = [
    {
      title: "Sterilization Rolls",
      image: "/src/assets/Rolls1.png",
      description:
        "Medical grade sterilization packaging rolls.",
    },
    {
      title: "Sterilization Pouches",
      image: "/src/assets/pouchs1.png",
      description:
        "Reliable self-sealing and heat-seal pouches.",
    },
    {
      title: "Indicator Products",
      image: "/src/assets/item1.jpg",
      description:
        "Chemical indicators and monitoring products.",
    },
    {
      title: "CSSD Consumables",
      image: "/src/assets/crepe.png",
      description:
        "Complete CSSD support consumables.",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">

      <div className="container-custom">

        <div className="text-center mb-16">

          <span className="text-sky-600 font-semibold">
            OUR PRODUCTS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Comprehensive CSSD Product Range
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Designed for hospitals, clinics and
            healthcare facilities requiring
            dependable sterilization solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;