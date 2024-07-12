import Nav from "../components/Nav";
import React from "react";
import { useRouter } from "next/router";
import Footer from "../components/RespFooter";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import Wisteria from "../components/WisteriaRow";
import Image from "next/image";
import WisteriaRow from "../components/WisteriaRow";


const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col relative">
      <Nav />
      <WisteriaRow />
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-6">
        <LeftImage />
        <RightImage />
      </div>
      <div className="butterflies-container absolute z-0 inset-0 pointer-events-none">
        <Image
          src="/images/butterfly.png"
          alt="Butterfly"
          className="butterfly"
          width={40}
          height={33}
        />
        <Image
          src="/images/butterfly.png"
          alt="Butterfly"
          className="butterfly"
          width={40}
          height={33}
        />
      </div>
      <div className="lavender-container absolute bottom-0 z-0 w-full flex justify-center">
        <Image src="/public/lavender.png" alt="Lavender" className="lavender" width={30} height={40} />
      </div>
      <div className="rays-container z-0 absolute">
        <Image
          src="/images/ray-of-light.jpg"
          alt="Ray of Light"
          className="ray"
          width={40}
          height={30}
        />
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

{
  /*             <ComicButton
              label="See Stories"
              onClick={() => router.push("/short-stories")}
            /> */
}

{
  /*         <div className="container">
        <h1 className="text">Shouvik Mitra</h1>
        <div className="wave wave-back"></div>
        <div className="wave wave-middle"></div>
        <div className="wave wave-front"></div>
        <a href="#how-bolo-works" className="fab"></a>
      </div> */
}
