/* // CHANGED: RightImage.tsx to fetch + display 'rightImageBlurb' from your site_content table

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface RightImageProps {
  className?: string;
}

const RightImage: React.FC<RightImageProps> = ({ className }) => {
  const router = useRouter();

  // CHANGED: Store the blurb in state
  const [blurb, setBlurb] = useState<string>("");

  // CHANGED: Fetch on mount
  useEffect(() => {
    fetch("https://159.89.233.75.nip.io/api/site-content/rightImageBlurb")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch RightImage blurb");
        }
        return res.json();
      })
      .then((data) => {
        // 'data' should be { content: "<div>...</div>" }
        setBlurb(data.content || "");
      })
      .catch((err) => {
        console.error("Error fetching RightImage content:", err);
      });
  }, []);

  return (
    <div className={`w-full z-10 pl-6 pr-4 lg:w-1/2 order-2 lg:order-1 ${className}`}>
      <div className="home-page-text-container home-page-text-container-1">
        <div className="home-page-box">
          <div className="mt-4 text-m text-center z-10 lg:text-left font-serif">
            <div className="text-sm z-10">
              {/* CHANGED: Render the HTML directly from the DB using dangerouslySetInnerHTML 
              <div dangerouslySetInnerHTML={{ __html: blurb }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImage; */

import React from "react";
import { useRouter } from "next/router";

interface RightImageProps {
  className?: string;
}

const RightImage: React.FC<RightImageProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`w-full z-10 pl-6 pr-4 lg:w-1/2 order-2 lg:order-1 ${className}`}
    >
      <div className="home-page-text-container home-page-text-container-1">
        <div className="home-page-box">
          <div className="mt-8 text-m text-center z-10 lg:text-left font-serif">
            <div className="text-sm z-10">
              <br />

              <div className="text-center blurb-text">
                <div
                  className="text-white p-6 rounded-3xl"
                  style={{
                    background: "radial-gradient(circle at center, #7c84d9, #27409b)",

                  }}
                >
                  {" "}
                  <p>
                    <span className="text-2xl md:text-3xl font-light">
                      Is Utopia Real?
                    </span>
                  </p>
                  <br />
                  <span className="font-gentium text-sm sm:text-md lg:text-xl leading-relaxed">
                    Can humans come together and live in peace and harmony? What
                    might that look and feel like? If it is possible, how might
                    we get there? This book explores an alternate reality, where
                    humans live harmoniously with nature and each other. You are
                    invited to take a whimsical journey through an enchanting
                    utopian realm and decide for yourself what is possible.
                  </span>
                </div>
                <br />
                <br />
                <span className="">The realm of Unity</span> came into being
                roughly two-hundred years ago. With the help of
                extraterrestrials, a small band of humans with a burning desire
                for peace and oneness brought into form the Earth-like realm.
                They then proceeded to reach out to all the inhabitants of old
                Earth, seeking those who were ready, and assisted them with
                their ascension. As an increasing amount of light pours onto the
                Earth, so too grows the darkness and thus,
                those-that-seek-to-control become ever more powerful and
                diabolical in their destruction of the planet.
                <br />
                <br />
                <div className="blurb-text text-center text-dark-purple-hover">
                  ✳︎ ✳︎ ✳︎
                  <br />
                  <br />
                  On the crumbling dystopia of old Earth, a powerful meditation
                  transports Rose to the magical Realm of Unity, a place
                  inhabited by colorful and quirky Luminoles. As the secrets of
                  Unity unfold, Rose must confront the wounds of her heart to
                  unlock the powers hidden within. Can she discover her true
                  calling and find the key to saving humanity before it&apos;s
                  too late?
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImage;

/*               <div className="text-sm text-center leading-7 text-dark-purple-hover">
                <span className="italic">
                  Question the nature of reality
                </span>
                <br />
                Unravel the mysteries of life
                <br />
                <span className="italic">
                  Reveal the infinite depths of human compassion
                </span>
              </div>

              <br />

              <div className="text-lg text-center font-bold text-dark-purple-hover">
                Take a Transformational Journey from Fear into Love
                <br />
              </div>  */

{
  /*      <div className="text-4xl text-center font-bold stretched-text text-dark-purple-hover">
                A Vision for Humanity
              </div> */
}

/*    Starting with technologies gifted to them by the extraterrestrials,
                they built the first crystal grid in the realm and harnessed the power
                of free energy. With unlimited energy at their fingertips, the
                firstcomers built a fantastical polycenter. They then proceeded to
                reach out to all the inhabitants of old Earth, seeking those who were
                ready to live in oneness, and assisted them with their ascension.
                <br />
                <br />

                The entity called Earth is in a powerful ascension process and an
                increasing amount of light is pouring onto the planet, slowly
                awakening the slumbering masses. As more people wake up to their
                divinity, they stream into the utopian realm. As Unity grows, so too
                does the power and force of the light that is assisting Earth in her
                transition. Old Earth, being a planet of duality, is required to
                always have an equal amount of darkness; thus, under the laws of the
                universe, those-that-seek-to-control become ever more powerful and
                diabolical in their destruction of the planet.
                <br />
                <br />

                As the opposing forces intensify, one by one, beings awaken and
                collapse duality, creating the possibility of choice. Upon awakening,
                they are no longer bound to old Earth and are free to stay and assist
                humanity or leave for a more pleasant realm.
                <br />
                <br /> 
   */
