import { Heart, ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  return (
    <>
      <div className="bg-primary relative -z-10">
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
          <div className="absolute top-2/3 z-10 mx-5 flex h-full flex-row gap-4 rounded-2xl bg-white p-3 lg:top-2/4 lg:left-72 lg:h-auto lg:gap-8 lg:p-8">
            <div className="h-full w-full rounded-2xl bg-gray-300 lg:w-[500px]">
              <img
                src="../../../public/productImage/AppleWatchUltra2.jpg"
                alt="product"
                className="h-full w-full rounded-4xl object-contain p-2.5 lg:p-6"
              />
            </div>
            <div className="space-y-1.5 lg:space-y-4">
              <h1 className="text-xl font-normal lg:text-3xl">Phone</h1>
              <p className="text-base font-normal lg:text-xl">Price</p>
              <button className="rounded-4xl border border-lime-300 bg-lime-100 px-1 py-0.5 text-lime-600 lg:px-3.5 lg:py-1.5">
                In Stock
              </button>
              <p className="text-base font-normal text-neutral-900/60 lg:text-xl">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <div className="space-y-1.5 lg:space-y-4">
                <h1 className="text-base font-normal lg:text-xl">
                  Specification:
                </h1>
                <ul>
                  <li className="text-base font-normal text-neutral-900/60 lg:text-xl">
                    dfhsdfhd
                  </li>
                </ul>
              </div>
              <p className="text-base font-bold text-neutral-900 lg:text-[18px]">
                Ratings
              </p>
              <div className="flex w-1/2 items-center justify-between lg:w-1/4">
                <span>*</span>
                <span>4.5</span>
              </div>
              <div className="flex w-full items-center justify-between lg:w-1/3">
                <button className="bg-primary relative flex items-center justify-center rounded-4xl p-1.5 py-1 font-semibold text-white lg:px-5 lg:py-2.5 lg:font-bold">
                  Add To Card
                  <ShoppingCart className="ml-1 text-white" />
                </button>
                <button className="relative flex items-center justify-center rounded-full border border-neutral-900/60 p-1 lg:p-2">
                  <Heart className="text-neutral-900/65" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[384px] lg:mt-[448px]"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
