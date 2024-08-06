"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

import {
  Search,
  Compare,
  Basket,
  User,
  Whishlist,
  Category,
} from "../assets/svg/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
import Link from "next/link";

const list = [
  {
    title: "Favorite",
    name: "Wishlist",
    icon: <Whishlist className="w-8 h-8 -mt-1" />,
    href: "/wishlist",
  },
  {
    title: "Compare",
    name: "Product",
    icon: <Compare />,
    href: "/compareProduct",
  },
  {
    title: "Login",
    name: "My Account",
    icon: <User />,
    href: "/auth/login",
  },
];

const nav = [
  { name: "HOME", href: "/home" },
  { name: "OUR STORE", href: "/store" },
  // { name: "ABOUT", href: "/about" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Italian",
  "Portuguese",
  "Russian",
];

const currencies = [
  "US Dollar",
  "Euro",
  "Japanese Yen",
  "British Pound",
  "Australian Dollar",
  "Canadian Dollar",
  "Swiss Franc",
  "Chinese Yuan",
  "Swedish Krona",
  "New Zealand Dollar",
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 cursor-pointer">
      <nav className="bg-gray-800">
        <div className="h-8 w-full ">
          <div className="flex justify-between mx-auto pt-2  sm:px-6 lg:px-8">
            <div>
              <p className="text-white text-xs">
                Free Shiping Over $100 & Free Returns
              </p>
            </div>
            <div className="flex text-white text-xs gap-4">
              <div className="flex">
                <p>HotLine:(880) 176 111 111 </p>
                <div className="h-4 w-[2px] bg-slate-600 mx-3 mt-"></div>
              </div>
              <p>Mon-Fri: 9:00 - 18:00</p>
              <div className="flex ">
                <Select>
                  <SelectTrigger className="w-28 -mt-2 ">
                    <SelectValue placeholder="Lnaguage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Lnaguage</SelectLabel>
                      {languages.map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-28 -mt-2 ">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      {currencies.map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-full bg-slate-600" />
        <div className="grid grid-cols-3 gap-2 space-y-4 h-16 px-7 relytive">
          <div>
            <h1 className="mt-4 text-white font-semibold text-2xl">DIGITEC.</h1>
          </div>

          <div className="max-w-6xl flex">
            <Input
              variant="destructive"
              type="search"
              className="w-full h-8 !rounded-r-none m-0 text-xs "
              placeholder="Search Product Here ...  "
              sizes="lg"
            />
            <div className="bg-orange-300 w-8 h-8 rounded-r-md">
              <Search className="w-4 h-4 flex justify-center my-2 mx-auto " />
            </div>
          </div>

          <div className="flex justify-end gap-x-4 ">
            {list.map((item: any, index: any) => (
              <>
                <Link href={item?.href}>
                  <div className="flex justify-between text-white group">
                    <p className="mt-1">{item.icon}</p>
                    <div className="flex flex-col justify-start  mx-1 px-1 ">
                      <span className=" text-xs text-white">{item.title}</span>
                      <span className="pr-1 mt-1 text-center  text-xs text-white">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </>
            ))}

            <div>
              <div className="flex  text-white">
                <Basket className="text-orange-300" />
                <div className="flex flex-col ">
                  <span className="px-1 mx-auto text-xs bg-white text-black w-4 h-4 rounded-full">
                    1
                  </span>
                  <span className="px-1 mt-1 text-center  text-xs text-white">
                    $ 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-slate-700 h-10">
        <div className="flex pt-2 sm:px-6 lg:px-8 ">
          <div className="flex">
            <Category className="w-4 h-4 text-white mt-1" />

            <NavigationMenu className="-mt-2 text-white">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:bg-transparent">
                    Shop Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="border-l-2 h-4 mt-1 border-slate-600"></div>
            <div className=" flex items-center -mt-2 justify-between flex-wrap md:flex-nowrap">
              <div className="text-white w-full md:w-auto md:order-2">
                <ul className="flex font-light text-xs justify-between">
                  {nav.map((item) => (
                    <>
                      <li className="md:px-4 md:py-2 hover:text-neutral-500">
                        <a href={item.href}>{item.name}</a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
