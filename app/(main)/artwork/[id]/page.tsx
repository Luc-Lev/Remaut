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
import { Button } from "@/components/ui/button";
import { PageWrapper } from "../../_components/page-wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <PageWrapper>
      <div className="bg-black">
        <div
          className="lg:flex grid grid-cols-1 min-h-screen bg-black"
          id="artwork"
        >
          <div className="lg:w-2/3 flex justify-center">
            <Image
              src={artwork.imageUrl}
              alt="Artist"
              height={700}
              width={480}
              className="object-scale-down mx-auto pt-2 lg:py-1 px-2 lg:px-1"
            />
          </div>
          <div className="text-white text-center lg:w-1/3 flex items-center">
            <div className="mx-auto w-3/4">
              <div>
                <div>
                  <Link href="#">
                    <h5
                      className={cn(
                        "mt-1 lg:mt-4 mb-3 text-white text-3xl lg:text-4xl tracking-widest uppercase",
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
                  <Link href="#enquire">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-black text-lg mt-2 lg:mt-10"
                    >
                      Enquire About
                    </Button>
                  </Link>
                  <div className="mt-52 flex justify-around">
                    <Link href="/">
                      <Button variant="outline" className="bg-black text-lg">
                        <ChevronLeft size={24} strokeWidth={2} className="" /> Prev
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="bg-black text-lg">
                        Next
                        <ChevronRight size={24} strokeWidth={2} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 pb-10 bg-black" id="enquire">
          <EnquireForm />
        </div>
      </div>
    </PageWrapper>
  );
}
