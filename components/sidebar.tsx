"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import dynamic from "next/dynamic";

const ChangeTheme = dynamic(
  () => import("@/components/change-theme").then((mod) => mod.ChangeTheme),
  {
    ssr: false,
  }
);

type Link = {
  name: string;
  href: string;
};

export const mainLinks: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blogs",
  },
];

const additionalLinks: Link[] = [
  {
    name: "Gallery",
    href: "/gallery",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ filter: "blur(5px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className="h-screen px-5 pt-36 hidden md:block sticky top-0 w-[200px]"
    >
      <div className="flex flex-col gap-2">
        <Zap className="w-4 h-4 fill-primary" />
        {mainLinks.map((link) => (
          <Link
            prefetch
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-primary"
                : "text-muted-foreground/70 hover:text-primary transition-all duration-300"
            } font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <hr className="my-3 border-1 border-dashed max-w-20 flex-0" />

      <div className="flex flex-col gap-2">
        {additionalLinks.map((link) => (
          <Link
            prefetch
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-primary"
                : "text-muted-foreground/70 hover:text-primary transition-all duration-300"
            } font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mt-auto absolute bottom-0 left-0 py-5">
        <ChangeTheme />
      </div>
    </motion.div>
  );
}
