import React, { useState } from "react";
import Grupr from "../../components/Grupr";
import Grid from "../../components/Grid";
import List from "../../components/List";
import Image from "next/image";
import smiley from "../../images/smiley.png";
import link from "../../images/link.png";
import { FaThList } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import testImg1 from "../../images/d.png";
import testImg2 from "../../images/d2.png";
import { useAuth } from "../../context/AuthContext";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { firebaseAdmin } from "../../config/firebaseAdmin";
import { doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../config";
import nookies from "nookies";
import { TdashboardProps } from "../../types";
import DashboardList from "../../components/DashboardList";

function Index({ userData }: TdashboardProps) {
  // console.log(userData);
  const [isListLayout, setIsListLayout] = useState(true);
  const items = Array(12).fill(1);
  return (
    <main className="mx-auto max-w-6xl px-3 lg:px-5 pt-20">
      <h1 className="text-2xl flex items-center justify-center gap-x-2 md:text-4xl font-bold text-purple-400 text-center">
        Hello, {userData && userData.name.split(" ")[0]}
        <Image
          src={smiley}
          alt="user emoji"
          width={40}
          height={40}
          priority
          loading="eager"
        />
        {/* <span className="text-orange-500">grupn </span> */}
      </h1>
      <p className="mt-4 flex gap-x-1 justify-center text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
        Let&apos;s get Grupn
        <div className="w-9 h-9 rotate-45 -mt-3 rounded-full relative ">
          <Image
            src={link}
            alt="Chart"
            className="  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>
      </p>
      <Grupr />
      <section className="py-32">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <h1 className="text-3xl font-bold text-purple-400">All Grups</h1>
          {/* <div
            title="Toggle Layout"
            onClick={() => setIsListLayout(!isListLayout)}
            className="flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-all ease-in-out bg-purple-400  px-3 py-2 rounded-md"
          >
            {isListLayout ? (
              <BsFillGrid1X2Fill className="text-white text-md" />
            ) : (
              <FaThList className="text-white text-md" />
            )}
          </div> */}
        </div>

        <section className="w-full flex flex-col gap-y-3">
          {items.map((item, index) => {
            return <DashboardList />;
          })}
        </section>
        {/*  // <div key={index} className="w-full md:w-1/2 p-3 lg:w-1/3">
              //   {isListLayout ? (
              //     <List
              //       title="Dribbble - Discover the World"
              //       url="www.dribbble.com"
              //       image={testImg1}
              //     />
              //   ) : (
              //     <Grid
              //       title="Activision - Call Of Duty Modern Warfare"
              //       url="www.activision.com"
              //       image={testImg2}
              //     />
              //   )}
              // </div> */}
      </section>
    </main>
  );
}

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    /****verify auth token and get user id****************************************** */
    //
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid } = token;
    // the  is authenticated!

    /**********FETCH STUFF HERE************************************ */
    const docRef = doc(db, "userData", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { name, email, grups } = docSnap.data();
      const userData = { name, email, grups };
      // console.log(userData.name);

      /**********return user data************************************ */
      return {
        props: { userData },
      };
    }
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {} as never,
    };
  }
}
