import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../config";
import Grid from "../components/Grid";
import List from "../components/List";
import { useRouter } from "next/router";
import { FaThList } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import testImg1 from "../images/d.png";
import testImg2 from "../images/d2.png";
import { getLinkPreview } from "link-preview-js";
import Head from "next/head";
function Index({ grupData, destinationsMetadata }: any) {
  // console.log(destinationsMetadata);
  const [isListLayout, setIsListLayout] = useState(true);

  const { destinations, title, grupId, fullUrl } = grupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          content={
            destinationsMetadata[0].favicon[0] ||
            destinationsMetadata[0].image[0] ||
            testImg1
          }
        />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Grupr.nl" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@grupr.nl" />
        <meta name="twitter:creator" content="@chinnaji" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta
          name="twitter:image"
          content={
            destinationsMetadata[0].favicon[0] ||
            destinationsMetadata[0].image[0] ||
            testImg1
          }
        />
        <meta name="twitter:image:alt" content={title} />
      </Head>
      <main className="mx-auto max-w-6xl px-3 lg:px-5 pt-16 pb-32">
        <div className="flex  flex-col gap-y-6 items-center">
          <h1 className="text-3xl font-bold mb-5 flex items-center justify-center gap-x-2 text-zinc-700">
            {title}
          </h1>
          <div className="flex items-center gap-3  justify-center cursor-pointer w-fit  ">
            <button
              title="Show Grid Layout"
              onClick={() => setIsListLayout(false)}
              className={`${
                isListLayout
                  ? "bg-purple-100 text-purple-400 border-purple-400 hover:bg-purple-400/10 "
                  : "hover:bg-purple-500  bg-purplr-400"
              } rounded-md transition-all text-white items-center gap-x-3 p-3 flex ease-in-out bg-purple-400 `}
            >
              <BsFillGrid1X2Fill className=" text-md" /> Grid View
            </button>
            <button
              title="Show List Layout"
              onClick={() => setIsListLayout(true)}
              className={`${
                !isListLayout
                  ? "bg-purple-100 text-purple-400 border-purple-400 hover:bg-purple-400/10 "
                  : "hover:bg-purple-500  bg-purplr-400"
              } rounded-md transition-all text-white items-center gap-x-3 p-3 flex ease-in-out bg-purple-400 `}
            >
              <FaThList className=" text-md" /> List View
            </button>
            {/* {isListLayout ? (
            <BsFillGrid1X2Fill className="text-white text-md" />
          ) : (
            <FaThList className="text-white text-md" />
          )} */}
          </div>
        </div>
        <section className="w-full flex flex-wrap my-10 gap-y-3">
          {destinations.map((destination: string, index: any) => (
            <div
              key={index}
              className={`w-full md:w-1/2  transition-all ease-in-out px-3 ${
                isListLayout ? " md:py-3 py-0" : "py-5 "
              }  lg:w-1/3`}
            >
              {isListLayout ? (
                <List
                  title={destinationsMetadata[index].title}
                  url={destinationsMetadata[index].url}
                  image={
                    destinationsMetadata[index].favicon[0] ||
                    destinationsMetadata[index].image[0] ||
                    testImg1
                  }
                />
              ) : (
                <Grid
                  title={destinationsMetadata[index].title}
                  url={destinationsMetadata[index].url}
                  image={
                    destinationsMetadata[index].favicon[0] ||
                    destinationsMetadata[index].image[0] ||
                    testImg1
                  }
                />
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  if (ctx.params?.gruprId?.length !== 6) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  const { gruprId } = ctx.params;

  /**********FETCH STUFF HERE************************************ */

  const docRef = doc(db, "grups", `${gruprId}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    const grupData = docSnap.data();
    const { destinations } = grupData;
    // get the destinations metadata
    const destinationsMetadata: any = [];

    // getLinkPreview for each destination
    await Promise.all(
      destinations.map(async (destination: string) => {
        const preview: any = await getLinkPreview(destination as any, {
          followRedirects: "follow",
        });
        // console.log(preview);

        // resturcture link preview data
        const newPreview = {
          url: preview.url,
          title: preview.title || "none",
          favicon: preview.favicons.filter(
            (favicon: string) =>
              favicon.includes(".ico") || favicon.includes(".svg")
          ),
          image: preview.images.filter(
            (image: string) =>
              image.includes(".png") ||
              image.includes(".jpg") ||
              image.includes(".svg")
          ),

          description: preview.description || "none",
        };
        destinationsMetadata.push(newPreview);
      })
    );

    // console.log(dd);
    // console.log(destinationsMetadata);
    return {
      props: { grupData, destinationsMetadata },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}
