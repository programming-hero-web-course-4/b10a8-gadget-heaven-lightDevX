import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

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
            <button className="rounded-4xl bg-gray-200 px-4 py-2 text-sm text-neutral-900/60 sm:text-xl">
              All Products
            </button>
            <button className="rounded-4xl bg-gray-200 px-4 py-2 text-sm text-neutral-900/60 sm:text-xl">
              Laptops
            </button>
            <button className="rounded-4xl bg-gray-200 px-4 py-2 text-sm text-neutral-900/60 sm:text-xl">
              Phones
            </button>
            <button className="rounded-4xl bg-gray-200 px-4 py-2 text-sm text-neutral-900/60 sm:text-xl">
              Smart Watches
            </button>
            <button className="rounded-4xl bg-gray-200 px-4 py-2 text-sm text-neutral-900/60 sm:text-xl">
              Accessories
            </button>
          </div>
        </div>

        {/* Right Side: Products */}
        <div className="w-full flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Product key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
