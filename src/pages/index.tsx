import Nav from "../components/Nav";
import React from "react";
import Footer from "../components/RespFooter";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import Head from "../components/Head"
import Image from "next/image";
import WisteriaRow from "../components/WisteriaRow";
import Butterfly from "../components/Butterfly";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Head />
      <Nav />
      
      {/* Common parent container */}
      <div className="relative w-full">
        <WisteriaRow />
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-6 z-10">
          <LeftImage/>
          <RightImage />
        </div>
        
        {/* Butterflies container */}
        <div className="butterflies-container w-full absolute inset-0 pointer-events-none z-5">
          <Butterfly />
        </div>
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
