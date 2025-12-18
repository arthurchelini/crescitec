"use client"

import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"

export default function TestePage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Testando Componentes UI</h1>

      <Button>Botão Teste</Button>

      <Alert>
        <AlertTitle>Aviso</AlertTitle>
        <AlertDescription>Este é um alerta de teste.</AlertDescription>
      </Alert>

      <Avatar>
        <AvatarImage src="https://github.com/linin.png" />
        <AvatarFallback>LN</AvatarFallback>
      </Avatar>

      <Badge>Beta</Badge>

      <Checkbox />

      <Drawer>
        <DrawerTrigger className="btn">Abrir Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Menu Lateral</DrawerTitle>
        </DrawerContent>
      </Drawer>

      <Dialog>
        <DialogTrigger className="btn">Abrir Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Diálogo de Teste</DialogTitle>
        </DialogContent>
      </Dialog>

      <ContextMenu>
        <ContextMenuTrigger>
          <div className="p-4 bg-gray-100 rounded">Clique com o direito</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Editar</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
