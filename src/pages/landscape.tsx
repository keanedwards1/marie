import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import Cube from "../components/CubeComponent";
import Image from "next/image";
import { useState } from "react";
import router, { useRouter } from "next/router";
import SubscribeForm from "@/components/SubscribeForm";

interface Location {
  id: number;
  src: string;
  alt: string;
  description: string;
  alt2?: string;
}

const locations: Location[] = [
  {
    id: 1,
    src: "/images/azure-village.jpg",
    alt: "Azure Village",
    description:
      "The beautiful homes of the outland village of Elysia are perfectly designed to meet the needs of the Luminoles. Crescent Healing Center, nestled to one side, is a sanctuary for rejuvenation.",
  },
  {
    id: 2,
    src: "/images/purple-starfruit.jpg",
    alt: "Purple Starfruit",
    description: "Creamy as custard and succulent as a mango—Luminoles utilize the power of thought and desire to generate new varieties of trees, flowers and fruits."
  },
  /*   {
    id: 3,
    src: "/images/serene-lake.jpg",
    alt: "Serene Lake",
  }, */
  /*   {
    id: 4,
    src: "/images/dragon.jpg",
    alt: "Welcome Party",
  }, */
  {
    id: 3,
    src: "/images/dancing-crowd.jpg",
    alt: "The Heart of Azure Village",
    description: "The heart of the village is an open space for gathering, sharing and grand celebrations."
  },
  {
    id: 4,
    src: "/images/green-haired-girl.jpg",
    alt: "Shapeshifting",
    description: "Hidden powers arise in Unity—telepathy, shapeshifting, healing, telekinesis, floating, teleportation and instant manifestation."
  },
  /*   {
    id: 7,
    src: "/images/the-whisper.jpg",
    alt: "The Whisper",
  }, */
  {
    id: 5,
    src: "/images/central-hub-of-elysia.jpg",
    alt: "Central Hub of Elysia",
    description: "A stunning polycenter where spiraling towers, fountains, bridges, and archways blend seamlessly with nature."
  },
  /*   {
    id: 9,
    src: "/images/central-hub.jpg",
    alt: "Central Hub",
  }, */
  {
    id: 6,
    src: "/images/the-zephyr.jpg",
    alt: "The Zephyr",
    description: "At the heart of the polycenters, a towering crystal pyramid connects to the grid, providing free, limitless energy."
  },
  {
    id: 7,
    src: "/images/radiant-dome-spider-girl.jpg",
    alt: "Nature Protector",
    description: "There are no jobs in Unity, only contributions—Healer, Creative, Nature Protector, Builder, Educator, Leader, and Explorer. The desire to share unique gifts emerges effortlessly."
  },
  {
    id: 8,
    src: "/images/harmony-healing-center-greenhouse.jpg",
    alt: "Harmony Healing Center",
    alt2: "Harmony",
    description: "In the Central Hub of Elysia, a vast Healing Center features a medicinal herb greenhouse, a crystal chamber, and numerous healing beds called Cocoons, all providing deep restoration."
  },
  {
    id: 9,
    src: "/images/harmony-crystal-room.jpg",
    alt: "Harmony Crystal Room",
    description: "Healers use crystals, herbal medicine, sound, light, and vibration to aid new Luminoles."
  },
  {
    id: 10,
    src: "/images/radiant-dome.jpg",
    alt: "Radiant Domes",
    description: "All manufacturing is done in harmony with nature. Akashi, the AI system of Unity, disperses goods to Luminoles, as needed, from the Central Distribution Center."
  },
  {
    id: 11,
    src: "/images/makai-ola-island.jpg",
    alt: "Makai Ola Island",
    description: "Luminoles design new polycenters, each unique and perfectly harmonized with the inhabitants."
  },
  /*   {
    id: 16,
    src: "/images/makai-ola-island-2.jpg",
    alt: "Makai Ola Island",
  }, */
  /*   {
    id: 17,
    src: "/images/cote-d’-azur-ville.jpg",
    alt: "Cote d’ Azur Ville",
  },
  {
    id: 18,
    src: "/images/cote-d'-azur-ville.jpg",
    alt: "Cote d’ Azur Ville",
  }, */
  {
    id: 12,
    src: "/images/shumbala-whisper.jpg",
    alt: "Shumba-La",
    description: "Traveling throughout Unity is easy and seamless with The Whisper, the highly efficient transportation system of Unity."
  },
  /*   {
    id: 20,
    src: "/images/shumbala.jpg",
    alt: "Shumba-La",
  } */
];

export default function Landscape() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-violet-50">
      <div className="bg-hero-image min-h-screen">
        <Head
          title="Landscape | Story Locations"
          description="Explore the various locations featured in our stories."
        />
        <Nav />
        <div className="mt-50vh">
          <div className="landscape-header-card">
            <h1 className="location-header-text text-5xl font-bold mb-16 text-center text-white font-serif">
              Welcome To The Realm of Unity Landscape
            </h1>
            <div className="flex justify-center">
              <div className="w-7/12 flex justify-center">
                <button
                  className="comic-button comic-button-landscape-top"
                  onClick={() => {
                    const element = document.getElementById("location");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        className="flex-grow container mx-auto px-4 py-16 max-w-7xl"
        id="location"
      >
        {/*  **keep for now cause it has some nice formatting that might be helpful (delete before finalized)**
        <div className="home-page-text-container mr-4 ml-4 sm:mr-10 sml:ml-10">
          <div className="flex justify-center home-page-box w-full">
            <div className="w-1/2">
              <h2 className="text-2xl mb-8 text-center font-serif">
                Akashi (AI of Unity) generated these images on your behalf to
                build excitement and enthusiasm for your visit to Unity.
                <br></br>
              </h2>
              <h2 className="text-2xl font-bold mb-8 text-center font-serif">
                We very much hope you choose to stay!
              </h2>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 mb-10 mr-4 ml-4 sm:mr-10 sml:ml-10">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="location-image-container relative">
                    <Image
                      src={location.src}
                      alt={location.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="location-image"
                    />
                  </div>
                  <div className="location-info">
                    <h3 className="location-title">{location.alt}</h3>
                  </div>
                </div>
                <div className="card-back">
                  {/* Customize the back content as needed */}
                  <h3 className="location-title back-title">{location.alt2 ? location.alt2 : location.alt}</h3>
                  <p className="location-description">
                    {/* Add a brief description or any other content */}
                    {location.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-screenw-full h-96 -mb-10 mt-10 pt-10 flex items-center justify-center">
          <Cube />
        </div>

        <div className="mt-36 -mb-20 flex flex-col lg:flex-row w-full z-10 gap-4 items-center justify-center">
          <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
            <ComicButton
              label="← Back to Home 🏡"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
            <ComicButton
              label="🧚‍♂️ View Luminoles → "
              onClick={() => router.push("/luminoles")}
            />
          </div>
        </div>
      </main>

      <div className="">
        <SubscribeForm />
      </div>

      <div className="bg-grey">
        <Footer />
      </div>
    </div>
  );
}
