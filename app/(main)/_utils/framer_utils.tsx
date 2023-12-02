import { Variants } from "framer-motion";

{/*HomePage*/}
export const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  
export const FadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  
export const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };


  {/*GalleryItems*/}

export const imageVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
  
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  };
