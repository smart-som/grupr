import React from "react";

function GrupSkeleton() {
  const list = Array(5).fill(0);
  return (
    <section className="w-full flex flex-wrap my-10 gap-y-3 mb-[200px] px-3 lg:px-5 pt-16 pb-32">
      <div className="w-full">
        <h1 className=" mb-5 gap-x-2 bg-zinc-200 rounded-md animate-pulse h-10 w-full max-w-xs mx-auto"></h1>

        <div className="flex items-center gap-3  justify-center cursor-pointer w-fit mx-auto ">
          <button className=" mb-5 rounded-md  p-3 gap-x-2 bg-zinc-200 animate-pulse h-10 w-20  max-w-xs mx-auto"></button>
          <button className=" mb-5 rounded-md  p-3 gap-x-2 bg-zinc-200 animate-pulse h-10 w-20  max-w-xs mx-auto"></button>
        </div>
      </div>
      {list.map((li: any, index: any) => (
        <div
          key={index}
          className={`w-full md:w-1/2 animate-pulse transition-all ease-in-out px-3  lg:w-1/3`}
        >
          <div className="flex bg-zinc-200  transition-all ease-in-out  rounded-lg h-[76px] items-center p-2">
            <div className="w-[20%] bg-zinc-300 relative  h-full rounded-lg overflow-hidden ">
              {/* <Image src={image} layout="fill" objectFit="cover" /> */}
              {/* <img src={image} className="w-full h-full object-contain" /> */}
            </div>
            <div className="flex flex-col justify-center flex-1 py-3 w-[80%] px-3 gap-y-1">
              <h2 className="w-full rounded  font-medium h-6 bg-zinc-300"></h2>
              <p className="text-light rounded text-sm bg-zinc-300 h-2"></p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GrupSkeleton;
