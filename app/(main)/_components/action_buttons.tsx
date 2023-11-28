import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { AlignJustify } from "lucide-react";

import Link from "next/link";
import { mainFont } from "../_utils/font_utils";

export const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-base font-semibold text-black mt-10">
                <Link href="#">Home</Link>
                  <Separator />
                  <Link href="#">About</Link>
                  <Separator />
                 
                  <div className="flex flex-col items-start">
                    <p className="mb-3">Gallery</p>
                    <div
                      className={cn(
                        "flex flex-col items-start bg-slate-50 rounded-md w-full p-2 ml-2",
                        mainFont.className
                      )}
                    >
                      <Link
                        href="#"
                        className="flex flex-col items-start mb-1 hover:bg-slate-300 p-2 rounded-md w-full"
                      >
                        <p className="text-sm">Featured</p>
                        <p className="font-normal text-xs">
                          A showcase of my most recent works
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="flex flex-col items-start mb-1 hover:bg-slate-300 p-2 rounded-md w-full"
                      >
                        <p className="text-sm">Material Art</p>
                        <p className="font-normal text-xs">
                          Materials in Abstract Dimensions
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="flex flex-col items-start mb-1 hover:bg-slate-300 p-2 rounded-md w-full"
                      >
                        <p className="text-sm">Works on Paper</p>
                        <p className="font-normal text-xs">
                          Abstract narratives on a paper canvas
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="flex flex-col items-start mb-1 hover:bg-slate-300 p-2 rounded-md w-full"
                      >
                        <p className="text-sm">Figuartive Work</p>
                        <p className="font-normal text-xs ">
                          Something about figuratism
                        </p>
                      </Link>
                      <Link
                        href="#"
                        className="flex flex-col items-start mb-1 hover:bg-slate-300 p-2 rounded-md w-full"
                      >
                        <p className="text-sm">Sculptures</p>
                        <p className="font-normal text-xs ">
                          Something about sculptures
                        </p>
                      </Link>
                    </div>
                  </div>
                  <Separator className="mt-4" />
                  <Link href="#">Contact</Link>
                  <Separator />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
