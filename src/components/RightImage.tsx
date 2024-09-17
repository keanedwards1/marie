/* Should be called RightElement */

import React from "react";
import ComicButton from "./ComicButton";
import { useRouter } from "next/router";

const RightImage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full z-10 md:w-1/2">
      <div className="home-page-text-container home-page-text-container-1">
        <div className="home-page-box">
{/*           <h1 className="text-3xl font-bold text-center font-serif z-10">
            The Realm of Unity <br></br>
            <p className="text-m">Author: V. M. Elyse</p>
          </h1> */}
          <p className="mt-4 text-m text-center z-10 md:text-left font-serif">
            {/*             <strong>
              Blurb:<br></br> &quot;After a lifetime of chasing the slippery fish of peace while
              trying to navigate a sleeping world, I reveled in the rainstorm of
              the absence of my suffering.&quot;
            </strong>
            <br />
            <br />
            <br /> */}
            <span className="text-sm z-10">
              <div className="text-2xl text-center font-bold stretched-text">The Realm of Unity is calling you home</div> 
              <br />
            
              <div className="text-center text-base">
                On the crumbling dystopia of old Earth, a powerful meditation transports
                Rose to a magical utopian wonderland. Travel with Rose through the enchanting
                <span className="italic text-lg"> Realm of Unity</span>, receive deep wisdom from colorful and quirky Luminoles, 
                and discover the true source of power.
              </div>
              <br />
              <br />
              <div className="text-lg text-center">
                Question the nature of reality
                <br />
                Unravel the mysteries of life
                <br />
                Reveal the infinite depths of human compassion
              </div>
              <br />
              <br />
              <div className="text-lg text-center font-bold">
                Take a transformational journey from Fear into Love
                <br />
                A Vision for Humanity
              </div>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center z-10 absolute md:justify-center lg:flex-row flex-col mt-8 w-full space-x-4 gap-6">
          <ComicButton
            label="Coming Soon"
            onClick={() => router.push("/coming-soon")}
          />
          <ComicButton
            label="⛰️ See Landscapes →"
            onClick={() => router.push("/landscape")}
          />
        </div>
      </div>
    </div>
  );
};

export default RightImage;
