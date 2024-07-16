import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-[50vh] py-4">
      <section className="flex flex-col items-center justify-center ">
        <p className="lg:text-6xl text-4xl font-bold text-center">
          Find the Perfect Movie for Your Mood and Weather 🎥🌤️
        </p>
        <p className="text-center mt-4 tracking-tight">
          Our movie suggestion tool helps you discover the right film based on
          your current mood and the weather outside. 🤖
        </p>
        <Button className="bg-[#ece3d4] border border-black text-black hover:bg-[#ddccb1] mt-3">Get Started</Button>
      </section>
    </div>
  );
};

export default Home;
