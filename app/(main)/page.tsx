"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { cn } from "@/lib/utils";
import remautImg from "@/public/img/remaut.jpg";
import { GalleryGrid } from "./_components/gallery_grid";
import { GalleryItem } from "./_components/gallery_item";
import { PageWrapper } from "./_components/page-wrapper";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { featureFont, mainFont } from "./_utils/font_utils";
import { mockData } from "./_utils/mock_data";

import {
  FadeInFromRight,
  fadeInFromBottom,
  fadeInFromLeft,
} from "./_utils/framer_utils";

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        {/*main*/}

        <main className="overflow-hidden">
          <main className="grid md:grid-cols-2 bg-black md:min-h-screen">
            {/*Left Side (Bottom Mobile*/}

            <motion.div
              variants={isMobile ? fadeInFromBottom : fadeInFromLeft}
              initial={"hidden"}
              animate={"visible"}
              className="bg-black p-6"
            >
              <Image
                src={remautImg}
                alt="Artist"
                className="mx-auto rounded-lg shadow-md object-cover object-right h-56 md:h-full"
                height={720}
                width={1280}
              />
            </motion.div>

            {/*Right Side (Top Mobile)*/}
            <motion.div
              variants={FadeInFromRight}
              initial="hidden"
              animate="visible"
              className="order-first md:order-last bg-black p-6"
            >
              <div>
                <motion.h1
                  variants={FadeInFromRight}
                  initial="hidden"
                  animate="visible"
                  className={cn(
                    "text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mt-6 md:mt-20 text-center md:text-start",
                    featureFont.className
                  )}
                >
                  Roger{" "}
                  <motion.span variants={FadeInFromRight}>Remaut.</motion.span>
                </motion.h1>
                <motion.h2
                  variants={FadeInFromRight}
                  initial="hidden"
                  animate="visible"
                  className={cn(
                    "text-white text-2xl mt-5 md:mt-10 xl:mt-20 tracking-widest text-center md:text-start uppercase",
                    mainFont.className
                  )}
                >
                  Abstra<span className="text-yellow-300">c</span>t A
                  <span className="text-red-500">r</span>tist
                </motion.h2>

                {/* Hidden on mobile, show above md */}
                <div className="hidden md:block">
                  <motion.p
                    variants={FadeInFromRight}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                      "text-white mt-10 max-w-md tracking-wide text-start",
                      mainFont.className
                    )}
                  >
                    My identity as an artist was crafted by breaking free from
                    conventional teachings, embracing a distinctive, informal
                    style, infused with the essence of modern art. My work
                    isn&apos;t created to please an audience; rather, I am the
                    audience, relishing in my own performance.
                  </motion.p>
                  <motion.div
                    variants={fadeInFromBottom}
                    initial="hidden"
                    animate="visible"
                    className="flex"
                  >
                    <Button
                      variant="outline"
                      className="mt-10 mx-0 font-semibold tracking-wide"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Hidden above mid content for mobile*/}
            <motion.div
              variants={fadeInFromBottom}
              initial="hidden"
              animate="visible"
              className="md:hidden px-6 pb-4"
            >
              <p
                className={cn(
                  "text-white max-w-md mx-auto tracking-wide text-center",
                  mainFont.className
                )}
              >
                My identity as an artist was crafted by breaking free from
                conventional teachings, embracing a distinctive, informal style,
                infused with the essence of modern art. My work isn&apos;t
                created to please an audience; rather, I am the audience,
                relishing in my own performance.
              </p>
              <div className="flex">
                <Button
                  variant="outline"
                  className="mt-5 mx-auto font-semibold tracking-wide"
                >
                  Discover More
                </Button>
              </div>
            </motion.div>
          </main>

          {/*end Main*/}

          {/*Gallery*/}

          <div className="bg-black pt-6">
            <motion.h1
              variants={fadeInFromLeft}
              initial="hidden"
              animate="visible"
              className={cn(
                "text-4xl sm:text-5xl xl:text-6xl text-white pt-4 text-center md:text-start md:ml-4 xl:ml-8",
                featureFont.className
              )}
            >
              Featured Work
            </motion.h1>

            <div className="mt-2">
              <GalleryGrid data={mockData}/>
            </div>
          </div>

          {/* end Gallery*/}
        </main>
      </PageWrapper>
    </>
  );
};

export default HomePage;
