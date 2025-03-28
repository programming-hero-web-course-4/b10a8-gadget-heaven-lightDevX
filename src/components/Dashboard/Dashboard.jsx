import { Outlet, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCartList = () => {
    navigate("cart-list");
  };

  const handleWishList = () => {
    navigate("wish-list");
  };

  return (
    <>
      <div className="bg-primary px-4 py-6 md:py-12">
        <div className="container mx-auto w-full max-w-xl space-y-5">
          <h1 className="text-center text-lg font-bold text-white md:text-2xl">
            Dashboard
          </h1>
          <p className="text-center text-sm text-white md:text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex flex-col items-center justify-center gap-3 py-4 md:flex-row md:gap-6">
            <button
              onClick={handleCartList}
              className="text-primary w-full rounded-4xl bg-white px-6 py-3 font-semibold md:w-auto md:px-8 md:py-4"
              aria-label="Go to Cart List"
            >
              Cart
            </button>
            <button
              onClick={handleWishList}
              className="w-full rounded-4xl border border-white px-6 py-3 font-semibold text-white md:w-auto md:px-8 md:py-4"
              aria-label="Go to Wish List"
            >
              Wish List
            </button>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
