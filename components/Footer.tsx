import React from "react";
import { BsHeartFill } from "react-icons/bs";
function Footer() {
  return (
    <footer className="w-full  border-top border-top-2  px-3 md:mt-10">
      <section className="max-w-5xl mx-auto px-3 bg-purple-400 my-5 pb-6 pt-10 rounded-lg">
        <h2 className="text-3xl font-bold text-purple-100 text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-6 text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-100">
          Stay up to date with th elatest features and releases. Get notified by
          mail whenever we ship something new and fun.
        </p>

        <form className="my-10 p-3 items-center  justify-center max-w-3xl mx-auto rounded-lg  flex flex-wrap bg-white/90 text-purple-300">
          <input
            type="email"
            className="md:w-[75%] w-full my-1 bg-transparent  outline-none pl-5 py-4"
            placeholder="Email Address"
            required
          />
          <button
            type="submit"
            className="font-semibold px-3 w-full my-1 md:w-[25%] text-zinc-100 rounded-md h-full py-4 hover:bg-purple-500 transition-all ease-in-out bg-purple-400 "
          >
            Subscribe
          </button>
        </form>
      </section>
      <section className="py-5 px-3  border-t ">
        <p className="text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
          Made With <BsHeartFill className="text-red-600/70 inline" /> by{" "}
          <a
            href="https://github.com/chinnaji"
            className="text-purple-400 font-semibold"
          >
            Chinnaji
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
