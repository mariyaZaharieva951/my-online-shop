
const Category = () => {
    return (
        <div className="boxSmall w-full mx-auto flex flex-col justify-between py-[45px]">
            <div className="flex justify-between">
                <h2 className="font-bold text-[28px]">Category</h2>
                <div className="custom-button text-violetLight border-violetLight border-2">View all</div>
            </div>

            <ul className="flex flex-col lg:flex-row justify-between font-roboto py-[60px]">
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/telephone.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/camera.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/monitor.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/shirt.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/game.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
                <li className="flex flex-col w-[160px] h-[220px] items-center">
                    <img className="w-[56px] h-[56px] mb-[20px]" src="/assets/ball.svg"/>
                    <h4 className="text-sm mb-[10px] font-bold">Category Name</h4>
                    <p className="text-sm text-gray">2.3k Items</p>
                </li>
            </ul>

        </div>

    );
};

export default Category;