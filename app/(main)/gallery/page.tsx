import Image from "next/image";
import img from "@/public/img/p7.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryCard } from "./gallerycard";
import { PageWrapper } from "../_components/page-wrapper";

const GalleryPage = () => {
  return (
    <PageWrapper>
      <div className="bg-black">
        <div className="bg-yellow-300">Gallery</div>

        <div className="">
          <div className="mt-20 mb-20 grid md:grid-cols-2 lg:grid-cols-3">
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
