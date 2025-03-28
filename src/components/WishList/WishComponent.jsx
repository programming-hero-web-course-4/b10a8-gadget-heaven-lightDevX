import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getWishListItems,
  removeFromStoreWishList,
} from "../../utilities/localStore";

const WishComponent = () => {
  const [products, setProducts] = useState([]);

  const allProducts = useLoaderData();

  useEffect(() => {
    const storeWishList = getWishListItems();
    const storeWishListData = storeWishList;

    const wishListDisplay = allProducts.filter((product) =>
      storeWishListData.includes(product.product_id),
    );
    setProducts(wishListDisplay);
  }, [allProducts]);

  const handleRemove = (productId) => {
    removeFromStoreWishList(productId);
    setProducts((prev) =>
      prev.filter((product) => product.product_id !== productId),
    );
  };

  return (
    <>
      {products.map((product) => (
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
              <button className="bg-primary rounded-4xl px-7 py-3 text-white md:w-1/2">
                Add to Card
              </button>
            </div>

            <button
              onClick={() => handleRemove(product.product_id)}
              className="absolute top-4 right-4 text-red-400 md:relative md:top-0 md:right-0 md:ml-4"
            >
              <X className="h-8 w-8 rounded-full border border-red-400 p-1 transition hover:bg-red-400 hover:text-white" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishComponent;
