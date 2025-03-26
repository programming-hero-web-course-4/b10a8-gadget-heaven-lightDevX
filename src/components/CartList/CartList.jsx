import { SlidersHorizontal } from "lucide-react";
import CartComponent from "./CartComponent";

const CartList = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-xl font-bold md:text-2xl">Cart</h1>

        <div className="flex w-full flex-col items-center gap-2 md:w-auto md:flex-row md:gap-4">
          <h2 className="text-lg font-semibold md:text-xl">
            Total cost: $99.99
          </h2>

          <button className="border-primary text-primary flex w-full items-center justify-center gap-1 rounded-4xl border px-4 py-2 text-sm font-semibold md:w-auto md:gap-2">
            Sort by Price
            <SlidersHorizontal className="h-4 w-4 lg:h-6 lg:w-6" />
          </button>

          <button className="bg-primary flex w-full items-center justify-center gap-1 rounded-4xl px-4 py-2.5 text-sm font-semibold text-white md:w-auto md:gap-2">
            Purchase
          </button>
        </div>
      </div>
      <CartComponent></CartComponent>
    </div>
  );
};

export default CartList;
