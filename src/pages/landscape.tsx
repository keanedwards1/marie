import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import Cube from "../components/CubeComponent";
import Image from "next/image";
import { useState } from "react";
import router, { useRouter } from "next/router";

interface Location {
  id: number;
  src: string;
  alt: string;
}

const locations: Location[] = [
  {
    id: 1,
    src: "/images/azure-village.jpg",
    alt: "Azure Village",
  },
  {
    id: 2,
    src: "/images/purple-starfruit.jpg",
    alt: "Purple Starfruit",
  },
  {
    id: 3,
    src: "/images/serene-lake.jpg",
    alt: "Serene Lake",
  },
  {
    id: 4,
    src: "/images/dragon.jpg",
    alt: "Welcome Party",
  },
  {
    id: 5,
    src: "/images/dancing-crowd.jpg",
    alt: "The Heart of Azure Village",
  },
  {
    id: 6,
    src: "/images/green-haired-girl.jpg",
    alt: "Shapeshifting",
  },
  {
    id: 7,
    src: "/images/the-whisper.jpg",
    alt: "The Whisper",
  },
  {
    id: 8,
    src: "/images/central-hub-of-elysia.jpg",
    alt: "Central Hub of Elysia",
  },
  {
    id: 9,
    src: "/images/central-hub.jpg",
    alt: "Central Hub",
  },
  {
    id: 10,
    src: "/images/harmony-healing-center-greenhouse.jpg",
    alt: "Harmony Healing Center Greenhouse",
  },
  {
    id: 11,
    src: "/images/harmony-crystal-room.jpg",
    alt: "Harmony Crystal Room",
  },
  {
    id: 12,
    src: "/images/radiant-dome.jpg",
    alt: "Radiant Dome",
  },
  {
    id: 13,
    src: "/images/radiant-dome-spider-girl.jpg",
    alt: "Nature Protector",
  },
  {
    id: 14,
    src: "/images/the-zephyr.jpg",
    alt: "The Zephyr",
  },
  {
    id: 15,
    src: "/images/makai-ola-island.jpg",
    alt: "Makai Ola Island",
  },
  {
    id: 16,
    src: "/images/makai-ola-island-2.jpg",
    alt: "Makai Ola Island",
  },
  {
    id: 17,
    src: "/images/cote-d’-azur-ville.jpg",
    alt: "Cote d’ Azur Ville",
  },
  {
    id: 18,
    src: "/images/cote-d'-azur-ville.jpg",
    alt: "Cote d’ Azur Ville",
  },
  { 
    id: 19,
    src: "/images/shumbala-whisper.jpg",
    alt: "Shumba-La",
  },
  {
    id: 20,
    src: "/images/shumbala.jpg",
    alt: "Shumba-La",
  }

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
        <div className="home-page-text-container mr-10 ml-10">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-10">
          {locations.map((location) => (
            <div
              key={location.id}
              className="location-card"
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="location-image-container relative">
                <Image
                  src={location.src}
                  alt={location.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="location-image"
                />
              </div>
              <div
                className={`location-info ${
                  hoveredId === location.id ? "hovered" : ""
                }`}
              >
                <h3 className="location-title">{location.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-screenw-full h-96 -mb-10 mt-10 pt-10 flex items-center justify-center">
          <Cube />
        </div>

        <div className="mt-40 -mb-20 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
          <div className="lg:w-3/12 md:w-5/12 w-9/12">
            <ComicButton
              label="← Back to Home 🏡"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="lg:w-3/12 md:w-5/12 w-9/12">
            <ComicButton
              label="🧚‍♂️ View Luminoles → "
              onClick={() => router.push("/luminoles")}
            />
          </div>
        </div>
      </main>
      <div className="bg-grey">
        <Footer />
      </div>
    </div>
  );
}
