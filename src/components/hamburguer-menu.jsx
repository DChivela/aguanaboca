import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col space-y-4">
          <a href="#CAFETARIA" className="text-lg font-medium">
            CAFETARIA
          </a>
          <a
            href="#ENTRADAS e PETISCOS-ENTRADAS"
            className="text-lg font-medium"
          >
            Entradas
          </a>
          <a
            href="#ENTRADAS e PETISCOS-PETISCOS"
            className="text-lg font-medium"
          >
            Petiscos
          </a>
          <a href="#PRATOS de CARNE-GRELHADOS" className="text-lg font-medium">
            Pratos de Carne
          </a>
          <a href="#PRATOS DE PEIXE-GRELHADOS" className="text-lg font-medium">
            Pratos de Peixe
          </a>
          <a href="#SOBREMESAS" className="text-lg font-medium">
            Sobremesas
          </a>
          <a href="#TAKE AWAY" className="text-lg font-medium">
            Take Away
          </a>
          <a href="#BEBIDAS-CERVEJAS" className="text-lg font-medium">
            Cervejas
          </a>
          <a href="#BEBIDAS-ENERGÉTICOS" className="text-lg font-medium">
            Bebidas Energéticos
          </a>
          <a
            href="#BEBIDAS-BEBIDAS ESPIRITUOSAS"
            className="text-lg font-medium"
          >
            Bebidas Espirituosas
          </a>
          <a href="#BEBIDAS-REFRIGERANTES" className="text-lg font-medium">
            Refrigerantes 
          </a>
          <a href="#BEBIDAS-SUMOS NATURAIS" className="text-lg font-medium">
            Sumos Naturais
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
