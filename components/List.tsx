import React from "react";
import { TLayoutProps } from "../types";
import formatUrl from "../helpers/formatUrl";

function List({ title, url, image }: TLayoutProps) {
  return (
    <a
      href={url}
      className="flex bg-zinc-100 hover:bg-purple-400/10 transition-all ease-in-out  rounded-lg h-[76px] items-center p-2"
    >
      <div className="w-[20%]  relative  h-full rounded-lg overflow-hidden ">
        {/* <Image src={image} layout="fill" objectFit="cover" /> */}
        <img
          src={image}
          alt={url + title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center flex-1 py-3 w-[80%] px-3 gap-y-1">
        <h2 className="w-full truncate font-medium ">{title}</h2>
        <p className="text-light text-sm">{formatUrl(url)}</p>
      </div>
    </a>
  );
}

export default List;
