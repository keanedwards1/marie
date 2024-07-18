import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/RespFooter";
import ComicButton from "@/components/ComicButton";
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
    src: "/images/dome-village.jpg",
    alt: "Dome Village",
  },
  {
    id: 2,
    src: "/images/serene-lake.jpg",
    alt: "Serene Lake",
  },
  {
    id: 3,
    src: "/images/two-woman-with-a-hovercraft.jpg",
    alt: "Two Woman With A Hovercraft",
  },
  {
    id: 4,
    src: "/images/Magical-Utopian-City.jpg",
    alt: "Magical Utopian City",
  },
  {
    id: 5,
    src: "/images/crystal-fountain.jpg",
    alt: "Kids Playing In Found With A Crystal Pyramid",
  },
  {
    id: 6,
    src: "/images/greenhouse.jpg",
    alt: "Greenhouse",
  },
  {
    id: 7,
    src: "/images/crystal-room.jpg",
    alt: "Crystal Room",
  },
  {
    id: 8,
    src: "/images/woman-standing-in-room-with-bamboo-trees.jpg",
    alt: "Woman Standing In Dome With Bamboo Trees",
  },
  {
    id: 9,
    src: "/images/spider-girl.jpg",
    alt: "Spider Girl",
  },
  {
    id: 10,
    src: "/images/crystal-pyramid.jpg",
    alt: "Crystal Pyramid",
  },
  {
    id: 11,
    src: "/images/crystal-tropical-pyramid-with-volcano.jpg",
    alt: "Tropical Crystal Pyramid With Volcano",
  },
  {
    id: 12,
    src: "/images/crystal-pyramid-2.jpg",
    alt: "Crystal Pyramid In The Louvre In Paris",
  },
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
          <h1 className="location-header-text text-5xl font-bold mb-16 text-center text-white font-serif">
            The Realm of Unity Landscape
          </h1>
          <div className="flex justify-center">
            <div className="w-7/12 flex justify-center">
              <ComicButton
                label="Explore"
                onClick={() => router.push("/landscape/#location")}
              />
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow container mx-auto px-4 py-16 max-w-7xl" id="location">
        <div className="home-page-text-container mr-10 ml-10">
          <div className="flex justify-center home-page-box w-full">
            <div className="w-1/2">
              <h2 className="text-2xl mb-8 text-center font-serif">
                Akashi (AI) graciously generated these images on your behalf to build
                excitement and enthusiasm for your visit to Unity.
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
      </main>
      <div className="bg-grey">
        <Footer />
      </div>
    </div>
  );
}
