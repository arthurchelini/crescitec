"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Star, Menu, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

export const SidebarDireita = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);

  // Atualiza o top com base no scroll da janela para movimento "mais suave"
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffsetTop(scrollY * 0.4); // quanto menor, mais lento sobe
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "fixed right-0 top-16 bottom-16 w-[300px] z-30 overflow-y-auto scrollbar-hide",
        "transition-all duration-300 ease-in-out",
        "px-4 pb-4",
        "bg-muted/50 backdrop-blur-md border-l border-border rounded-tl-2xl shadow-xl"
      )}
      style={{ transform: `translateY(${offsetTop}px)` }}
    >
      <div className="space-y-6">

        {/* Eventos XP - Placeholder futuro */}

        {/* Comunidades Ativas */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5 text-primary" />
                Comunidades Ativas
              </CardTitle>
              <Button variant="ghost" size="sm" className="p-1">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 animate-slide-in-right">
            {[
              { name: "Engenharia Elétrica", members: "15.2k" },
              { name: "Automação Industrial", members: "12.8k" },
              { name: "Refrigeração Comercial", members: "9.4k" },
              { name: "Sistemas de Energia", members: "11.1k" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Hash className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.members} membros</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tópicos Populares */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-5 w-5 text-primary" />
                Tópicos Populares
              </CardTitle>
              <Button variant="ghost" size="sm" className="p-1">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 animate-slide-in-right">
            {[
              { name: "Sistemas de Automação", posts: "342" },
              { name: "Refrigeração Industrial", posts: "298" },
              { name: "Energia Solar", posts: "256" },
              { name: "Controle de Qualidade", posts: "201" },
            ].map((topic, index) => (
              <div
                key={topic.name}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{topic.name}</p>
                    <p className="text-xs text-muted-foreground">{topic.posts} discussões</p>
                  </div>
                </div>
                <Star className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Outros blocos futuros */}

      </div>
    </aside>
  );
};
