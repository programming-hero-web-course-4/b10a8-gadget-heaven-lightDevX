import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  const PageTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
      const pathToTitle = {
        "/": "Home",
        "/statistics": "Statistics ",
        "/dashboard": "Dashboard",
      };

      document.title = `${pathToTitle[location.pathname]} - Gadget Heaven`;
    }, [location.pathname]);

    return null;
  };

  return (
    <div>
      <PageTitleUpdater></PageTitleUpdater>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
