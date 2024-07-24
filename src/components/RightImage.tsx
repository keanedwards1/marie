import React from "react";
import ComicButton from "./ComicButton";
import { useRouter } from "next/router";

const RightImage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full z-10 md:w-1/2">
      <div className="home-page-text-container home-page-text-container-1">
        <div className="home-page-box">
          <h1 className="text-3xl font-bold text-center font-serif z-10">
            The Realm of Unity <br></br>
            <p className="text-m">Author: V. M. Elyse</p>
          </h1>
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
              <strong>Humanity is currently faced with a stark choice — LOVE or FEAR. Choose!</strong> <br></br><br></br>
            
              Seeking respite in a collapsing world, Rose meditates on a beach
              in Costa Rica and arrives in an entirely{" "}
              <span className="font-magic text-lg">New World</span>. Remarkably unfazed
              by the oddity of her situation, she laughs, cries, and transforms
              as she journeys through a magical utopian wonderland.
              <br />
              <br />
              Diving deep within, Rose must heal ancient wounds of the heart and
              discover her unique gifts to fully thrive in the land of
              perfection.
              <br />
              <br />
              Her fantastical experience starkly contrasts the dystopian
              hellscape of old Earth, where humans confront the power of <em>choice </em>
              and embrace the infinite depths of human compassion.
              <br />
              <br />
              The Realm of Unity challenges everything you ever thought you knew
              about yourself and the world in which you live. The delightfully
              spine-tingling conclusion may <em>alter</em> the very fabric of
              your reality.
              <br />
              <br />
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
