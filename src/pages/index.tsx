import Nav from "../components/Nav";
import React from "react";
import Footer from "../components/RespFooter";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import Head from "../components/Head"
import Image from "next/image";
import WisteriaRow from "../components/WisteriaRow";
import Butterfly from "../components/Butterfly";
import Garden from "../components/Garden";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Head />
      <Nav />
      
      {/* Common parent container */}
      <div className="relative w-full">

        <WisteriaRow />

        <section className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-6 z-10">
          <LeftImage/>
          <RightImage />
        </section>
        
        {/* Butterflies container */}
        <div className="butterflies-container w-full absolute inset-0 pointer-events-none z-5">
          <Butterfly />
        </div>

      </div>
      
      {/* Garden with flowers */}
      <Garden/>

      {/* Responsive Footer */}
      <Footer />

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
