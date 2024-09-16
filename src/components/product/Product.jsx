import React from "react";
import { useGetProductsQuery } from "../../redux/api/ProductsApi";


const Product = () => {
  const { data } = useGetProductsQuery();
  

  return (
    
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.payload &&
          data.payload.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.product_images[0]}
                alt={product.product_name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                  {product.product_name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex justify-between items-center text-gray-800 mb-4">
                  <p className="text-xl font-bold text-green-600">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    In Stock: {product.countInStock}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Rating:</span> {product.rating}{" "}
                  / 5
                </p>

                <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


export default Product;



