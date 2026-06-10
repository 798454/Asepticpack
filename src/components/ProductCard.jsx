function ProductCard({
  image,
  title,
  description,
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-slate-600">
          {description}
        </p>

        <button className="mt-5 text-sky-600 font-semibold">
          Learn More →
        </button>

      </div>

    </div>
  );
}

export default ProductCard;