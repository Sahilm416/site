"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

type SocialLink = {
  name: string;
  href: string;
  icon: keyof typeof Icons;
};

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/sahilm416",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahil-mulani501/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sahil__501",
    icon: "twitter",
  },
  {
    name: "Mail",
    href: "mailto:sahilmulani501@gmail.com",
    icon: "mail",
  },
];
export default function Profile() {
  return (
    <div
    >
      <div className="flex flex-col md:flex-row gap-5">
        <Image
          src="/sahil-mulani.jpg"
          alt="Sahil Mulani"
          preload
          width={150}
          height={150}
          className="rounded-sm w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-muted"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="md:text-4xl text-2xl font-semibold">Sahil Mulani</h1>
            <p className="text-sm font-mono text-muted-foreground/70">
              Founding Engineer @{" "}
              <a
                href="https://www.sourcicle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dashed underline-offset-4 hover:text-primary hover:decoration-solid"
              >
                Sourcicle
              </a>
            </p>
          </div>
          <p className="text-muted-foreground">
            I&apos;m a software engineer who ships products end to end.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((socialLink) => {
              const Icon = Icons[socialLink.icon];
              return (
                <Link
                  target="_blank"
                  href={socialLink.href}
                  key={socialLink.name}
                >
                  <Button
                    className="rounded-full"
                    variant="outline"
                    size="icon"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
