import React, { useLayoutEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
function Footer() {
  const router = useRouter();
  const [isNewsletter, setIsNewletter] = useState(true);
  const [email, setEmail] = useState(" ");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    setIsNewletter(router.pathname == "/" ? true : false);
  });

  const handleSubNewsletter = (e: any) => {
    e.preventDefault();
    setEmail("");
    setIsLoading(true);
    axios
      .post("/api/newsletter", { email })
      .then((res) => {
        // console.log(res.data);
        setIsLoading(false);
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <footer className="w-full  border-top border-top-2  px-3 md:mt-10">
      {isNewsletter ? (
        <section className="max-w-5xl mx-auto px-3 bg-purple-400 my-5 pb-6 pt-10 rounded-lg">
          <h2 className="text-3xl font-bold text-purple-100 text-center">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-6 text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-100">
            Stay up to date with th elatest features and releases. Get notified
            by mail whenever we ship something new and fun.
          </p>

          <form
            onSubmit={handleSubNewsletter}
            className="my-10 p-3 items-center  justify-center max-w-3xl mx-auto rounded-lg  flex flex-wrap bg-white/90 text-purple-300"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="md:w-[75%]  w-full my-1 bg-transparent  outline-none md:pl-1 pl-5 py-4 text-lg"
              placeholder="Email Address"
              required
            />
            {isLoading ? (
              <button
                type="button"
                className="px-2 mb-4 md:w-[75%] py-4 outline-none justify-center flex items-center gap-x-1  rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  w-full"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 w-6 h-6 text-gray-200 animate-spin  fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>{" "}
                Loading ...
              </button>
            ) : (
              <button
                type="submit"
                className="px-2 mb-4  md:w-[75%] py-4 outline-none  max-w-3xl rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  w-full"
              >
                Subscribe
              </button>
            )}
            {isSubscribed ? (
              <p className="bg-orange-500 rounded-lg my-2 px-3 py-2 text-black">
                Subscribed Successfully ✔
              </p>
            ) : null}
          </form>
        </section>
      ) : null}

      <section className="py-5 px-3  border-t ">
        <p className="text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
          Made With <BsHeartFill className="text-red-600/70 inline" /> by{" "}
          <a
            href="https://github.com/Smart-som"
            className="text-purple-400 font-semibold"
          >
            Smart-som
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
