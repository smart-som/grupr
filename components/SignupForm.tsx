import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../config";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import saveNewUser from "../helpers/saveNewUser";
function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const [message, setMessage] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const signUpWithEmailAndPassword = async (event: any) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log({ createUser });

      // store user info to database
      await saveNewUser({ name, email, res, uid: res.user.uid });

      // console.log(saveUserDataToDb);

      // redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setMessage(err.message.replaceAll("Firebase:", ""));
    }
  };

  const signUpWithGoogleProvider = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);

      // if user is a new user, store user info to database
      await saveNewUser({
        name: res.user.displayName!,
        email: res.user.email!,
        res,
        uid: res.user.uid,
      });

      // console.log(saveUserDataToDb);

      // redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      alert(err);
      // setMessage(err.toString())
    }
    // catch error
  };

  return (
    <section className="max-w-xl mx-auto  px-5 py-7 shadow rounded-md border border-purple-100/20">
      <h1 className="text-3xl font-bold text-purple-400 text-center">
        Create An Account!
      </h1>
      {message ? (
        <p className=" w-full bg-red-500 py-3 px-2 text-center text-sm font-extralight text-white ">
          {message}
        </p>
      ) : null}
      <form
        className="mt-10 w-full "
        onSubmit={(event) => signUpWithEmailAndPassword(event)}
      >
        <input
          autoComplete="on"
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Name"
          className="p-3 my-3 outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
        <input
          type="email"
          autoComplete="on"
          name="email address"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="p-3 my-3  outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="on"
          name="password"
          required
          placeholder="Password"
          className="p-3 my-3  outline-none focus:border-1 focus:border-purple-200 rounded-md bg-purple-100 text-purple-300 w-full"
        />
        <button
          type="submit"
          className="px-2 py-4 outline-none   rounded-md text-zinc-100 font-semibold hover:bg-purple-500 transition-all ease-in-out bg-purple-400  mt-3 w-full"
        >
          Sign Up
        </button>
        <button
          onClick={signUpWithGoogleProvider}
          type="button"
          className="flex items-center border  justify-center px-2 py-4 outline-none   rounded-md text-zinc-800 font-semibold  mt-3 w-full"
        >
          <FcGoogle className="text-2xl mr-3" /> Sign Up With Google
        </button>
        <p className="mt-7 text-center">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-purple-400">
            Log In
          </a>
        </p>
      </form>
    </section>
  );
}

export default SignupForm;
