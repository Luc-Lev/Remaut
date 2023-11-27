import { GalleryItem } from "./gallery_item";


interface GalleryItemProps {
  title: string;
  imageUrl: string;
  dimensions: string;
  materials: string;
  year: string;
}

interface GalleryProps {
  data: GalleryItemProps[];
}

export const GalleryGrid: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 md:p-2 xl:p-5">
      {data.map((item, index) => (
        <GalleryItem key={index} {...item}/>
      ))}
    </div>
  );
};