const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8">
        <div className="mt-24 flex flex-col items-center justify-center gap-4 py-4">
          <h1 className="text-[32px] font-bold text-neutral-900">
            Gadget Heaven
          </h1>
          <p className="text-base font-medium text-neutral-900/60">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="mx-auto my-8 h-[1px] w-[60%] bg-amber-100 md:w-[70%] lg:w-7xl"></div>
        <div className="grid grid-cols-1 justify-items-center gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Services</h2>
            <ul className="mt-2.5 flex flex-col gap-2">
              <li className="text-base font-normal text-neutral-900/35">
                Product Support
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Order Tracking
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Shipping & Delivery
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Returns
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Company</h2>
            <ul className="mt-2.5 flex flex-col gap-2">
              <li className="text-base font-normal text-neutral-900/35">
                About Us
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Careers
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">Legal</h2>
            <ul className="mt-2.5 flex flex-col gap-2">
              <li className="text-base font-normal text-neutral-900/35">
                Terms of Service
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Privacy Policy
              </li>
              <li className="text-base font-normal text-neutral-900/35">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
