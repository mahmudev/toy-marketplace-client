import React from "react";

const NewCollection = () => {
  return (
    <div
      data-aos-duration="2000"
      data-aos="fade-up"
      className=" container mx-auto sm:text-center md:mb-12"
    >
      <h1 className="text-3xl my-10 font-semibold text-black text-center lg:text-4xl">
        New Collection
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img src="https://i.ibb.co/KDtngJ3/image.png" alt="" />
        </div>

        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img src="https://i.ibb.co/dDrQMH0/image.png" alt="" />
        </div>

        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img src="https://i.ibb.co/cDR3k6R/image.png" alt="" />
        </div>

        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img src="https://i.ibb.co/6vcYK1k/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
