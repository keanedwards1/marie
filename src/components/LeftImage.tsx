import React from "react";
import ComicButton from "../components/ComicButton";
import { useRouter } from "next/router";

const LeftImage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full z-10 md:w-1/2">
      <div className="home-page-text-container">
        <div className="home-page-box">
          <h1 className="text-4xl font-bold text-center z-10 md:text-left">
            The Realm of Unity{" "}
          </h1>
          <p className="mt-4 text-m text-center z-10 md:text-left font-serif">
            <strong>
              &quot;After a lifetime of chasing the slippery fish of peace while
              trying to navigate a sleeping world, I reveled in the rainstorm of
              the absence of my suffering.&quot;
            </strong>
            <br></br>
            <br></br>
            <br></br>
            <span className="text-lg z-10">
              Seeking respite in a collapsing world, Rose meditates on a beach
              and is transported to an <em>entirely NEW world.</em> She laughs,
              cries and transforms as she journeys through a magical utopian
              wonderland.
              <br></br>
              <br></br>Diving deep within, Rose discovers her unique gifts that
              are desperately needed in the land of perfection.
              <br></br>
              <br></br>
              Her fantastical experience starkly contrasts the dystopian
              hellscape of old Earth, where humans are confronted with the power
              of <em>choice </em>
              and embrace the infinite depths of human compassion.
              <br></br>
              <br></br>
              <br></br> The Realm of Unity challenges everything you ever
              thought you knew about yourself and the world in which you live.
              The delightfully spine-tingling conclusion may <em>alter</em> the
              very fabric of your reality.
              <br></br>
              <br></br>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center z-10 absolute md:justify-center mt-8 w-full space-x-4 gap-6">
          <ComicButton
            label="Coming Soon"
            onClick={() => router.push("/purchase")}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
