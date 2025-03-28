import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const [cartLength, setCartLength] = useState(0);
  const [wishList, setWishList] = useState(0);

  // Handle cart updates
  useEffect(() => {
    const updateCartLength = () => {
      const cartItems = JSON.parse(
        localStorage.getItem("product-cart-list") || "[]",
      );
      setCartLength(cartItems.length);
    };

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (key === "product-cart-list" || key === "wish-list") {
        window.dispatchEvent(
          new StorageEvent("storage", { key, newValue: value }),
        );
      }
    };

    updateCartLength();
    window.addEventListener("storage", updateCartLength);

    return () => {
      window.removeEventListener("storage", updateCartLength);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  // Handle wishlist updates
  useEffect(() => {
    const updateWishList = () => {
      const wishItems = JSON.parse(localStorage.getItem("wish-list") || "[]");
      setWishList(wishItems.length);
    };

    updateWishList();
    window.addEventListener("storage", updateWishList);

    return () => {
      window.removeEventListener("storage", updateWishList);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const headerStyles = isHomePage
    ? "bg-primary text-white mx-8 mt-8 rounded-t-2xl px-5 py-8 md:px-3 lg:px-2.5"
    : "bg-white text-neutral-900  mt-8  px-5 py-8 md:px-3 lg:px-2.5";
  const linkStyles = isHomePage ? "text-white" : "text-neutral-900";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Statistics", path: "/statistics" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="relative">
      <div className={`${headerStyles}`}>
        <div className="mx-auto flex items-center justify-between lg:max-w-6xl">
          <div>
            <Link to="/" className="text-xl font-bold">
              Gadget Heaven
            </Link>
          </div>

          <nav className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-bold ${isActive ? "text-amber-300/70" : linkStyles} hover:text-lime-400 hover:underline hover:underline-offset-4`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden gap-4 md:flex">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <ShoppingCart className="text-neutral-900/65" />
              <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                {cartLength}
              </span>
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Heart className="text-neutral-900/65" />
              <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                {wishList}
              </span>
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={`bg-primary fixed top-0 left-0 z-50 flex h-screen w-full transform flex-col items-center justify-center gap-6 p-6 text-center text-white transition-all duration-1000 ease-in-out md:hidden ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <button
              className="absolute top-6 right-8"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-base font-bold hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 flex gap-4">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <ShoppingCart className="text-neutral-900/65" />
                <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                  {cartLength}
                </span>
              </button>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Heart className="text-neutral-900/65" />
                <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                  {wishList}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
