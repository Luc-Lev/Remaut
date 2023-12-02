import Image from "next/image";
import { mockData } from "@/app/(main)/_utils/mock_data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react";
import prisma from "@/lib/db/prisma";
import { mainFont } from "../../_utils/font_utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { titleFont } from "../../_utils/font_utils";
import { cn } from "@/lib/utils";
import { EnquireForm } from "../_components/enquire_form";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ArtworkPageProps {
  params: {
    id: string;
  };
}

const getArtwork = cache(async (id: string) => {
  const artwork = await prisma?.artwork.findUnique({ where: { id } });

  if (!artwork) notFound();
  return artwork;
});

export async function generateMetadata({
  params: { id },
}: ArtworkPageProps): Promise<Metadata> {
  const artwork = await getArtwork(id);

  return {
    title: artwork.title + " -  Remaut.",
    description: "Artwork by Remaut.",
    openGraph: {
      images: [{ url: artwork.imageUrl }],
    },
  };
}

export default async function ArtWorkPage({
  params: { id },
}: ArtworkPageProps) {
  const artwork = await getArtwork(id);
  return (
    <div className="lg:flex grid grid-cols-1 min-h-screen ">
      <div className="bg-black lg:w-2/3 flex justify-center">
          <Image
            src={artwork.imageUrl}
            alt="Artist"
            height={800}
            width={680}
            className="object-scale-down mx-auto p-2 h-full "
          />
      </div>
      <div className="bg-black text-white text-center lg:w-1/3 min-h-screen">
        <div className="mx-auto w-3/4 mt-10 lg:mt-20">
          <div className="">
            <div>
              <Link href="#">
                <h5
                  className={cn(
                    "mt-4 mb-3 text-white text-4xl tracking-widest uppercase",
                    titleFont.className
                  )}
                >
                  {artwork.title}
                </h5>
              </Link>
              <Separator className="w-3/4  mx-auto" />
              <p
                className={cn(
                  " text-white text-xl break-all mt-2 mb-2",
                  mainFont.className
                )}
              >
                Dimensions: {artwork.dimension}
              </p>
              <Separator className="w-3/4  mx-auto" />
              <p
                className={cn(
                  " text-white text-xl break-all mt-2 mb-2",
                  mainFont.className
                )}
              >
                Materials: {artwork.materials}
              </p>
              <Separator className="w-3/4 mx-auto" />
              <p
                className={cn(
                  " text-white text-xl break-all mt-2 mb-2",
                  mainFont.className
                )}
              >
                Year: {artwork.year}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
           <EnquireForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
