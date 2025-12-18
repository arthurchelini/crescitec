"use client";

import { Search, Plus, User, Moon, Sun, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

export const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border h-16 px-4">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-200">
            Crescitec
          </Link>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar na Crescitec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-none rounded-full focus:bg-background transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/configuracoes">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-card border shadow-lg z-[60]" sideOffset={5}>
              <DropdownMenuItem onClick={toggleTheme}>
                {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/configuracoes" className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
