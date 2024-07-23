"use client";
import React from "react";
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

const list = [
  {
    name: "Wishlist",
    icon: <Whishlist />,
  },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
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
              <p>English</p>
            </div>
          </div>
        </div>
        <Separator className="w-full bg-slate-600" />
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="grid grid-cols-3 gap-4 relytive">
                <div className="">
                  <h1 className="text-white font-semibold text-2xl">
                    DIGITEC.
                  </h1>
                </div>
                <div className="w-96 flex">
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
                <div>
                  <div className="ml-8  bg-slate-600">
                    ertyuiopertyuiohgffgfgfffffffffffffffffffffffff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-slate-700 h-10">
        <div className="flex justify-between mx-auto pt-2  sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-4 gap-4">
            <Category className="w-4 h-4 text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}
