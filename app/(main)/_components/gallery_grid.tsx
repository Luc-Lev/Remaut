"use client"
import { GalleryItem } from "./gallery_item";
import { ArtWorkProps } from "@/types/artWorkProps";
import { motion } from "framer-motion";
import { featureFont } from "../_utils/font_utils";
import { fadeInFromLeft } from "../_utils/framer_utils";
import { cn } from "@/lib/utils";

interface GalleryProps {
  data: ArtWorkProps[];
}

export const GalleryGrid: React.FC<GalleryProps> = ({ data }) => {
  return (
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
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:p-2 xl:p-5 pb-10">
          {data.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
