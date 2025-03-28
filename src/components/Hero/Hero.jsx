import banner from "../../assets/images/banner.jpg";

const Hero = () => {
  return (
    <section className="relative -z-10 overflow-hidden">
      <div className="bg-primary mx-8 rounded-b-2xl px-5 pt-8 pb-20 md:px-6 md:pb-28 lg:px-0 lg:pb-64">
        <div className="container mx-auto lg:max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white md:space-y-6">
            <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl lg:leading-[1.2]">
              Upgrade Your Tech Accessories with Gadget Heaven
            </h1>
            <p className="w-full text-sm leading-6 md:w-3/4 md:text-base md:leading-7 lg:w-1/2 lg:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="text-primary rounded-full bg-white px-6 py-3 text-lg font-bold transition-all duration-300 hover:scale-105 md:px-8 md:py-4 md:text-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-12 -mt-12 flex justify-center md:-mt-16 lg:-mt-56">
        <div className="h-1/2 w-[90%] max-w-3xl overflow-hidden rounded-2xl border-2 border-white bg-white/70 p-3 md:h-[256px] md:max-w-4xl md:p-5 lg:h-[512px] lg:max-w-5xl lg:p-6">
          <img
            src={banner}
            alt="Tech accessories collage"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
