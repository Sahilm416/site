import Image from "next/image";
import { Title } from "@/components/title";
import { ExternalLink, Code2, Image as ImageIcon } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Sahil Mulani, including riru, an AI agent for the browser, and extro, a framework for Chrome extensions.",
  path: "/projects",
});

type Project = {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  logo?: string;
  live?: string;
  source?: string;
  archived?: boolean;
};

const projects: Project[] = [
  {
    name: "riru",
    description:
      "A general AI agent for the browser. A Chrome side panel where the chat is the agent. It clicks, types, and fills forms on real websites while you work elsewhere.",
    tags: ["Next.js", "AI Agents", "Chrome Extensions", "Postgres"],
    logo: "/projects/riru.png",
    live: "https://riru.app/",
  },
  {
    name: "extro",
    description:
      "Next.js for Chrome extensions. File-based entrypoints, auto-generated Manifest V3, type-safe React routing, and real HMR, all from a single Vite plugin.",
    tags: ["TypeScript", "Vite", "React", "Chrome Extensions"],
    logo: "/projects/extro.svg",
    live: "https://extrojs.vercel.app/",
    source: "https://github.com/Sahilm416/extro",
  },
  {
    name: "FIND-X",
    description:
      "An AI-powered answer engine you can embed in any website. Think Perplexity, but scoped to your own content and ready to deploy in minutes.",
    tags: ["Next.js", "AI", "TypeScript"],
    logo: "/projects/findx-logo.png",
    live: "https://findx.vercel.app/",
    source: "https://github.com/find-x-ai",
    archived: true,
  },
  {
    name: "RedShield Auth",
    description:
      "A Redis-backed authentication library for Next.js. Fast sessions, low bandwidth, and a minimal dashboard for managing users and roles.",
    tags: ["Next.js", "Redis", "TypeScript", "Tailwind"],
    logo: "/projects/redshield-logo.png",
    live: "https://redshield.vercel.app/",
    source: "https://github.com/Sahilm416/redShield",
    archived: true,
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex gap-4 p-4 rounded-lg border border-dashed">
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md bg-foreground/10 overflow-hidden flex items-center justify-center text-muted-foreground/60">
      {project.logo ? (
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
        />
      ) : project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      ) : (
        <ImageIcon className="w-6 h-6" />
      )}
    </div>
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="font-medium">{project.name}</h3>
          {project.archived && (
            <span
              title="No longer maintained. The live demo may be out of date."
              className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded-full border border-dashed border-red-500/30 bg-red-500/5 text-red-700/70 dark:text-red-400/70"
            >
              Archived
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live site`}
              className="p-1 rounded-md text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              className="p-1 rounded-md text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground/70 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title
        name="Projects"
        description="Here are some of the projects I have worked on"
      />
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
export default page;
