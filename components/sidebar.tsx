"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Link = {
  name: string;
  href: string;
};

const mainLinks: Link[] = [
  {
    name: "Home",
    href: "/",
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
      className="h-full min-w-50 px-5 pt-36 hidden md:block"
    >
      <div className="flex flex-col gap-2">
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

      <hr className="my-3 border-1 max-w-20 flex-0" />

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
    </motion.div>
  );
}
