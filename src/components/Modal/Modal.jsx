import { BadgeCheck } from "lucide-react";

const Modal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70 backdrop-blur-sm">
      <div className="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center gap-3 text-center">
          <BadgeCheck className="h-8 w-8 text-lime-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Successful
          </h1>
          <hr className="my-2 w-2/3 border-gray-300" />
          <p className="text-gray-600">Thanks for your purchase!</p>
          <p className="text-primary mt-2 text-lg font-semibold">
            Total: $2449.96
          </p>

          <button className="bg-primary hover:bg-primary-dark mt-6 w-full rounded-lg px-5 py-2 text-white transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
