import React, { useState } from "react";
import logo from "../images/logo-dark.svg";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "/features",
    },
    {
      title: "Api",
      path: "/api",
    },
    {
      title: "Sign in",
      path: "/signin",
    },
  ];

  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <header className="shadow-xs max-h-20 overflow-hidden w-full text-zinc-600 sticky top-0 bg-white/80 backdrop-blur-md  z-50">
      <nav className=" max-w-6xl mx-auto flex items-center justify-between px-5 md:px-3 ">
        <Link href="/" passHref>
          <a className="w-24 h-16 relative cursor-pointer block">
            <Image
              src={logo}
              layout="fill"
              alt="shodex garden logo"
              priority
              loading="eager"
            />
          </a>
        </Link>

        <div className="flex">
          <div
            className={` ${
              isSidebar ? "block " : "hidden"
            } fixed h-screen lg:h-full  lg:bg-transparent bg-white inset-0  ease-in-out duration-500
          lg:block lg:relative`}
          >
            {/* <div className="relativ"> */}
            <MdOutlineClose
              className="cursor-pointer text-3xl  right-10 top-10 absolute lg:hidden "
              onClick={() => setIsSidebar(false)}
            />
            {/* </div> */}

            <ul className="flex lg:flex-row ml-auto flex-col justify-center items-center h-full -mt-10 md:-mt-0">
              {navLinks.map((navLink) => (
                <li
                  className="hover:text-purple-400 flex flex-col items-center  px-4 py-2 my-6 lg:my-1 font-medium text-md "
                  onClick={() => setIsSidebar(false)}
                  key={navLink.title}
                >
                  <Link href={navLink.path}>{navLink.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center ml-3">
            {/* {router.pathname === "/tickets" ? null : ( */}
            <button className="hover:bg-purpe-600 ease-in-out duration-300 bg-purple-500  lg:px-3 px-2 py-2 rounded text-sm font-semibold text-zinc-50">
              <Link href="/tickets">Buy Tickets</Link>
            </button>
            {/* )} */}

            <FiMenu
              onClick={() => setIsSidebar(true)}
              className="ml-4 mr-1 lg:hidden cursor-pointer text-2xl"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
