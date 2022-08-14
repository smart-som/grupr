import React from "react";
import SignupForm from "../components/SignupForm";
import nookies from "nookies";
import { firebaseAdmin } from "../config/firebaseAdmin";
import { GetServerSidePropsContext } from "next";

function Signup() {
  return (
    <main className="max-w-6xl mx-auto min-h-[90vh] px-3 py-6 flex items-center ">
      <SignupForm />
    </main>
  );
}

export default Signup;

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   try {
//     const cookies = nookies.get(ctx);
//     const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

//     return {
//       redirect: {
//         permanent: false,
//         destination: "/dashboard",
//       },
//     };
//   } catch (err) {
//     // console.log(err);
//     return {
//       props: {
//         message: "token verification failed",
//       },
//     };
//   }
// }
