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
            Your Book Name
          </h1>
          <p className="mt-4 text-lg text-center md:text-left">
            I&apos;ve been inspired by storytelling ever since...     
          </p>
          <p className="mt-4 text-lg text-center md:text-left">
            I wrote this book because...
          </p>
          <div className="flex items-center justify-center md:justify-start mt-8 space-x-4 gap-6">
            <ComicButton
              label="See Stories"
              onClick={() => router.push("/short-stories")}
            />
            <ComicButton
              label="Buy a Copy"
              onClick={() => router.push("/purchase")}
            />
          </div>
        </div>
        <RightImage />
      </div >
      <div className="mt-8">
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
