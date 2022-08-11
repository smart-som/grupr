import React from "react";
import link from "../images/link.png";
import Image from "next/image";
import CopyToClipboard from "./CopyToClipboard";
import { AiOutlineDelete } from "react-icons/ai";

function DashboardList({ id, url }: any) {
  return (
    <div className="bg-purple-100 text-purple-400 flex items-center rounded-md  max-w-3xl w-full mx-auto md:px-5 px-3">
      <div className="w-7 h-7 rotate-45 mr-3  rounded-full relative ">
        <Image
          src={link}
          alt="Chart"
          className="  h-full w-full "
          layout="fill"
          priority
          loading="eager"
        />
      </div>
      <a
        target="_blank"
        href="https://grupr.nl/ml30sdk"
        className="text-zinc-600"
      >
        grupr.nl/ml30sdk
      </a>

      <div className="ml-auto flex gap-x-3">
        <CopyToClipboard type={2} text={"https://grupr.nl/ml30sdk"} />
        <button
          type="button"
          className={`ml-auto px-2 my-2 py-4 outline-none flex gap-x-2  justify-center items-center duration-200 rounded-md text-purple-300 font-semibold  transition-all ease-in-out`}
        >
          <AiOutlineDelete className="text-xl" />{" "}
          <span className="md:block hidden text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default DashboardList;
