import Image from "next/image";
import img from "@/public/img/p7.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryCard } from "./gallerycard";
import { PageWrapper } from "../_components/page-wrapper";
import { cn } from "@/lib/utils";
import { featureFont } from "../_utils/font_utils";
import { galleryData } from "../_utils/gallery_data";

const GalleryPage = () => {
  return (
    <PageWrapper>
      <div className="bg-gray-950">
        <h1
          className={cn(
            "text-white text-center text-6xl pt-10 pb-6",
            featureFont.className
          )}
        >
          Gallery
        </h1>

        <div className="">
          <div className="mt-20 mb-20 grid md:grid-cols-2 lg:grid-cols-3 ">
            {galleryData.map((item, index) => (
              <GalleryCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
