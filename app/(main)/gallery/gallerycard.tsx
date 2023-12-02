import Image from "next/image";
import p7 from "@/public/img/p7.jpg";
import Link from "next/link";

export const GalleryCard = () => {
  return (
    <div className="mb-10 mx-auto">
        <div className="">
            <Link href="#">
      <Image
        src={p7}
        alt="Artist"
        className="rounded-t-lg object-cover"
        height={300}
        width={400}
      />
      </Link>
      </div>
      <div className="flex flex-col bg-white w-full items-center rounded-b-lg p-2">
        <h1 className="text-xl font-semibold">Works on Paper</h1>
        <p className="">
          Abstract narratives on a paper canvas
        </p>

      </div>
    </div>
  );
};
