import React from "react";
import Image from "next/image";
import { TLayoutProps } from "../types";

function List({ title, url, image }: TLayoutProps) {
  return (
    <div className="flex bg-zinc-100  rounded-lg h-[76px] items-center p-2">
      <div className="w-[20%]  relative  h-full rounded-lg overflow-hidden ">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center flex-1 py-3 w-[80%] px-3 gap-y-1">
        <h2 className="w-full truncate font-medium ">{title}</h2>
        <a href={url} className="text-light text-sm">
          {url}
        </a>
      </div>
    </div>
  );
}

export default List;
