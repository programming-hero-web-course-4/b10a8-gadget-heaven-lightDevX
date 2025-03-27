import { BadgeCheck, Heart, ShoppingCart } from "lucide-react";

const Modal = ({ actionType, onClose, price }) => {
  // Define content based on action type
  const modalContent = {
    cart: {
      title: "Added to Cart!",
      icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
      description: "Item successfully added to your shopping cart",
      priceLabel: "Item Price:",
    },
    wishlist: {
      title: "Added to Wishlist!",
      icon: <Heart className="h-8 w-8 fill-red-500 text-red-500" />,
      description: "Item successfully added to your wishlist",
      priceLabel: "Wishlist Price:",
    },
  };

  const { title, icon, description, priceLabel } =
    modalContent[actionType] || {};

  return (
    <div className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">
      <div className="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center gap-3 text-center">
          {icon || <BadgeCheck className="h-8 w-8 text-lime-500" />}
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <hr className="my-2 w-2/3 border-gray-300" />
          <p className="text-gray-600">{description}</p>
          <p className="text-primary mt-2 text-lg font-semibold">
            {priceLabel} ${price}
          </p>

          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary-dark mt-6 w-full rounded-lg px-5 py-2 text-white transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
