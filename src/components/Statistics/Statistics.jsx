import { useLoaderData } from "react-router";

const Statistics = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <>
      <>
        <div className="bg-primary px-4 py-6 md:py-12">
          <div className="container mx-auto w-full max-w-xl space-y-5">
            <h1 className="text-center text-lg font-bold text-white md:text-2xl">
              Statistics
            </h1>
            <p className="text-center text-sm text-white md:text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Statistics;
