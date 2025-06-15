import { Link } from "lucide-react";

const work = [
  {
    id: 1,
    name: "Sourcicle",
    description: "Founding Engineer",
    period: "June 2024 – Present",
    details: [
      "Leading technical architecture and development of core product features",
      "Building and scaling infrastructure to support growing user base",
    ],
    link: "https://www.sourcicle.com/",
    image: "https://www.sourcicle.com/favicon.ico",
  },
  {
    id: 2,
    name: "Sourcicle",
    description: "Software Development Engineer Intern",
    period: "Apr 2025 – May 2025",
    details: [
      "Developed a cross-platform Chrome extension using Plasmo",
      "Built a modular Next.js dashboard with ShadCN UI components",
      "Integrated third-party data providers and automated outreach flows",
    ],
    link: "https://www.sourcicle.com/",
    image: "https://www.sourcicle.com/favicon.ico",
  },
  {
    id: 3,
    name: "StudyChat",
    description: "Software Development Engineer Intern",
    period: "Oct 2024 – May 2025",
    details: [
      "Led end-to-end development of the AI tutor SaaS, used by over 20,000+ users",
      "Built add-on modules such as agentic chatbots and an automated explainer video generator",
    ],
    link: "https://www.studychat.app/",
    image: "https://www.studychat.app/favicon.ico",
  },
];

export default function WorkThread() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-1 h-full border-l-2 border-dashed border-[linear-gradient(to_bottom,transparent,transparent,black,black,black,transparent,transparent)] dark:border-[linear-gradient(to_bottom,transparent,transparent,white,white,white,transparent,transparent)] rounded-full" />
      <div className="flex flex-col gap-5">
        {work.map((item) => (
          <div className="relative pl-8" key={item.id}>
            <span
              className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                item.id === 1 ? "bg-blue-500" : "bg-foreground/80"
              }`}
            />
            <div className="flex items-center gap-2 space-y-1">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Link className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">{item.description}</p>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
