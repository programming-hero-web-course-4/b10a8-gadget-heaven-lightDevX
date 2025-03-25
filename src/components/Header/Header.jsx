import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Statistics", path: "/statistics" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="relative">
      <div className="bg-primary mx-8 mt-8 rounded-t-2xl px-5 py-8 md:px-3 lg:px-2.5">
        <div className="mx-auto flex items-center justify-between text-white lg:max-w-6xl">
          {/* Logo */}
          <div>
            <Link to="/" className="text-xl font-bold">
              Gadget Heaven
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-base font-bold hover:text-gray-300"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden gap-4 md:flex">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <ShoppingCart className="text-neutral-900/65" />
              <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                1
              </span>
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Heart className="text-neutral-900/65" />
              <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                1
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`bg-primary fixed top-0 left-0 flex h-screen w-full transform flex-col items-center justify-center gap-6 p-6 text-center text-white transition-all duration-1000 ease-in-out md:hidden ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-8"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Mobile Links */}
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

            {/* Mobile Icons */}
            <div className="mt-4 flex gap-4">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <ShoppingCart className="text-neutral-900/65" />
                <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                  1
                </span>
              </button>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Heart className="text-neutral-900/65" />
                <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-900/65">
                  1
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
