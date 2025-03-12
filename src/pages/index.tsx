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
          <div className="pr-16 pl-16 w-full pt-10 pb-2 top-amazon">
            <ComicButton
              label="Buy On Amazon"
              onClick={() => window.open("https://www.amazon.com/Realm-Unity-V-M-Elyse-ebook/dp/B0DMWG7SNB?crid=1J483U0EEK174&dib=eyJ2IjoiMSJ9._N3krs_EMrGfLMAR3JT9OZYxY0oajre1_KIyICB_js7MzzCGtRY-IRGxZl5lJF6XIWiOd8EDBpWEQXQSr-WbeXjWpxO_ID_Q93iuxwB8QXM7OKyu9UCcNiV9pVInhBzIq1tzDCtg7S3Ufnuvsy1PKUwwh9gHHxGHtn2-ucbpMLnIeiIezRoB5Iud3HVkQnRsDWO2Q4nEeIAq3trXHc4a8g.YI0G1teHbsvO6QnT_fIq7quQ2Fatd5s5L1fRm3aXYx0&dib_tag=se&keywords=the+realm+of+unity&qid=1731820914&sprefix=therealmofunity%2Caps%2C152&sr=8-1#aw-udpv3-customer-reviews_feature_div", "_blank")}
              className="home-comic-button"
            />
          </div>
          <RightImage className="w-full lg:w-2/3" />
          <LeftImage className="w-full lg:w-1/3" />
        </section>

        <div className="flex items-center relative justify-center z-10 pr-12 pl-12 -mt-12 -mb-18 md:mt-16 md:mb-0  lg:justify-center lg:flex-row flex-col lg:mt-0 w-full space-x-4 gap-6">
          <ComicButton
            label="Buy On BookBaby"
            onClick={() => window.open("https://store.bookbaby.com/book/the-realm-of-unity1", "_blank")}
            className="home-comic-button"
          />
          <ComicButton
            label="Buy On Amazon"
            onClick={() => window.open("https://www.amazon.com/Realm-Unity-V-M-Elyse-ebook/dp/B0DMWG7SNB?crid=1J483U0EEK174&dib=eyJ2IjoiMSJ9._N3krs_EMrGfLMAR3JT9OZYxY0oajre1_KIyICB_js7MzzCGtRY-IRGxZl5lJF6XIWiOd8EDBpWEQXQSr-WbeXjWpxO_ID_Q93iuxwB8QXM7OKyu9UCcNiV9pVInhBzIq1tzDCtg7S3Ufnuvsy1PKUwwh9gHHxGHtn2-ucbpMLnIeiIezRoB5Iud3HVkQnRsDWO2Q4nEeIAq3trXHc4a8g.YI0G1teHbsvO6QnT_fIq7quQ2Fatd5s5L1fRm3aXYx0&dib_tag=se&keywords=the+realm+of+unity&qid=1731820914&sprefix=therealmofunity%2Caps%2C152&sr=8-1#aw-udpv3-customer-reviews_feature_div", "_blank")}
            className="home-comic-button bottom-amazon"
          />
            <ComicButton
            label="⛰️ See Landscapes →"
            onClick={() => router.push("/landscape")}
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
