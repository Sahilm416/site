"use client";
import { mainLinks } from "@/components/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Menu() {
  return (
    <div className="fixed bottom-0 right-0 w-full flex justify-end p-5 sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-background border" variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          {mainLinks.map((link) => (
            <DropdownMenuItem key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
