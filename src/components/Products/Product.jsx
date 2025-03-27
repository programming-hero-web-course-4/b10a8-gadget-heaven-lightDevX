import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  // console.log(product);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product_id}`);
  };

  return (
    <div className="w-full rounded-2xl bg-white shadow-lg">
      <div className="space-y-4 p-4">
        <div className="h-40 w-full">
          <img
            src={product_image}
            alt={product_title}
            className="h-full w-full rounded-2xl object-contain"
          />
        </div>
        <h2 className="text-start text-lg font-semibold">{product_title}</h2>
        <p className="text-start text-sm text-gray-700">Price: $ {price}</p>
        <button
          onClick={handleViewDetails}
          className="border-primary text-primary rounded-4xl border px-4 py-2 text-sm font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
