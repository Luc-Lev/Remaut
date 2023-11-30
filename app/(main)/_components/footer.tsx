import { Logo } from "@/components/logo";
import { featureFont, mainFont } from "../_utils/font_utils";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className={mainFont.className}>
      <div className="bg-gray-800 py-4 text-gray-100 border-t-2 border-b-2">
        <div className="container px-4 mx-auto flex justify-between flex-wrap">
          <div className="flex my-auto">
            <Logo/>
          </div>
          <div className="flex justify-end">
            {/*Xochi Art*/}

            {/*Links*/}
            <div className="flex flex-wrap">
              <div className="px-4 my-4">
                <div>
                  <h2 className="inline-block text-xl xl:text-2xl pb-4 mb-4 border-b-4 border-gray-300">
                    Links
                  </h2>
                </div>
                
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
                
              </div>
              {/*Contact*/}
              <div className="px-4 my-4">
                <div>
                  <h2 className="inline-block text-xl xl:text-2xl pb-4 mb-4 border-b-4 gray-blue-600">
                    Contact
                  </h2>
                </div>
                <ul className="leading-8">
                  <a>
                    <li>remaut@xochi.art</li>
                  </a>
                  <a>
                    <li>+351 968 500 972</li>
                  </a>
                  <a>
                    <li>Guarda, Portugal</li>
                  </a>
                </ul>
              </div>
               {/*end Contact*/}
               
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="text-sm md:text-base px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2023 Xochi Art. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Created by Luc Levez.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
