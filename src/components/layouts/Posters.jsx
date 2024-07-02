"use client";


const Posters = () => {
  return (
    <ul className="boxSmall w-full mx-auto flex lg:flex-row flex-col items-center justify-between pb-[40px]">
        <li><img src="/assets/asus.svg" className="w-[120px] h-[120px]"/></li>
        <li><img src="/assets/xiaomi.svg" className="w-[120px] h-[120px]"/></li>
        <li><img src="/assets/samsung.svg" className="w-[120px] h-[120px]"/></li>
        <li><img src="/assets/sony.svg" className="w-[120px] h-[120px]"/></li>
        <li><img src="/assets/wacom.svg" className="w-[120px] h-[120px]"/></li>
        <li><img src="/assets/apple.svg" className="w-[120px] h-[120px]"/></li>
    </ul>
  );
};

export default Posters;