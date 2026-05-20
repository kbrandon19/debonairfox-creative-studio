"use client";

import { usePathname } from "next/navigation";
import Header01 from "@/components/Header/header01";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) return null;

  return <Header01 />;
}