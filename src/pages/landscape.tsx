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
  description: string;
}

const locations: Location[] = [
  {
    id: 1,
    src: "/images/landscape-1.jpg",
    alt: "Location 1",
    description: "Description of Location 1",
  },
  {
    id: 2,
    src: "/images/landscape-2.jpg",
    alt: "Location 2",
    description: "Description of Location 2",
  },
  {
    id: 3,
    src: "/images/landscape-3.jpg",
    alt: "Location 3",
    description: "Description of Location 3",
  },
  {
    id: 4,
    src: "/images/landscape-4.jpg",
    alt: "Location 4",
    description: "Description of Location 4",
  },
  {
    id: 5,
    src: "/images/landscape-5.jpg",
    alt: "Location 5",
    description: "Description of Location 5",
  },
  {
    id: 6,
    src: "/images/landscape-6.jpg",
    alt: "Location 6",
    description: "Description of Location 6",
  },
  {
    id: 7,
    src: "/images/landscape-7.jpg",
    alt: "Location 7",
    description: "Description of Location 7",
  },
  {
    id: 8,
    src: "/images/landscape-8.jpg",
    alt: "Location 8",
    description: "Description of Location 8",
  },
  {
    id: 9,
    src: "/images/landscape-9.jpg",
    alt: "Location 9",
    description: "Description of Location 9",
  },
  {
    id: 10,
    src: "/images/landscape-10.jpg",
    alt: "Location 10",
    description: "Description of Location 10",
  },
  {
    id: 11,
    src: "/images/landscape-11.jpg",
    alt: "Location 11",
    description: "Description of Location 11",
  },
  {
    id: 12,
    src: "/images/landscape-12.jpg",
    alt: "Location 12",
    description: "Description of Location 12",
  },
];

export default function Landscape() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
        <div className="home-page-text-container">
          <div className="flex justify-center home-page-box w-full">
            <div className="w-1/2">
              <h2 className="text-2xl mb-8 text-center font-serif">
                Akashi graciously generated these images on your behalf to build
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
              <div className="location-image-container">
                <Image
                  src={location.src}
                  alt={location.alt}
                  layout="fill"
                  objectFit="cover"
                  className="location-image"
                />
              </div>
              <div
                className={`location-info ${
                  hoveredId === location.id ? "hovered" : ""
                }`}
              >
                <h3 className="location-title">{location.alt}</h3>
                <p className="location-description">{location.description}</p>
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
