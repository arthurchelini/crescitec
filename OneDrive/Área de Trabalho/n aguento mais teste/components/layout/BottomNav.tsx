"use client";

import { Home, MessageCircle, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      icon: Home,
      label: "Home",
      path: "/",
      hasNotification: false
    },
    {
      icon: MessageCircle,
      label: "Chat",
      path: "/chat",
      hasNotification: true
    },
    {
      icon: Bell,
      label: "Notificações",
      path: "/notifications",
      hasNotification: true
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border h-16 md:px-8 mx-0 my-0 px-0">
      <div className="flex items-center justify-around h-full max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-colors relative",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <div className="relative">
                <item.icon className="h-6 w-6 mb-1" />
                {item.hasNotification && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
