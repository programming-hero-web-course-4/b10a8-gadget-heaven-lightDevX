import { Outlet } from "react-router";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="mx-auto max-w-5xl">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
