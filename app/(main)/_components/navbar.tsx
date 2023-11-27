
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { featureFont,mainFont } from "../_utils/font_utils";




export const Navbar = () => {
    return (
      <div className={cn("fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-10",mainFont)}>
        <div className="mx-auto flex items-center w-full justify-between">
         <Link href="/"><p className={cn("text-3xl md:text-4xl",featureFont.className)}>Remaut.</p></Link>
          <div className="space-x-4 md:block md:w-auto flex items-center justify-end w-full">
            <Button size="sm" variant="outline" asChild>
              <Link href="/sign-in">Gallery</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="/sign-up">Contact</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">x</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  