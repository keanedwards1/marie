import React from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import TestimonialGrid from "@/components/TestimonialGrid";
import Footer from "@/components/RespFooter";
import ComicButton from "@/components/ComicButton";
import router, { useRouter } from "next/router";

const Offerings = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Head
        title="Luminoles | Characters"
        description='Explore the various characters featured in the book "The Realm of Unity".'
      />
      <Nav />
      <div>

        <TestimonialGrid />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
          <div className="lg:w-3/12 md:w-5/12 w-9/12">
            <ComicButton
              label="← Download Stories 📖"
              onClick={() => router.push("/short-stories")}
            />
          </div>
          <div className="lg:w-3/12 md:w-5/12 w-9/12">
            <ComicButton
              label="🏡 Go Home ↩"
              onClick={() => router.push("/")}
            />
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default Offerings;
