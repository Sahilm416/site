import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const building = [
  {
    name: "riru",
    logo: "/projects/riru.png",
    content:
      "A general AI agent for the browser. It lives in Chrome's side panel and clicks, types, and fills forms on real websites while you work elsewhere.",
    href: "https://riru.app/",
  },
  {
    name: "extro",
    logo: "/projects/extro.svg",
    content:
      "Next.js for Chrome extensions. File-based routing, auto-generated Manifest V3, and real HMR from a single Vite plugin.",
    href: "https://extrojs.vercel.app/",
  },
];

export default function Building() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted-foreground/70">
        Currently building
      </h2>
      <div className="flex flex-col">
        {building.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 py-5 border-b-2 border-dashed"
          >
            <Image
              src={item.logo}
              alt={`${item.name} logo`}
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg shrink-0 border"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <h3 className="text-2xl">{item.name}</h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-muted-foreground text-sm">{item.content}</p>
            </div>
          </a>
        ))}
      </div>
      <Link
        href="/projects"
        className="text-sm text-muted-foreground/70 hover:text-primary transition-colors w-fit"
      >
        See all projects →
      </Link>
    </div>
  );
}
