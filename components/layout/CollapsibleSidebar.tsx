"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Trophy,
  BookOpenText,
  Compass,
  Menu,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const CollapsibleSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const navItems = [
    {
      icon: Bot,
      label: "Chat IA",
      href: "/ai-chat"
    },
    {
      icon: Trophy,
      label: "Ranking",
      href: "/ranking"
    },
    {
      icon: BookOpenText,
      label: "Cursos",
      href: "/courses"
    },
    {
      icon: Compass,
      label: "Explore",
      href: "/explore"
    }
  ];

  return (
    <div
      className={cn(
        "fixed top-16 bottom-16 left-0 z-40 transition-all duration-300 border-r border-border bg-background/70 backdrop-blur-md",
        isOpen ? "w-72 shadow-xl" : "w-16"
      )}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-end p-2">
            <Button onClick={toggleSidebar} size="icon" variant="ghost">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center transition-colors px-4 py-2 rounded-md group hover:bg-muted/50",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {isOpen && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        {isOpen && (
          <div className="p-4 border-t border-border">
            <a
              href="https://crescitec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Página Crescitec
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
