"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { CollapsibleSidebar } from "@/components/layout/CollapsibleSidebar";
import { SidebarDireita } from "@/components/layout/SidebarDireita";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showSidebarDireita = ["/", "/home", "/perfil", "/forum", "/post"].some((route) =>
    pathname.startsWith(route)
  );

  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground">
        <TopNav />
        <CollapsibleSidebar />
        <main className="pt-16 pb-16 ml-16 mr-[300px]">
          {children}
        </main>
        {showSidebarDireita && <SidebarDireita />}
        <BottomNav />
      </body>
    </html>
  );
}
