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
              collections. Three of his paintings hang in Ostend&apos;s MuZee,
              Museum of Modern Art.
            </p>
            <br />
            <p>
              After Studying art at Academie Ostende, Belgium, he abandoned his
              constraints of the traditional teachings and evolved his own
              distinct style of informal art. Discovring the works of Tapies,
              Rothko and Pollock gave him the courage to continue. His first
              solo exhibition was in 1982. Selections in international
              competitions followed with show in Belgium, the Netherlands,
              France, Luxembourgh, German and the UK. He now lives and works in
              Vale de Amoreira, Portugal.
            </p>
          </div>
        </div>
        <div>
          Distinctions: 1982 Prize for painting, Harelbeke Belgium 1983 Hoppe
          Prize, Poperinge Belgium 1983 Work in the collection of
          Tuinbouwschool, Puurs, Belgium 1984 Gaver Prize, Waregem Belgium 1985
          Prize for painting, Aarschot Belgium 1986 Work in the national
          collection of Belgium 1986 Work in the office of the Minister for
          Internal Affairs, Belgium 1990 Work in the Museum of Fine Art, Ostend.
          1992 Ostend artists in Maastricht, the Netherlands 1992 Luxemburg City
          Art Centre Luxemburg 1995 Coleurs en Val Mosan, Huyl, Belgium 1996
          Work in the Flemish government collection. 1998 Essex Open, GB 1998
          Southwark Arts Association Open, London, GB 1998 Norwich Film &
          Multimedia Festival, GB 1999 Essex Open, GB 2005 International
          Assemblage Artist Exhibition, Berlin, Germany.
        </div>
        <div>
          publications: Book – Beeldend Oostende by Norbert Hostyn, curator
          Museum of Fine Art, Ostend 1993 Art Bulletin Magazine, Éire, Article
          by Frank Decerf – A Glimpse of a Great Flemish Artist: Roger Remaut,
          1994 Book – Lexicon van West-Vlaamse Beeldende Kunstenaars 1996 Book –
          40 Oostendse Kunstenaars, Norbert Hostyn, Lowyck drukkerij, 2008
          Magazine – 2000 Jaar Middenkust & Hinterland, Waar is de Tijd, Norbert
          Hostyn, Uitgeverij Waanders, 2007. Museum of Fine Art, Ostend –
          archive
        </div>
      </div>
    </PageWrapper>
  );
};

export default GalleryPage;
