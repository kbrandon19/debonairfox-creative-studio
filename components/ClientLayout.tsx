"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import Loading from "@/app/loading";
import { Suspense, ReactNode } from "react";
import Header01 from "./Header/header01";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFooter = ["/Services", "/case-study", "/content-creation"].includes(pathname);

  return (
    <>
      <HeaderWrapper />
      <SmoothScroll>
        <Suspense fallback={<Loading />}>
          <AnimatePresence>{children}</AnimatePresence>
        </Suspense>
      </SmoothScroll>
    </>
  );
}