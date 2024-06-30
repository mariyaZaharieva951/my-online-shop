
import Image from "next/image";

const ProductList = () => {
  const productsList1 = [
    {
      id: 1,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/bitmap.png",
    },
    {
      id: 2,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/bitmap.png",
    },
    {
      id: 3,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/assets/bitmap.png",
    },
  ];

  const productsList2 = [
    {
      id: 1,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item.png",
    },
    {
      id: 2,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item.png",
    },
    {
      id: 3,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/assets/item.png",
    },
  ];
  const productsList3 = [
    {
      id: 1,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/clothets.svg",
    },
    {
      id: 2,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/clothets.svg",
    },
    {
      id: 3,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/assets/clothets.svg",
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
              className=" w-[28px] h-[56px]"
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-violetLight text-sm ml-2">4.6</div>
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
              className=" w-[38px] h-[38px]"
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-violetLight text-sm ml-2">4.6</div>
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
              className=" w-[46px] h-[56px]"
            />
            <div
              key={product.id}
              className="flex flex-col items-start py-[25px] pl-[15px] gap-1"
            >
              <h3 className="text-base font-bold">{product.title}</h3>
              <div className="flex items-center">
                <div className="text-sm mr-5 text-violetLight">&#36;{product.price}</div>
                
                <img src="/assets/star.svg"/>
                <div className="text-violetLight text-sm ml-2">4.6</div>
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
