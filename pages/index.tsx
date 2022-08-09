import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Chart from "../images/Chart.png";
import crossedFingers from "../images/Crossed-fingers.png";
import VictoryHand from "../images/Victory-hand.png";
import link from "../images/link.png";
import links from "../images/links.png";
import VulcanSalute from "../images/Vulcan-salute.png";
import Grupr from "../components/Grupr";
const Home: NextPage = () => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center max-w-5xl pt-24 mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative w-full ">
        <h1 className="text-5xl font-bold text-purple-400 text-center">
          Shorten <span className="text-orange-500">multiple links</span>, share
          as one.
        </h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto text-center relative text-zinc-600">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
          <div className="w-9 h-9  rounded-full absolute left-0 md:-bottom-24 -bottom-10 ">
            <Image
              src={VulcanSalute}
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
        <div className="w-9 h-9  rounded-full absolute left-28 -bottom-20 ">
          <Image
            src={link}
            alt="link"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>
        <div className="w-9 h-9  rounded-full absolute right-0 -bottom-64 ">
          <Image
            src={VictoryHand}
            alt="Chart"
            className="absolute  h-full w-full "
            layout="fill"
            priority
            loading="eager"
          />
        </div>
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
    </main>
  );
};

export default Home;
