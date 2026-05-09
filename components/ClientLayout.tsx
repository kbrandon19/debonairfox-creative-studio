"use client";

import { Suspense, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Header01 from "@/components/Header/header01";
import SmoothScroll from "@/components/SmoothScroll";
import Loading from "@/app/loading";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideFooter = ["/Services", "/case-study", "/content-creation"].includes(pathname);

  return (
    <>
      <Header01 />
      <SmoothScroll>
        <Suspense fallback={<Loading />}>
          <AnimatePresence>{children}</AnimatePresence>
        </Suspense>
      </SmoothScroll>
    </>
  );
}
