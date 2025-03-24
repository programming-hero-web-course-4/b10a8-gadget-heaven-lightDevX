import { Outlet } from "react-router";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto lg:max-w-6xl">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
