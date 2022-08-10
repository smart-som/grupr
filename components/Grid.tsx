import React from "react";
import Image from "next/image";
import { TLayoutProps } from "../types";
function Grid({ title, url, image }: TLayoutProps) {
  return (
    <div className=" bg-zinc-100  rounded-lg p-0">
      <div className="w-full lg:h-44 h-36 relative rounded-t-lg overflow-hidden  p-0">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center flex-1 py-5 w-full px-3 gap-y-1">
        <h2 className="w-full truncate font-medium ">{title}</h2>
        <a href={url} className="text-light text-sm">
          {url}
        </a>
      </div>
    </div>
  );
}

export default Grid;
