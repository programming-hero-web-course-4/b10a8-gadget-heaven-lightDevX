import { Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  addToStoreProductList,
  addToStoreWishListItems,
} from "../../utilities/localStore";
import Modal from "../Modal/Modal";

const ProductDetails = () => {
  const { product_id } = useParams();

  const productData = useLoaderData();

  const [showModal, setShowModal] = useState({
    show: false,
    actionType: "cart", // default to cart
  });

  const product = productData.find(
    (product) => product.product_id === product_id,
  );

  if (!product) {
    return (
      <h2 className="container mx-auto text-center text-red-400">
        Oops, No product data found!!!
      </h2>
    );
  }

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
  } = product;

  const handleAddToCart = () => {
    addToStoreProductList(product.product_id);
    setShowModal({ show: true, actionType: "cart" });
  };

  const handleWishList = () => {
    addToStoreWishListItems(product.product_id);
    setShowModal({ show: true, actionType: "wishlist" });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-primary relative">
      <div className="container mx-auto">
        <div className="relative h-96 space-y-3.5 text-center">
          <h1 className="pt-3.5 text-xl font-bold text-white lg:pt-8 lg:text-3xl">
            Product Details
          </h1>
          <p className="mx-auto w-1/2 text-base font-normal text-wrap text-white lg:text-xl">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        {/* Product Card */}
        <div className="absolute top-2/3 z-20 mx-5 flex h-full gap-4 rounded-2xl bg-white p-3 lg:top-2/4 lg:left-72 lg:h-auto lg:flex-row lg:gap-8 lg:p-8">
          {/* Image Section */}
          <div className="h-full w-full rounded-2xl bg-gray-300 lg:h-[480px] lg:w-[500px]">
            <img
              src={product_image}
              alt="product"
              className="h-full w-full rounded-4xl object-contain p-2.5 lg:p-6"
            />
          </div>

          {/* Details Section */}
          <div className="w-full space-y-1.5 lg:space-y-4">
            <h1 className="text-xl font-normal lg:text-3xl">{product_title}</h1>
            <p className="text-base font-normal lg:text-xl">Price: $ {price}</p>

            <button className="hidden rounded-4xl border border-lime-300 bg-lime-100 px-1 py-0.5 text-lime-600 md:block lg:px-3.5 lg:py-1.5">
              In Stock
            </button>

            <p className="hidden text-base font-normal text-neutral-900/60 md:block lg:text-xl">
              {description}
            </p>

            {/* Specifications */}
            <div className="space-y-1.5 lg:space-y-4">
              <h1 className="text-base font-normal lg:text-xl">
                Specification:
              </h1>
              <ul className="space-y-1.5">
                {specification.slice(0, 2).map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base font-normal text-neutral-900/60 lg:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div className="hidden md:block">
              <p className="text-base font-bold text-neutral-900 lg:text-[18px]">
                Ratings
              </p>
              <div className="flex items-center justify-start gap-2 lg:w-1/4">
                <span className="flex">
                  {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  ))}
                  {rating % 1 !== 0 && rating < 5 && (
                    <StarHalf className="fill-yellow-300 text-yellow-300" />
                  )}
                </span>
                <span className="text-lg font-semibold">{rating}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col items-center justify-between gap-1.5 py-0.5 md:flex-row lg:w-1/3">
              <button
                onClick={handleAddToCart}
                className="bg-primary flex items-center justify-center rounded-4xl p-1.5 py-1 font-semibold text-white lg:px-5 lg:py-2.5 lg:font-bold"
              >
                Add To Cart
                <ShoppingCart className="ml-1 text-white" />
              </button>
              <button
                onClick={handleWishList}
                className="flex items-center justify-center rounded-full border border-neutral-900/60 p-1 lg:p-2"
              >
                <Heart className="text-neutral-900/65" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[384px] lg:mt-[448px]"></div>
      </div>
      {/* Modal */}
      {showModal.show && (
        <Modal
          actionType={showModal.actionType}
          onClose={handleCloseModal}
          price={price} // Or calculate total differently
        />
      )}
    </div>
  );
};

export default ProductDetails;
