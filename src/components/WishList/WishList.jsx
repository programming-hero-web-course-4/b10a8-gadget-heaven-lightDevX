import WishComponent from "./WishComponent";

const WishList = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-xl font-bold md:text-2xl">Wish List</h1>
      <WishComponent></WishComponent>
    </div>
  );
};

export default WishList;
