import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-[50vh] py-4 flex flex-col justify-center items-center">
      <section className="flex flex-col items-center justify-center ">
        <p className="lg:text-6xl text-4xl font-bold text-center">
          Find the Perfect Movie for Your Mood and Weather 🎥🌤️
        </p>
        <p className="text-center mt-4 tracking-tight">
          Our movie suggestion tool helps you discover the right film based on
          your current mood and the weather outside. 🤖
        </p>
        <div
          className={cn(
            "group rounded-lg mt-2 border border-black bg-[#ece3d4] text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-[#decaaa] dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Get Started</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </section>
    </div>
  );
};

export default Home;
