import { X } from "lucide-react";

const CartComponent = () => {
  return (
    <div className="relative my-6 flex flex-col items-center gap-6 rounded-4xl bg-white p-6 shadow-md md:flex-row md:items-center md:p-8">
      {/* Product Image */}
      <div className="w-full max-w-[120px] md:w-auto">
        <img
          src="/productImage/AppleWatchUltra2.jpg"
          alt="Apple Watch Ultra 2"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* Product Details & Remove Button */}
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-neutral-900">
            Samsung Galaxy S23 Ultra
          </h2>
          <p className="text-sm text-neutral-700">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <p className="text-primary text-base font-bold">Price: $999.99</p>
        </div>

        {/* Remove Button (Top Right on Mobile, Right Side on Desktop) */}
        <button className="absolute top-4 right-4 text-red-400 md:relative md:top-0 md:right-0 md:ml-4">
          <X className="h-8 w-8 rounded-full border border-red-400 p-1 transition hover:bg-red-400 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
