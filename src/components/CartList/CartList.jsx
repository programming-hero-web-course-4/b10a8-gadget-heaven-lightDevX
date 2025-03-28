import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { clearCartStorage } from "../../utilities/localStore";
import CartComponent from "./CartComponent";

const CartList = () => {
  const [total, setTotal] = useState(0);
  const [sortOrder, setSortOrder] = useState("desc");

  const handlePurchase = () => {
    clearCartStorage();
    window.dispatchEvent(new Event("storage"));
    window.location.reload();
  };
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Cart</h1>

        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Total cost: ${total}</h2>

          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            className="border-primary text-primary rounded-full border px-4 py-2"
          >
            Sort by Price {sortOrder === "desc" ? "(High-Low)" : "(Low-High)"}
            <SlidersHorizontal className="ml-2 inline-block" />
          </button>

          <button
            onClick={handlePurchase}
            className="bg-primary rounded-full px-6 py-2 text-white"
          >
            Purchase
          </button>
        </div>
      </div>

      <CartComponent onTotalChange={setTotal} sortOrder={sortOrder} />
    </div>
  );
};

export default CartList;
