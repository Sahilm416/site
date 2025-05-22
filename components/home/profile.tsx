"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
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
    href: "https://twitter.com/sahil_501",
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
    <motion.div
      initial={{ filter: "blur(5px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-5">
        <Image
          src="https://github.com/sahilm416.png"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-sm w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-muted"
        />
        <div className="flex flex-col gap-3">
          <h1 className="md:text-4xl text-2xl font-semibold">Sahil Mulani</h1>
          <p className="text-muted-foreground">
            Hey there, I&apos;m a software engineer with a passion for building
            minimalistic and efficient AI applications.
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
    </motion.div>
  );
}
