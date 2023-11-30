import { GalleryGrid } from "./_components/gallery_grid";
import { PageWrapper } from "./_components/page-wrapper";
import prisma from "@/lib/db/prisma";
import { Main } from "./_components/main";
import { ArtWorkProps } from "@/types/artWorkProps";

export const metadata = {
  title: "Remaut. - Home",
};

export default async function HomePage() {
  const artworks = await prisma.artwork.findMany({
    orderBy: { id: "asc" },
  });

  // Assuming each item in artworks is an ArtWorkProps object
  const data: ArtWorkProps[] = artworks.map((artwork) => ({
    artwork,
  }));

  return (
    <PageWrapper>
      <Main />
      <GalleryGrid data={data} />
    </PageWrapper>
  );
}
