import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Statistics", path: "/statistics" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="relative">
      <div className="m-8 rounded-t-2xl bg-[#9538E2] px-5 py-8 md:px-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-white">
          {/* Logo */}
          <div>
            <Link to="/" className="text-xl font-bold">
              Gadget Heaven
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-12 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden gap-4 md:flex">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <ShoppingCart className="text-neutral-900/65" />
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Heart className="text-neutral-900/65" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed top-0 left-0 flex h-screen w-full transform flex-col items-center justify-center gap-6 bg-[#9538E2] p-6 text-center text-white transition-all duration-1000 ease-in-out md:hidden ${
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
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Icons */}
            <div className="mt-4 flex gap-4">
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <ShoppingCart className="text-neutral-900/65" />
              </button>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Heart className="text-neutral-900/65" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
