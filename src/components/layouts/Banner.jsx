
const Banner = () => {
    return (
      <div className="box flex flex-col lg:flex-row justify-evenly lg:w-[1110px] lg:h-[335px] mx-auto bg-opacity-10 bg-blueGreen rounded font-roboto my-5">
          <img className="lg:w-[350px] lg:h-[340px] pt-10" src="/assets/banner.png"/>
          <div className="flex flex-col gap-3 lg:w-[377px] lg:h-[227px] my-auto">
              <p className="text-blueGreen lgLtext-sm">FLASH SALE 7.7.7</p>
              <h2 className="lg:text-4xl text-2xl font-bold">Lenovo Yoga X</h2>
              <p className="lg:text-base text-gray py-5">Smarter and intuitive with the same expert design
              and detail. Plus combine innovative latest AI features</p>
              <div className="flex gap-5">
                  <button className="custom-button lg:text-base bg-blueGreen text-white">Buy Now for $750</button>
                  <p className="lg:text-xl text-gray line-through">$1500,00</p>
              </div>
          </div>
      </div>
    );
  };
  
  export default Banner;