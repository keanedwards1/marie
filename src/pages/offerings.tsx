import React from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import TestimonialGrid from "@/components/TestimonialGrid";
import Footer from "@/components/RespFooter";

const Offerings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head
        title="Luminoles | Characters"
        description='Explore the various characters featured in the book "The Realm of Unity".'
      />
      <Nav />
      <div>

        <TestimonialGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Offerings;
