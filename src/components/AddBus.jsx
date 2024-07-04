import React, { useState, useRef } from "react";
import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { useToast } from "@/components/ui/use-toast";

export default function AddBus() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { toast } = useToast();
  const drawerRef = useRef();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Selected Location:", selectedLocation);

    // Close the drawer
    if (drawerRef.current) {
      drawerRef.current.close();
    }

    toast({
      title: "Bus Added",
      description: `The bus traveling to ${selectedLocation} has been successfully added.`,
      status: "success",
    });

    // Reset selectedLocation state if needed
    setSelectedLocation(null);
  };

  return (
    <Drawer ref={drawerRef}>
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
            <DrawerDescription>Set traveling route</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center items-center p-4 pb-0 text-sm uppercase text-foreground">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {selectedLocation ? selectedLocation : "Select Location"}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleLocationSelect("Srinagar")}
                >
                  Srinagar
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLocationSelect("Budgam")}
                >
                  Budgam
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLocationSelect("Ganderbal")}
                >
                  Ganderbal
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLocationSelect("Baramulla")}
                >
                  Baramulla
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLocationSelect("Anantnag")}
                >
                  Anantnag
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DrawerFooter>
            <Button onClick={handleSubmit}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
