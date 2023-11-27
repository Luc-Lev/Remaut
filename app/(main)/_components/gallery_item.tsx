"use client";
import Image from "next/image";
import img1 from "@/public/img/p7.jpg";
import { motion } from "framer-motion";
import { mainFont, titleFont } from "../_utils/font_utils";
import { imageVariants } from "../_utils/framer_utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryItemProps {
  title: string;
  imageUrl: string;
  dimensions: string;
  materials: string;
  year: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  imageUrl,
  dimensions,
  materials,
  year,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.25 }}
      variants={imageVariants}
      className="p-2"
    >
      {/*image section*/}
      <div className=" bg-white shadow-md border mx-auto">
        <div className="p-1">
          <Link href="#">
            <AspectRatio ratio={3 / 4}>
              <Image
                className="object-cover"
                src={imageUrl}
                loading="lazy"
                alt="t"
                fill
              />
            </AspectRatio>
          </Link>
        </div>
      </div>
      {/*painting details*/}
      <div className="">
        <div>
          <Link href="#">
            <h5
              className={cn(
                "mt-4 mb-3 text-white text-xl tracking-widest uppercase",
                titleFont.className
              )}
            >
              {title}
            </h5>
          </Link>
          <Separator />
          <p
            className={cn(
              " text-white text-sm break-all mt-2 mb-2",
              mainFont.className
            )}
          >
            Dimensions: {dimensions}
          </p>
          <Separator />
          <p
            className={cn(
              " text-white text-sm break-all mt-2 mb-2",
              mainFont.className
            )}
          >
            Materials: {materials}
          </p>
          <Separator />
          <p
            className={cn(
              " text-white text-sm break-all mt-2 mb-2",
              mainFont.className
            )}
          >
            Year: {year}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
