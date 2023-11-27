
import Image from "next/image";
import p1 from "@/public/img/p1.jpg"
const ItemPage = () => {
  return (
    <>
      <div className="bg-black grid md:grid-cols-2">
        <div className="bg-black min-h-screen flex justify-center items-center">
        <Image
                src={p1}
                alt="Artist"
                className="object-contain max-h-screen mx-auto"
                height={720}
                width={1280}
              />
        </div>
        <div className="text-white flex justify-center mt-32">
            <div>
            <h1 className="text-4xl">Title of work</h1>
            <h2 className="">dimensions</h2>
            <h2 className="">material</h2>
            <h2 className="">year</h2>

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
};

export default ItemPage;
