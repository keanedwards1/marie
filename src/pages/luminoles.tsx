import Head from "../components/Head";
import Nav from "../components/Nav";
import CharacterCard from "../components/CharacterCard";
import ComicButton from "@/components/ComicButton";
import router, { useRouter } from "next/router";
import Footer from "../components/RespFooter";
import SubscribeForm from "@/components/SubscribeForm";

const characters = [
  {
    name: "Oriane",
    bio: "Healing Guide",
    image: "/images/1-mari-healing-guide.jpg",
  },
  {
    name: "Greta",
    bio: "Master Creative Builder",
    image: "/images/2-greta-master-creative-builder.jpg",
  },
  {
    name: "Alfred",
    bio: "Master Creative Builder",
    image: "/images/3-alfred-master-creative-builder.jpg",
  },
  {
    name: "Cheyenne",
    bio: "Head Builder",
    image: "/images/4-cheyenne-head-builder.jpeg",
  },
  {
    name: "Ned",
    bio: "Builder",
    image: "/images/5-ned-builder.jpeg",
  },
  {
    name: "Malika",
    bio: "Creative",
    image: "/images/6-malika-creative.jpeg",
  },
  {
    name: "Aspen",
    bio: "Culinary Creative",
    image: "/images/7-aspen-culinary-creative.jpeg",
  },
  { name: "Puma", bio: "", image: "/images/8-puma.jpeg" },
  {
    name: "Jax",
    bio: "Educator",
    image: "/images/9-jax-androgenous-xe-xem-pronouns-shapeshifter.jpg",
  },
  { 
    name: "Dara",
    bio: "", 
    image: "/images/10-dara.jpg" },
  { 
    name: "Akira", 
    bio: "", 
    image: "/images/10-akira.jpg" },
  {
    name: "Alaysia",
    bio: "Creative",
    bio2: "Nature Protector",
    image: "/images/11-alaysia-creative-nature-protector.jpeg",
  },
  {
    name: "Miriam",
    bio: "Healer",
    image: "/images/12-miriam-healer.jpeg",
  },
  {
    name: "Lina",
    bio: "Healer",
    bio2: "Nature Protector",
    image: "/images/13-mona-healer-nature-protector.jpeg",
  },
  {
    name: "Nora",
    bio: "Healer",
    bio2: "Floater",
    image: "/images/14-nora-healer-floater.jpeg",
  },
  {
    name: "Magna",
    bio: "Creative Performer",
    image: "/images/15-magna-creative-performer.jpeg",
  },
  {
    name: "Samita",
    bio: "Nature Protector",
    image: "/images/16-samita-nature-protector.jpeg",
  },
  {
    name: "Peretz",
    bio: "Creative Builder",
    bio2: "Nature Protector",
    image: "/images/17-peretz-createive-builder-nature-protector.jpeg",
  },
  {
    name: "Maanya",
    bio: "Eleventh Dimensional Pleiadian",
    bio2: "Healer",
    image:
      "/images/18-maanya-eleventh-dimensional-from-the-pleiadian-star-system.jpeg",
  },
  {
    name: "Drake",
    bio: "Sexual Healer",
    image: "/images/19-drake-sexual-healer.jpeg",
  },
  {
    name: "Viola",
    bio: "Sexual Healer",
    image: "/images/20-viola-sexual-healer.jpeg",
  },
  {
    name: "Hannah",
    bio: "Sexual Healer",
    image: "/images/21-hannah-sexual-healer.jpeg",
  },
  {
    name: "Yeshua",
    bio: "Healer",
    image: "/images/22-yeshua-healer.jpeg",
  },
  {
    name: "Veeda",
    bio: "Mother",
    bio2: "Nature Protector",
    image: "/images/23-veeda-mother-healer.jpeg",
  },
  { name: "Cedar", bio: "", image: "/images/24-cedar.jpeg" },
  { name: "Summit", bio: "", image: "/images/25-summit.jpeg" },
  {
    name: "Baz",
    bio: "Educator",
    bio2: "Creative",
    image: "/images/26-baz-educator-creative.jpeg",
  },
  {
    name: "Josiah",
    bio: "Educator",
    image: "/images/27-josiah-educator.jpeg",
  },
  {
    name: "Leaf ",
    image: "/images/28-leaf-non-binary.jpeg",
  },
  { name: "Ismar", bio: "", image: "/images/29-ismar.jpeg" },
  {
    name: "Shakk",
    bio: "Educator",
    bio2: "Builder",
    image: "/images/30-shakk-educator-builder.jpeg",
  },
  {
    name: "Ronan",
    bio: "Herbal Healer",
    image: "/images/31-ronan-herbal-healer.jpeg",
  },
  {
    name: "Azriel",
    bio: "Crystal Healel",
    image: "/images/32-azriel-crystal-healer.jpeg",
  },
  {
    name: "Aziza",
    bio: "Leader",
    image: "/images/33-aziza-leader.jpeg",
  },
  {
    name: "Imani",
    bio: "Leader",
    image: "/images/34-imani-leader.jpeg",
  },
  {
    name: "Sasha",
    bio: "Culinary Creative",
    image: "/images/35-sasha-culinary-creative.jpeg",
  },
  {
    name: "Waylan",
    bio: "Explorer",
    image: "/images/36-waylan-explorer.jpeg",
  },
  {
    name: "Hiroshi",
    bio: "Explorer",
    image: "/images/37-hiroshi-explorer.jpeg",
  },
  {
    name: "Bakta and Nebu",
    bio: "Pleiadians",
    bio2: "Energy Sector",
    image: "/images/37-bakta-and-nebu.jpg",
  },
  {
    name: "Nalu",
    bio: "Culinary Creative",
    image: "/images/38-nalu-culinary-creative.jpeg",
  },
  {
    name: "Chokyi",
    bio: "Creative Leader",
    image: "/images/39-chokyi-leader.jpeg",
  },
  {
    name: "Laanza",
    bio: "Eleventh Dimensional Pleiadian",
    bio2: "Healer",
    image: "/images/40-laanza-eleventh-dimensional-pleiadian.jpeg",
  },
];

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Head
        title="Luminoles | Characters"
        description='Explore the various characters featured in the book "The Realm of Unity".'
      />
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-serif text-center mb-8 text-gray-800">
          Luminoles of Unity
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>
      <div className="mt-16 mb-16 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="← See Landscapes ⛰️"
            onClick={() => router.push("/landscape")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12 z-10">
          <ComicButton
            label="📖 Download Short Stories → "
            onClick={() => router.push("/short-stories")}
          />
        </div>
      </div>

      <div className="">
        <SubscribeForm />
      </div>

      <Footer />
    </div>
  );
}