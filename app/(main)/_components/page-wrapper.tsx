"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <AnimatePresence>
        <motion.div
           initial={{opacity: 0, y: 0 }}
           animate={{
             opacity: 1,
             y: 0,
             transition: {
               duration: 1,
               ease: [0.61, 1, 0.88, 1],
             }
           }}
        >
          <div className="overflow-hidden">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
