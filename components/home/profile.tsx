"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
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
];
export default function Profile() {
  return (
    <motion.div
      initial={{ filter: "blur(5px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-5">
        <Image
          src="https://github.com/sahilm416.png"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-sm"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">Sahil Mulani</h1>
          <p className="text-muted-foreground">
            Hey there, I'm a software engineer with a passion for building
            scalable and efficient systems.
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
