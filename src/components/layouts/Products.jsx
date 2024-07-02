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
      onSale: false,
      inFavorites: false,
      fashion: "Men fashion",
      title: "Samsung Galaxy Watch 3",
      price: "1,725.00",
      likes: 5,
      imageUrl: "/assets/pr.png",
    },
    ,
  {
    id: 2,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Apple Watch 4 2020",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr1.png",
  },
  {
    id: 3,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "iPhone XS Max Pro",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr2.png",
  },
  {
    id: 4,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Beats by Dre C 3450",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr3.png",
  },
  {
    id: 5,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Airpods 2nd Gen",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr4.png",
  },
  {
    id: 6,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Garmin Watch Fit X",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr5.png",
  },
  {
    id: 7,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Women Yellow Turtleneck",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr6.png",
  },
  {
    id: 8,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Harman Kardon Speaker",
    price: "$1,725.00",
    likes: 5,
    imageUrl: "/assets/pr7.png",
  },
    
  ];

  return (
    <div className="box mx-auto flex flex-col mt-10">
      <div className="flex flex-col mb-5">
      <h2 className="lg:text-4xl font-bold text-rubik text-center">
        Best Seller Products
      </h2>
      <p className="text-gray lg:text-base text-center mt-3">
        Check our best seller products on Elma website right now
      </p>
      </div>
      <div
        className="flex justify-between flex-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex w-[255px] h-[380px] flex-col relative items-center transition-shadow duration-300 hover:shadow-lg rounded-lg p-7"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flex w-full justify-between items-center">
              <p className="text-xs text-redText bg-redText bg-opacity-10">SALE</p>
              <img className="w-[36px] h-[36px]" src="./assets/love.svg"/>
            </div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={170}
              height={180}
              className="object-contain max-w-full h-[180px] mb-4"
            />
            <div className="w-[215px] h-[77px] flex flex-col">
              <p className="text-gray text-xs">{product.fashion}</p>
              <h3 className="text-base font-bold py-1">{product.title}</h3>
              <div className="flex justify-between text-sm text-violetLight">
                <p>{product.price}</p>
                <div className="flex gap-1">
          {Array.from({ length: product.likes }).map((_, index) => (
            <img key={index} src="/assets/star.svg" className="text-yellowStar w-[16px] h-[16px]" />
          ))}
        </div>
              </div>
              {hoveredProductId === product.id && (
                <div className="absolute left-0 right-0 bottom-0 bg-white flex flex-col items-center gap-1 -mb-[60px] z-10 transition-opacity">
                  <button className="w-[215px] h-[40px] custom-button bg-violetLight text-white">
                    Add to Cart
                  </button>
                  <button className="w-[215px] h-[40px] custom-button text-gray border-2 border-gray bg-white">
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
