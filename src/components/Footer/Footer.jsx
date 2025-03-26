const Footer = () => {
  return (
    <footer className="mt-24 bg-white">
      <div className="container mx-auto px-6 py-8">
        {/* Logo & Description */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Gadget Heaven
          </h1>
          <p className="text-sm text-neutral-700 sm:text-base">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        {/* Divider Line */}
        <div className="mx-auto my-6 h-[1px] w-[80%] bg-amber-200 sm:w-[70%] lg:w-7xl"></div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
          {/* Services */}
          <div>
            <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">
              Services
            </h2>
            <ul className="mt-2 space-y-2 text-neutral-700">
              <li className="text-sm sm:text-base">Product Support</li>
              <li className="text-sm sm:text-base">Order Tracking</li>
              <li className="text-sm sm:text-base">Shipping & Delivery</li>
              <li className="text-sm sm:text-base">Returns</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">
              Company
            </h2>
            <ul className="mt-2 space-y-2 text-neutral-700">
              <li className="text-sm sm:text-base">About Us</li>
              <li className="text-sm sm:text-base">Careers</li>
              <li className="text-sm sm:text-base">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">
              Legal
            </h2>
            <ul className="mt-2 space-y-2 text-neutral-700">
              <li className="text-sm sm:text-base">Terms of Service</li>
              <li className="text-sm sm:text-base">Privacy Policy</li>
              <li className="text-sm sm:text-base">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
