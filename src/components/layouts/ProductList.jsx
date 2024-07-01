
'use client';
import Image from "next/image";

const ProductList = () => {
  const productsList1 = [
    {
      id: 1,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/item1.png",
    },
    {
      id: 2,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/item1.png",
    },
    {
      id: 3,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/item1.png",
    },
  ];

  const productsList2 = [
    {
      id: 1,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item2.png",
    },
    {
      id: 2,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item2.png",
    },
    {
      id: 3,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item2.png",
    },
  ];
  const productsList3 = [
    {
      id: 1,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/item3.png",
    },
    {
      id: 2,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/item3.png",
    },
    {
      id: 3,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/item3.png",
    },
  ];

  return (
    <div className="boxSmall w-full mx-auto flex justify-between lg:h-[570px] py-20px">
      <div>
        <h2 className="text-[22px] font-bold text-left">Product List 1</h2>
        {productsList1.map((product) => (
          <div key={product.id} className="flex flex-row items-center gap-3 ml-7">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={64}
              height={64}
              
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-gray text-sm ml-2">4.6</div>
              </div>
            </div>
          </div>
        ))}
        <p className="text-base text-[#006FBB]">View More Products...</p>
      </div>
      <div>
        <h2 className="text-[22px] font-bold text-left">Product List 2</h2>
        {productsList2.map((product) => (
          <div key={product.id} className="flex flex-row items-center gap-3 ml-7">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={64}
              height={64}
              
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-gray text-sm ml-2">4.6</div>
              </div>
            </div>
          </div>
        ))}
        <p className="text-base text-[#006FBB]">View More Products...</p>
      </div>
      <div>
        <h2 className="text-[22px] font-bold text-left">Product List 3</h2>
        {productsList3.map((product) => (
          <div key={product.id} className="flex flex-row items-center gap-3 ml-7">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={64}
              height={64}
              
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-gray text-sm ml-2">4.6</div>
              </div>
              
            </div>
          </div>
          
        ))}
        <p className="text-base text-[#006FBB]">View More Products...</p>
      </div>
    </div>
  );
};

export default ProductList;
