import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Four, Left, Right, Three, Threev, Two } from "@/assets/svg";
import ProductActions from "@/components/productdropdown";
import { featuredCollection } from "@/app/home/(components)/constants";

export default function Main() {
  const ProductColor = [
    { name: "Red", hex: "bg-[#FF0000]" },
    { name: "Blue", hex: "bg-[#0000FF]" },
    { name: "Green", hex: "bg-[#008000]" },
    { name: "Yellow", hex: "bg-[#FFFF00]" },
    { name: "Black", hex: "bg-[#000000]" },
    { name: "White", hex: "bg-[#FFFFFF]" },
    { name: "Orange", hex: "bg-[#FFA500]" },
    { name: "Purple", hex: "bg-[#800080]" },
    { name: "Pink", hex: "bg-[#FFC0CB]" },
    { name: "Brown", hex: "bg-[#A52A2A]" },
    { name: "Gray", hex: "bg-[#808080]" },
    { name: "Cyan", hex: "bg-[#00FFFF]" },
  ];

  const Products = [
    {
      title: "Smart TV",
      link: "https://example.com/smart-tv",
    },
    {
      title: "Camera",
      link: "https://example.com/digital-camera",
    },
    {
      title: "Laptop",
      link: "https://example.com/laptop",
    },

    {
      title: "Gaming Laptop",
      link: "https://example.com/gaming-laptop",
    },
  ];

  return (
    <div className="bg-zinc-100 overflow-y-auto  py-20 ">
      <main className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 ">
        <div className="flex  gap-4">
          <div className="grid grid-cols-1 gap-4 w-1/4  ">
            <div className="grid grid-cols-1 bg-white gap-y-3  rounded-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 py-2 px-4 ">
              <p className="font-bold txet-black">Shop BY Categories</p>
              <div>
                {Products.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm text-slate-500  hover:text-orange-300 font-normal py-1  "
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 bg-white gap-y-3   rounded-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 py-2  px-4 ">
              <p className="font-bold txet-black">Filter By</p>
              <p className="font-semibold text-base txet-black -pt-4">
                Availability
              </p>

              <div className="  flex flex-col gap-4 pb-2 ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    In stock
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal leading-none text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Out of stock
                  </label>
                </div>
                <div className="">
                  <p className="font-semibold text-base txet-black">Price</p>
                  <div className="flex gap-2 !text-black mt-2">
                    <Input
                      variant="default"
                      className=" !text-black border-black"
                      placeholder="From"
                    />
                    <Input
                      variant="default"
                      className="!text-black border-black"
                      placeholder="To"
                    />
                  </div>
                </div>

                <div className="">
                  <p className="font-semibold text-base txet-black">Colors</p>
                  <div className="flex flex-wrap p-1 mt-2">
                    {ProductColor.map((i, index) => (
                      <div
                        key={index}
                        className={`rounded-full w-4 h-4 m-1  border border-slate-500 ${i.hex}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="size gap-2 space-y-2">
                  <p className="font-semibold text-base txet-black">Sizes</p>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      M
                    </label>
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Lg
                    </label>
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Xl
                    </label>
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none  text-slate-500  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      XXL
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 bg-white gap-y-3  rounded-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 py-2 px-4 ">
              <p className="font-bold txet-black">Product Tags</p>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
            </div>
            <div className="grid grid-cols-1 bg-white gap-y-3  rounded-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 py-2 px-4 ">
              <p className="font-bold txet-black">Random Product </p>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
              <div className="">fghjkl</div>
            </div>
          </div>
          {/* <div className="grid grid-cols-auto w-full "> */}
          <div className="grid grid-rows-2 w-full h-28 ">
            <div className="flex justify-between px-1 bg-white  rounded-md items-center">
              <div className="flex">
                <div className="w-full">
                  <p className="text-sm font-medium mt-2 text-slate-700 mx-1">
                    Sort By:
                  </p>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-44 mt-1 border border-slate-300 rounded-md ">
                      <SelectValue placeholder="Best Selling" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Best Selling</SelectLabel> */}
                        {[1, 2, 3, 4].map((language, index) => (
                          <SelectItem
                            key={index}
                            value={language}
                            className="hover:bg-orange-300 "
                          >
                            {language}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-sm font-medium text-slate-700 ">
                  21 Product
                </div>
                <Four className="w-6 h-6 bg-zinc-100  rounded-md p-1" />
                <Three className="w-6 h-6 bg-zinc-100  rounded-md p-1" />
                <Two className="w-6 h-6 bg-zinc-100 !rotate-180  rounded-md p-1" />
                <Threev className="w-6 h-6 bg-zinc-100 text-black !rotate-180  rounded-md p-1" />
              </div>
            </div>

            {/* </div> */}

            <div className="grid grid-cols-1 gap-4 w-full h-[1000px] sm:mx-0 md:grid-cols-3 lg:grid-cols-4 my-4 overflow-y-auto">
              {featuredCollection.map((product) => (
                <div
                  key={product.id}
                  className="group relative border border-gray-200 shadow-md shadow-gray-200  rounded-md bg-white sm:p-2"
                >
                  <div className="flex justify-between border-red-500">
                    <div className="bg-orange-300 text-black text-xs w-10 h-4 font-xs px-1 rounded-full text-center">
                      -30%
                    </div>

                    <ProductActions />
                  </div>
                  <div className="rounded-lg overflow-hidden bg-wite group-hover:opacity-75">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width="100"
                      height="100"
                      className="w-18 h-18 flex justify-center items-center mx-auto !bg-white object-contain transition-transform duration-300 transform hover:scale-125"
                    />
                    <div className="pt-10 pb-4 px-2 flex flex-col justify-start space-y-2">
                      <p className="font-medium text-sm text-orange-300">
                        Sony
                      </p>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="mt-1 flex flex-col items-start">
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                        <div className="flex flex-col items-start">
                          <p className="text-sm font-semibold text-gray-900">
                            {product.price}.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="grid grid-cols-3  h-full w-full ">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                // eslint-disable-next-line react/jsx-key
                <div className="align-middle items-center my-4 mx-4">{i}</div>
              ))}
            </div> */}
          </div>
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}
