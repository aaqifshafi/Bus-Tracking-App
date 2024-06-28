import React from "react";
import { ModeToggle } from "@/components/ui/modeToggle";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <>
      <div>
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <ModeToggle />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Log Out
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
