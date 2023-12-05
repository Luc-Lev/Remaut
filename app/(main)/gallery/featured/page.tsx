import { PageWrapper } from "../../_components/page-wrapper";
import { featureFont } from "../../_utils/font_utils";
import { cn } from "@/lib/utils";

const GalleryPage = () => {
  return (
    <PageWrapper>
      <div className="bg-gray-950">
        <h1
          className={cn(
            "text-white text-6xl pt-10 pb-6 pl-6",
            featureFont.className
          )}
        >
          Featured
        </h1>
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
