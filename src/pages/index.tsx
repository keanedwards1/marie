import Nav from "../components/Nav";
import React from "react";
import { useRouter } from "next/router";
import ComicButton from "../components/ComicButton";
import Footer from "../components/RespFooter";
import RightImage from "../components/HomeRightCrystal";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-left">
            The Realm of Unity{" "}
          </h1>
          <p className="mt-4 text-lg text-center md:text-left">
            After a lifetime of chasing the slippery fish of peace while trying
            to navigate a sleeping world, I reveled in the rainstorm of the
            absence of my suffering.” Seeking respite in a collapsing world,
            Rose meditates on a beach and is transported to an entirely NEW
            world. She laughs, cries and transforms as she journeys through a
            magical utopian wonderland. Diving deep within, Rose discovers her
            unique gifts that are desperately needed in the land of perfection.
            Her fantastical experience starkly contrasts the dystopian hellscape
            of old Earth, where humans are confronted with the power of choice
            and embrace the infinite depths of human compassion. The realm of
            Unity challenges everything you ever thought you knew about yourself
            and the world in which you live. The delightfully spine-tingling
            conclusion may alter the very fabric of your reality.
          </p>
          <p className="mt-4 text-lg text-center md:text-left"></p>
          <div className="flex items-center justify-center md:justify-start mt-8 space-x-4 gap-6">
            <ComicButton
              label="Coming Soon"
              onClick={() => router.push("/purchase")}
            />
            {/*             <ComicButton
              label="See Stories"
              onClick={() => router.push("/short-stories")}
            /> */}
          </div>
        </div>
        {/*         <RightImage /> */}
        {/*         <div className="container">
        <h1 className="text">Shouvik Mitra</h1>
        <div className="wave wave-back"></div>
        <div className="wave wave-middle"></div>
        <div className="wave wave-front"></div>
        <a href="#how-bolo-works" className="fab"></a>
      </div> */}
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
