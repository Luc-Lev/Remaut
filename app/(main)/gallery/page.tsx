import Image from "next/image";
import img  from "@/public/img/p7.jpg"
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GalleryPage = () => {
    return (
        <>
        <div>Gallery</div>
        <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-500 px-2 py-2">
                <AspectRatio ratio={4/4}>
                <Image
                src={img}
                alt="Artist"
                className="mx-auto rounded-lg shadow-md object-cover object-right h-56 md:h-full"
                height={400}
                width={300}
              />
              </AspectRatio>
              <div className="bg-white p-2 rounded-sm">
              <p className=" ">Something</p>
              <p className="text-sm">some smaller text</p>
              </div>              </div>

              <div className="bg-slate-500 px-2 py-2">
                <AspectRatio ratio={4/4}>
                <Image
                src={img}
                alt="Artist"
                className="mx-auto rounded-t-lg object-cover object-right h-56 md:h-full"
                fill
              />
              </AspectRatio>
              <div className="bg-white p-2 rounded-sm">
              <p className=" ">Something</p>
              <p className="text-sm">some smaller text</p>
              </div>
              </div>
            
              <div className="bg-slate-500 px-2 py-2">
                <AspectRatio ratio={4/4}>
                <Image
                src={img}
                alt="Artist"
                className="mx-auto rounded-lg shadow-md object-cover object-right h-56 md:h-full"
                height={400}
                width={200}
              />
              </AspectRatio>
              <div className="bg-white p-2 rounded-sm">
              <p className=" ">Something</p>
              <p className="text-sm">some smaller text</p>
              </div>
              </div>
        </div>

    
</>
    )
}

export default GalleryPage;
