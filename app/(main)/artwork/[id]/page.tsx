import Image from "next/image";
import { mockData } from "@/app/(main)/_utils/mock_data";

const data = mockData;

export default function ArtWorkPage({ params }: { params: { id: string } }) {
  const selectedItem = mockData.find((item) => item.id === params.id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <div className="bg-black grid md:grid-cols-2">
        <div className="bg-black min-h-screen flex justify-center items-center">
          <Image
            src={selectedItem.imageUrl}
            alt="Artist"
            className="object-contain max-h-screen mx-auto"
            height={720}
            width={1280}
          />
        </div>
        <div className="text-white flex justify-center mt-32">
          <div>
            <h1 className="text-4xl">{selectedItem.title}</h1>
            <h2 className="">{selectedItem.dimensions}</h2>
            <h2 className="">{selectedItem.materials}</h2>
            <h2 className="">{selectedItem.year}</h2>

            <h3 className="mt-56 text-2xl"> Enquire about:</h3>
            <h3>name</h3>
            <h3>email</h3>
            <h4>subject</h4>
            <h4>message</h4>
            <h4>send</h4>
          </div>
        </div>
      </div>
    </>
  );
}
