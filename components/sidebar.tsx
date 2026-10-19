"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export const additionalLinks: Link[] = [
  {
    name: "Gallery",
    href: "/gallery",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="h-screen px-5 pt-36 hidden md:block sticky top-0 w-[200px] animate-in fade-in duration-300 motion-reduce:animate-none">
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
            } font-medium group`}
          >
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sky-500 group-hover:after:w-full after:transition-all after:duration-300">
              {link.name}
            </span>
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
            } font-medium group`}
          >
            <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sky-500 group-hover:after:w-full after:transition-all after:duration-300">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-auto absolute bottom-0 left-0 py-5">
        <ChangeTheme />
      </div>
    </div>
  );
}
