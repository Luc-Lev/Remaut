"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
        <div className="overflow-hidden">{children}</div>
      </AnimatePresence>
    </>
  );
};
