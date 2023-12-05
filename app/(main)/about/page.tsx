import { PageWrapper } from "../_components/page-wrapper";
import { featureFont } from "../_utils/font_utils";
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
          About
        </h1>

            
        <div className="text-white pl-6 grid grid-cols-2">
            <div>
          <p>
            Belgian artist Rogier Remaut is the countries leading exponent of
            informal art. In a career spanning more than 40 years, he has
            achieved huge success in his native country with works sold to the
            Belgian nation and local governments and numerous private
            collections. Three of his paintings hang in Ostend&apos;s MuZee, Museum
            of Modern Art.
          </p>
          <br/>
          <p>
            After Studying art at Academie Ostende, Belgium, he abandoned his
            constraints of the traditional teachings and evolved his own
            distinct style of informal art. Discovring the works of Tapies,
            Rothko and Pollock gave him the courage to continue. His first solo
            exhibition was in 1982. Selections in international competitions
            followed with show in Belgium, the Netherlands, France, Luxembourgh,
            German and the UK. He now lives and works in Vale de Amoreira,
            Portugal.
          </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
