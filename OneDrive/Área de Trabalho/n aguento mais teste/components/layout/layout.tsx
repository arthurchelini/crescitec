"use client";

import { ReactNode } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { CollapsibleSidebar } from "@/components/layout/CollapsibleSidebar";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground">
        <TopNav />
        <CollapsibleSidebar />
        <main className="pt-16 pb-16 ml-16">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
