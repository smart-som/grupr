import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="max-w-xl mx-auto  px-5 py-7 shadow rounded-md border border-purple-100/20">
      <h1 className="text-3xl font-bold text-purple-400 text-center">
        Welcome Back!
      </h1>
      <form className="mt-10 w-full ">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="p-3 my-3  outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          className="p-3 my-3  outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
        <button
          type="submit"
          className="px-2 py-4 outline-none   rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  mt-3 w-full"
        >
          Log In
        </button>
        <button
          type="button"
          className="flex items-center border  justify-center px-2 py-4 outline-none   rounded-md text-zinc-800 font-semibold  mt-3 w-full"
        >
          <FcGoogle className="text-2xl mr-3" /> Log In With Google
        </button>
        <p className="mt-7 text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-semibold text-purple-400">
            Sign Up
          </a>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
