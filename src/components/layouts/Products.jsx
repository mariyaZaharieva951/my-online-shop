"use client";
import { useState } from "react";
import Image from "next/image";

const Products = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = () => {
    hoveredProductId(true);
  };

  const handleMouseLeave = () => {
    hoveredProductId(false);
  };

  const products = [
    {
      id: 1,
      fashion: "Men fashion",
      title: "Samsung Galaxy Watch 3",
      price: "1,725.00",
      likes: "",
      imageUrl: "/images/products/pr1.png",
    },
  ];

  return (
    <div className="box mx-auto flex flex-col justify-between mt-10">
      <div className="flex flex-col mb-5">
      <h2 className="lg:text-4xl font-bold text-rubik text-center">
        Best Seller Products
      </h2>
      <p className="text-gray lg:text-base text-center mt-3">
        Check our best seller products on Elma website right now
      </p>
      </div>
      <div
        className="w-[255px] h-[380px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col relative"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flex flex-between">
              <p>SALE</p>
              <div>//Ikona sarce</div>
            </div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={64}
              height={64}
              className="object-cover mb-4"
            />
            <div className="flex flex-col">
              <p>{product.fashion}</p>
              <h3>{product.title}</h3>
              <div className="flex justify-between">
                <p>{product.price}</p>
                <div>{product.likes}</div>
              </div>
              {hoveredProductId === product.id && (
                <div className="absolute left-0 right-0 bottom-4 flex flex-col space-y-2 transition-opacity">
                  <button className="bg-blue-500 text-white py-2">
                    Add to Cart
                  </button>
                  <button className="bg-gray-500 text-white py-2">
                    Quick View
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
