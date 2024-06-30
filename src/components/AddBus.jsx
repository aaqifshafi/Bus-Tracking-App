import React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function AddBus() {
  function onClick() {}
  <Button onClick={onClick} className="ml-16">
    Add Bus
  </Button>;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="ml-20">
          <Button>
            <Bus className="mr-2 h-7 w-5" />
            Add Bus
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add Bus</DrawerTitle>
            <DrawerDescription>Set travelling route</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center items-center p-4 pb-0 text-sm uppercase text-foreground">
            <DropdownMenu>
              <DropdownMenuTrigger>Select Location</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Srinagar</DropdownMenuItem>
                <DropdownMenuItem>Budgam</DropdownMenuItem>
                <DropdownMenuItem>Ganderbal</DropdownMenuItem>
                <DropdownMenuItem>Baramulla</DropdownMenuItem>
                <DropdownMenuItem>Anantnag</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
