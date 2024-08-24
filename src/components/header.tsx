"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Label } from "@/components/ui/label";

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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

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
      <nav className="bg-[#151C25]">
        <div className="h-12 py-2 w-full ">
          <div className="flex justify-between mx-auto pt-2  sm:px-6 lg:px-8">
            <div>
              <p className="text-white text-xs ">
                Free Shiping Over $100 & Free Returns
              </p>
            </div>
            <div className="flex text-white text-xs gap-4">
              <div className="flex">
                <p>HotLine:(880) 176 111 111 </p>

                <Separator
                  orientation="vertical"
                  className="w-[1px] h-4 mt-[1px]  mx-3  bg-slate-400"
                />
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

        <div className="flex justify-between py-6  h-auto px-7">
          <div>
            <Image
              src="/logo.webp"
              alt="me"
              width={150}
              height={100}
              className="w-auto h-full"
            />
          </div>

          <div className="flex">
            <Input
              variant="destructive"
              type="search"
              className="w-[750px] h-9 !rounded-r-none m-0 text-lg font-normal"
              placeholder="Search  "
              sizes="lg"
            />
            <div className="bg-orange-300 w-8 h-9 rounded-r-md">
              <Search className="w-4 h-4 flex justify-center my-2 mx-auto " />
            </div>
          </div>

          <div className="flex justify-end gap-6 mx-4">
            {list.map((item: any, index: any) => (
              <>
                <div key={index} className="relative group">
                  <Link href={item?.href}>
                    <div className="flex justify-between text-white group">
                      <p className="mt-1   ">{item.icon}</p>
                      <div className="flex flex-col justify-start px-1 font-normal text-sm ">
                        <span className="  text-white">{item.title}</span>
                        <span className="pr-1 mt-1 text-center  text-white">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                  {index === 2 && (
                    <>
                      <div className="absolute left-0 w-full origin-top-left bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          <a
                            href="/auth/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                            role="menuitem"
                          >
                            Login
                          </a>
                          <a
                            href="/auth/register"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                            role="menuitem"
                          >
                            Register
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}

            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <div className="flex text-white">
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
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you re
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Name</Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Username</Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
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
            {/* <div className="border-l-2 h-4 mt-1 border-slate-600"></div> */}
            <Separator
              orientation="vertical"
              className="w-[1px] h-5 mt-1  bg-slate-400"
            />
            <div className="flex items-center -mt-2 justify-between flex-wrap md:flex-nowrap">
              <div className="text-white w-full">
                <ul className="flex font-medium text-sm justify-between ">
                  {nav.map((item) => (
                    <>
                      <li className="md:px-4 md:py-2">
                        <Link href={item.href}>{item.name}</Link>
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
