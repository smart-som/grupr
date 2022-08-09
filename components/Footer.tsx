import React from "react";

function Footer() {
  return (
    <footer className="w-full  border-top border-top-2 mt-16">
      <section className="max-w-5xl mx-auto p-3 ">
        <h2 className="text-3xl font-bold text-purple-400 text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-6 text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
          Stay up to date with th elatest features and releases. Get notified by
          mail whenever we ship something new and fun.
        </p>

        <form className="my-10 p-3 items-center justify-center max-w-3xl mx-auto rounded-lg  flex flex-wrap bg-purple-100 text-purple-300">
          <input
            type="email"
            className="md:w-[75%] w-full my-1 bg-transparent  outline-none pl-5 py-4"
            placeholder="Email Address"
            required
          />
          <button
            type="submit"
            className="font-semibold px-3 w-full my-1 md:w-[25%] text-zinc-100 rounded-md h-full py-4 bg-purple-400"
          >
            Subscribe
          </button>
        </form>
      </section>
    </footer>
  );
}

export default Footer;
