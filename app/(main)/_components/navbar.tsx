
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { featureFont,mainFont } from "../_utils/font_utils";
import { ActionButtons } from "./action_buttons";
import { NavigationBar } from "./navigation_bar";
import { RemautLogo } from "./remaut_logo";
import { Navbar2 } from "./navbar2";




export const Navbar = () => {
    return (
      <div className="flex justify-between items-center px-2 border-b">
      <RemautLogo/>
      <Navbar2/>
      <ActionButtons/>
      </div>
    );
  };
  