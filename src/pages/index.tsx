// /src/pages/index.tsx

import Nav from "../components/Nav";
import React from "react";
import Footer from "../components/RespFooter";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import Head from "../components/Head";
import SubscribeForm from "@/components/SubscribeForm";
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";

/* import WisteriaRow from "../components/WisteriaRow";
 */ /* import Butterfly from "../components/Butterfly"; */
/* import Garden from "../components/Garden"; */

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col relative">
      <Head />

      <Nav />

      {/* Common parent container */}
      <div className="relative w-full">
        {/*         <WisteriaRow />
         */}

      <section className="w-full min-h-screen p-0 m-0 flex flex-col gap-1 xl:-mt-12 lg:flex-row justify-center items-center z-10">
          <RightImage className="w-full lg:w-2/3" />
          <LeftImage className="w-full lg:w-1/3" />

      </section>

      <div className="flex items-center relative justify-center z-10 pr-6 pl-6 lg:justify-center lg:flex-row flex-col mt-4 lg:mt-0 w-full space-x-4 gap-6">
            <ComicButton
              label="⛰️ See Landscapes →"
              onClick={() => router.push("/landscape")}
              className="home-comic-button"
            />
            <ComicButton
              label="Coming Soon"
              onClick={() => router.push("/coming-soon")}
              className="home-comic-button"
            />
          </div>

        {/* Butterflies container */}
        {/*         <div className="butterflies-container w-full absolute inset-0 pointer-events-none z-5">
          <Butterfly />
        </div> */}

        {/* Garden with flowers */}
        {/*       <Garden/> */}

        <div className="">
          <SubscribeForm />
        </div>
      </div>

      {/* Responsive Footer */}
      <Footer />
    </div>
  );
};

export default Home;

{
  /*             <ComicButton
              label="See Stories"
              onClick={() => router.push("/short-stories")}
            /> */
}

{
  /*         <div className="container">
        <h1 className="text">Shouvik Mitra</h1>
        <div className="wave wave-back"></div>
        <div className="wave wave-middle"></div>
        <div className="wave wave-front"></div>
        <a href="#how-bolo-works" className="fab"></a>
      </div> */
}
