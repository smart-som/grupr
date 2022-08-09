import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Chart from "../images/Chart.png";
import crossedFingers from "../images/Crossed-fingers.png";
// import VictoryHand from "../images/Victory-hand.png";
import link from "../images/link.png";
import links from "../images/links.png";
// import chains from "../images/chains.png";
// import VulcanSalute from "../images/Vulcan-salute.png";
import Grupr from "../components/Grupr";
import frame1 from "../images/frame (1).png";
import frame2 from "../images/frame (2).png";
import frame3 from "../images/frame (3).png";
import frame4 from "../images/frame (4).png";
import Excel from "../images/Excel.png";
import groupLinks from "../images/groupLinks.png";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center max-w-5xl pt-24 mx-auto ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative w-full ">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 text-center">
          Shorten <span className="text-orange-500">multiple links</span>, share
          as one.
        </h1>
        <p className="mt-6 text-md md:text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
          <div className="w-9 h-9  rounded-full absolute left-0 md:-bottom-24 -bottom-10 ">
            <Image
              src={link}
              alt="Chart"
              className="absolute  h-full w-full "
              layout="fill"
              priority
              loading="eager"
            />
          </div>
        </p>

        <Grupr />
        {/* decor images */}

        <div className="w-9 h-9  rounded-full absolute left-0 -top-12 sm:top-16 ">
          <Image
            src={crossedFingers}
            alt="crossed fingers"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>
        <div className="md:w-9 md:h-9 h-6 w-6 rounded-full absolute right-0 top-24 ">
          <Image
            src={Chart}
            alt="Chart"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>
        {/* <div className="w-9 h-9  rounded-full absolute left-28 -bottom-20 ">
          <Image
            src={link}
            alt="link"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div> */}
        {/* <div className="w-9 h-9  rounded-full absolute right-0 -bottom-64 ">
          <Image
            src={VictoryHand}
            alt="Chart"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div> */}
        <div className="w-9 h-9  rounded-full absolute right-10 md:bottom-10 md:block hidden ">
          <Image
            src={links}
            alt="link"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>

        {/************ decor images ************/}
      </section>

      <section className="py-8  mt-28">
        {/* frame 1 */}
        <div className="w-full  flex flex-wrap my-20 py-10">
          <div className="w-full md:w-1/2 p-3  flex items-center flex-col justify-center">
            <div className="w-24 h-24 mb-5 text-center  rounded-full relative ">
              <Image
                src={groupLinks}
                alt="link"
                className="  h-full w-full "
                layout="fill"
                priority
                loading="eager"
              />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">
              One short link,
              <span className="text-orange-500">Infinite possibilities.</span>
            </h2>
            <p className="mt-5 font-light text-center lg:mb-0 mb-10">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5  relative min-h-[450px]">
            <Image
              src={frame4}
              alt="link"
              className="absolute  h-full w-full "
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* frame 2*/}

        <div className="w-full  flex lg:flex-row-reverse flex-wrap my-20 py-10">
          <div className="w-full md:w-1/2 p-3  flex items-center flex-col justify-center">
            <div className="text-4xl mb-5 flex gap-x-3">
              <FaThList className="text-purple-400 transform -rotate-[20deg]" />
              <BsFillGrid1X2Fill className="text-orange-500 transform rotate-[20deg]" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">
              Multiple preview layouts
            </h2>
            <p className="mt-5 font-light text-center lg:mb-0 mb-10">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5  relative min-h-[450px]">
            <Image
              src={frame1}
              alt="link"
              className="absolute  h-full w-full "
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* frame 3 */}
        <div className="w-full  flex flex-wrap my-20 py-10">
          <div className="w-full md:w-1/2 p-3  flex items-center flex-col justify-center">
            <div className="w-12 h-12 mb-5 text-center  rounded-full relative ">
              <Image
                src={Excel}
                alt="link"
                className="  h-full w-full "
                layout="fill"
                priority
                loading="eager"
              />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">
              Import CSV support
            </h2>
            <p className="mt-5 font-light text-center lg:mb-0 mb-10">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5  relative min-h-[450px]">
            <Image
              src={frame2}
              alt="link"
              className="absolute  h-full w-full "
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* frame 4 */}

        <div className="w-full lg:flex-row-reverse  flex flex-wrap my-20 py-10">
          <div className="w-full md:w-1/2 p-3  flex items-center flex-col justify-center">
            <p className="mb-5">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">
                https://grupr.nl/short
              </h2>
            </p>
            <h2 className="text-3xl font-bold text-purple-400">
              Simple and Short URL
            </h2>
            <p className="mt-5 font-light text-center lg:mb-0 mb-10">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5  relative min-h-[450px]">
            <Image
              src={frame3}
              alt="link"
              className="absolute  h-full w-full "
              layout="fill"
              objectFit="contain"
              priority
              loading="eager"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
