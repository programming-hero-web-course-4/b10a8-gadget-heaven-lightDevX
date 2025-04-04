import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("./productDB.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory,
  );

  return (
    <div className="mx-auto mt-12 w-full max-w-6xl px-4">
      <h2 className="py-6 text-center text-xl font-semibold sm:text-2xl">
        Explore Cutting-Edge Gadgets
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left Side: Filters */}
        <div className="w-full flex-shrink-0 space-y-4 rounded-2xl bg-white p-6 md:w-1/4">
          <h3 className="text-lg font-semibold">Filter by Category</h3>
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-4xl px-4 py-2 text-sm sm:text-xl ${
                selectedCategory === "all"
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-gray-200 text-neutral-900/60"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("Laptops")}
              className={`rounded-4xl px-4 py-2 text-sm sm:text-xl ${
                selectedCategory === "Laptops"
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-gray-200 text-neutral-900/60"
              }`}
            >
              Laptops
            </button>
            <button
              onClick={() => setSelectedCategory("Smartphones")}
              className={`rounded-4xl px-4 py-2 text-sm sm:text-xl ${
                selectedCategory === "Smartphones"
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-gray-200 text-neutral-900/60"
              }`}
            >
              Phones
            </button>
            <button
              onClick={() => setSelectedCategory("Smartwatches")}
              className={`rounded-4xl px-4 py-2 text-sm sm:text-xl ${
                selectedCategory === "Smartwatches"
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-gray-200 text-neutral-900/60"
              }`}
            >
              Smart Watches
            </button>
            <button
              onClick={() => setSelectedCategory("Accessories")}
              className={`rounded-4xl px-4 py-2 text-sm sm:text-xl ${
                selectedCategory === "Accessories"
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-gray-200 text-neutral-900/60"
              }`}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Right Side: Products */}
        <div className="w-full flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
