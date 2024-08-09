"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Maxi",
    href: "/Maxi",
    description:
      "A collection of beautiful Maxi for your wardrobe to sleek your look",
  },
  {
    title: "Tops",
    href: "/Tops",
    description:
      "A collection of beautiful Maxi for your wardrobe to sleek your look",
  },
  {
    title: "Jumpsuit",
    href: "/Jumpsuit",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Eastern",
    href: "/Eastern",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  }, 
]
const comp: { title: string; href: string; description: string }[] = [
  {
    title: "Women",
    href: "/Women",
    description:
      "A collection of beautiful Women Footwear",
  },
  {
    title: "Men",
    href: "/Men",
    description:
      "A collection of beautiful Men Footwear",
  }
]
const mens: { title: string; href: string; description: string }[] = [
  {
    title: "Tuxedo",
    href: "/Tuxedo",
    description:
      "Elevate your formal attire with our exquisite collection of tuxedos",
  },
  {
    title: "Kurta Pajama",
    href: "/Kurta Pajama",
    description:
      "Discover the charm of traditional South Asian attire with our curated selection of kurta pajamas.",
  },
  {
    title: "Winter Bear",
    href: "/Winter Bear",
    description:
      "Prepare for the chilly months ahead with our stylish and functional winter wear collection.",
  },
  {
    title: "Casual shirts",
    href: "/",
    description:
      "Embrace effortless style and comfort with our range of casual shirts. ",
  }, 
]

export function NavigationMenuDemoNavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Men</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-mywhite">
              {mens.map((mens) => (
                <ListItem
                  key={mens.title}
                  title={mens.title}
                  href={mens.href}
                >
                  {mens.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> 
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-mywhite grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Footwear</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" bg-mywhite grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {comp.map((comp) => (
                <ListItem
                  key={comp.title}
                  title={comp.title}
                  href={comp.href}
                >
                  {comp.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block bg-mywhite select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mylgreen group ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
