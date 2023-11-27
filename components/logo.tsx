import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
      <Link href="/">
        <div className="hover:opacity-75 transition">
          <Image
            src="/img/xochiArtLogo.jpg"
            alt="Logo"
            height={100}
            width={260}
          />
        </div>
      </Link>
  );
};
