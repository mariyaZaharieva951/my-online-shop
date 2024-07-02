const Blog = () => {
    const posts = [
        {
            imageSrc: "/assets/blog1.png",
            date: "07 July 2020",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
        {
            imageSrc: "/assets/blog2.png",
            date: "20 Mar 2022",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
        {
            imageSrc: "/assets/blog3.png",
            date: "07 Jun 2024",
            title: "Types of Blouse In Catalog fashion",
            description:
                "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
        },
    ];


    return (
        <div className="box mx-auto flex flex-col justify-between py-[150px]">
            <div className="flex justify-between mb-[15px]">
                <h2 className="font-rubik lg:text-4xl font-bold">Read our blog</h2>
                <div className="custom-button text-base text-nowrap text-[#5C6AC4] border-2 border-[#5C6AC4]">More on blogs</div>
            </div>
            <p className="text-gray text-base mb-[40px]">Check our latest article to get meaningfull content or tips for shopping</p>
            <div className="flex lg:flex-row gap-[30px] flex-col">
            {posts.map((p, index) => (
          <div key={index} className="w-[350px] h-[328px]  text-left">
            <img
              src={p.imageSrc}
              alt="img"
              className="w-[350px] h-[200px] rounded-lg mx-auto  object-cover cursor-pointer "
            />
            <p className="text-sm pt-7 text-violetLight ">{p.date}</p>
            <h2 className="text-base font-bold py-[10px]">
              {p.title}
            </h2>
            <p className="text-gray text-sm">
               {p.description}
            </p>
          </div>
        ))}

            </div>
        </div>
    );
};

export default Blog;