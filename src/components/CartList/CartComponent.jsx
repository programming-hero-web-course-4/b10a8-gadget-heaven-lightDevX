import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getProductItems,
  removeFromStoreProductList,
} from "../../utilities/localStore";

const CartComponent = ({ onTotalChange, sortOrder }) => {
  const [products, setProducts] = useState([]);

  const allProducts = useLoaderData();

  useEffect(() => {
    const updateCartList = () => {
      const storeCartList = getProductItems();
      const storeCartListData = storeCartList.map((id) => id);
      const cartListDisplay = allProducts.filter((product) =>
        storeCartListData.includes(product.product_id),
      );
      setProducts(cartListDisplay);
    };

    // Listen for storage changes
    window.addEventListener("storage", updateCartList);

    // Initial update
    updateCartList();

    return () => {
      window.removeEventListener("storage", updateCartList);
    };
  }, [allProducts]);
  useEffect(() => {
    // Update total calculation
    const total = products.reduce((sum, product) => sum + product.price, 0);
    onTotalChange(total.toFixed(2));
  }, [products, onTotalChange]);

  const handleRemove = (productId) => {
    // Remove from localStorage
    removeFromStoreProductList(productId);
    // Update UI state
    setProducts((prev) =>
      prev.filter((product) => product.product_id !== productId),
    );
  };

  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "desc" ? b.price - a.price : a.price - b.price,
  );

  return (
    <>
      {sortedProducts.map((product) => (
        <div
          key={product.product_id}
          className="relative my-6 flex flex-col items-center gap-6 rounded-4xl bg-white p-6 shadow-md md:flex-row md:items-center md:p-8"
        >
          <div className="w-full max-w-[120px] md:w-auto">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-neutral-900">
                {product.product_title}
              </h2>
              <p className="text-sm text-neutral-700">{product.description}</p>
              <p className="text-primary text-base font-bold">
                Price: $ {product.price}
              </p>
            </div>

            <button
              onClick={() => handleRemove(product.product_id)}
              className="absolute top-4 right-4 text-red-400 md:relative md:top-0 md:right-0 md:ml-4"
            >
              <lucideX className="h-8 w-8 rounded-full border border-red-400 p-1 transition hover:bg-red-400 hover:text-white" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartComponent;
