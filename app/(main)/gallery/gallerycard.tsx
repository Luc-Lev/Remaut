import Image from "next/image";
import p7 from "@/public/img/p7.jpg";
import Link from "next/link";

export interface GalleryCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  url: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  subtitle,
  imageUrl,
  url,
}) => {
  return (
    <div className="mb-10 mx-auto">
      <div className="">
        <Link href={url}>
          <Image
            src={imageUrl}
            alt="Artist"
            className="rounded-t-lg object-cover h-96"
            height={300}
            width={400}
          />
        </Link>
      </div>
      <Link href={url}>
        <div className="flex flex-col bg-white w-full items-center rounded-b-lg p-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};
