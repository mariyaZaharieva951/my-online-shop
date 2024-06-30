const Hero = () => {
  return (
    <div className="box mx-auto flex lg:flex-row flex-col justify-between mt-[60px]">
      <div className="lg:w-[500px] lg:h-[438px]">
        <p className="text-roboto text-blueGreen text-sm text-uppercase pb-[15px]">
          SONY WH-H910N
        </p>
        <h1 className="lg:w-[501px] lg:h-[144px] text-rubik font-bold text-[56px] leading-[72px]">
          Best in Hi-Res and Noise Cancelling
        </h1>
        <p className="text-roboto text-gray text-base leading-[28px] py-[20px]">
          Experience finely tuned noise-canceling performance in a comfortable
          headphone. Long-lasting battery life plus quick charging keeps you
          listening for up to 35 hours since start.
        </p>
        <div className="flex gap-5">
          <button className="lg:text-base w-[160px] h-[48px] custom-button bg-myviolet text-white text-nowrap rounded">Buy Now</button>
          <button className="lg:text-base w-[140px] h-[48px] custom-button border-2 text-myviolet border-myviolet text-nowrap rounded">Learn More</button>
        </div>
      </div>
      <img className="lg:w-[372px] lg:h-[437px]" src="/assets/hero.png" />
    </div>
  );
};

export default Hero;
