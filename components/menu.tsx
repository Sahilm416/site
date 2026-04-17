"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { mainLinks, additionalLinks } from "@/components/sidebar";

const links = [...mainLinks, ...additionalLinks];

export default function Menu() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ filter: "blur(5px)", opacity: 0, y: 10 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 rounded-full border bg-background/70 backdrop-blur-md px-1.5 py-1 shadow-sm"
    >
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch
            className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              active
                ? "text-primary bg-foreground/10"
                : "text-muted-foreground/70 hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      <span className="w-px h-4 bg-border mx-0.5" />
      <button
        onMouseDown={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        aria-label="Toggle theme"
        className="p-1.5 rounded-full text-muted-foreground/70 hover:text-primary transition-colors"
      >
        {mounted &&
          (theme === "dark" ? (
            <Sun className="w-3.5 h-3.5" />
          ) : (
            <Moon className="w-3.5 h-3.5" />
          ))}
      </button>
    </motion.nav>
  );
}
