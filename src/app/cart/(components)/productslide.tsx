"use client";
import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Heart, Star } from "@/assets/svg";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accordion } from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/lib/RatingStar";
import { Checkbox } from "@/components/ui/checkbox";
import App from "./slider";
import EmblaCarousel from "./slider";

const product = {
  name: "Premium Cotton T-Shirt",
  price: "$29.99",
  rating: 4.5,
  description: `
      <p>This is a high-quality cotton t-shirt that is perfect for everyday wear.</p>
     
    `,
  colors: [
    {
      name: "Black",
      bgColor: "bg-black",
      selectedColor: "ring-black",
    },
    {
      name: "White",
      bgColor: "bg-white",
      selectedColor: "ring-white",
    },
    {
      name: "Red",
      bgColor: "bg-red-500",
      selectedColor: "ring-red-500",
    },
    {
      name: "Blue",
      bgColor: "bg-blue-500",
      selectedColor: "ring-blue-500",
    },
  ],
  images: [
    {
      id: 1,
      name: "Front View",
      src: "https://example.com/images/tshirt-front.jpg",
      alt: "Front view of the Premium Cotton T-Shirt",
    },
    {
      id: 2,
      name: "Back View",
      src: "https://example.com/images/tshirt-back.jpg",
      alt: "Back view of the Premium Cotton T-Shirt",
    },
    {
      id: 3,
      name: "Side View",
      src: "https://example.com/images/tshirt-side.jpg",
      alt: "Side view of the Premium Cotton T-Shirt",
    },
    {
      id: 4,
      name: "Detail View",
      src: "https://example.com/images/tshirt-detail.jpg",
      alt: "Detail view of the Premium Cotton T-Shirt",
    },
  ],
  details: [
    {
      name: "Materials",
      items: [""],
    },
  ],
};

const productImages = [
  {
    id: 1,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11_06.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
  {
    id: 2,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
  {
    id: 3,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11_02.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
  {
    id: 4,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11_06.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
  {
    id: 5,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
  {
    id: 6,
    src: "https://demo-digitic2.myshopify.com/cdn/shop/files/11_02.jpg?v=1721459614",
    alt: "Samsung R6 Wireless 360° Multiroom Speaker",
  },
];

export default function ProductSlide() {
  // const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="">
      <div className="w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[3fr_3fr_1fr] lg:grid lg:gap-x-8 lg:items-start">
          <div className="lg:col-span-1 w-full">
            <EmblaCarousel slides={SLIDES} />
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0 ">
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-1">
                <div className="sticky top-0">
                  <div className="">
                    <p className="text-xl font-semibold text-blue-600 ">
                      Samsung R6 Wireless 360° Multiroom Speaker
                    </p>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center">
                      <div className="flex space-x-1">
                        <StarRating initialRating={4} />
                      </div>
                      <span className="ml-2 text-gray-600">(3)</span>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center space-x-2 text-xl font-semibold">
                      <span className="text-black">$43.00</span>
                    </div>
                  </div>

                  <div className=" flex gap-4 text-sm text-gray-600">
                    <p className="  font-bold text-blue-600 hover:underline">
                      Shipping
                    </p>
                    : calculated at checkout.
                  </div>

                  <div className="text-sm space-y-2 mt-4">
                    <p>
                      <span className="font-bold">Type:</span> Speakers
                    </p>
                    <p>
                      <span className="font-bold">Tags:</span> Speakers
                    </p>
                    <p>
                      <span className="font-bold">Collections:</span>
                      <a
                        href="/collections/electronics"
                        className="text-blue-600 hover:underline"
                      >
                        Electronics
                      </a>
                      ,
                      <a
                        href="/collections/our-store"
                        className="text-blue-600 hover:underline"
                      >
                        Our Store
                      </a>
                      ,
                      <a
                        href="/collections/party-speakers"
                        className="text-blue-600 hover:underline"
                      >
                        Party Speakers
                      </a>
                      ,
                      <a
                        href="/collections/speakers"
                        className="text-blue-600 hover:underline"
                      >
                        Speakers
                      </a>
                      ,
                      <a
                        href="/collections/trending-collection"
                        className="text-blue-600 hover:underline"
                      >
                        Trending Collection
                      </a>
                    </p>
                    <p>
                      <span className="font-bold">Availability:</span> In Stock
                    </p>
                  </div>
                  <Separator className="my-2 h-[0.5px] bg-gray-200 w-full " />

                  <div>
                    <form className="">
                      <div>
                        <h3 className=" text-sm font-bold text-black">Color</h3>
                        <RadioGroup
                          //   value={selectedColor}
                          //   onChange={setSelectedColor}
                          className=" font-bold mt-2"
                        >
                          <Label className="sr-only">Choose a color</Label>
                          <div className="flex items-center space-x-3">
                            {product.colors.map((color: any) => (
                              <RadioGroup
                                key={color.name}
                                value={color}

                                //   classNames
                                //     color.selectedColor,
                                //     active && checked ? "ring ring-offset-1" : "",
                                //     !active && checked ? "ring-2" : "",
                                //     "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              >
                                <Label className="sr-only">{color.name}</Label>

                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    color.bgColor,
                                    "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                  )}
                                />
                              </RadioGroup>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <label
                      className="block text-lg font-medium"
                      htmlFor="Quantity"
                    >
                      Quantity
                    </label>
                    <div className="flex items-center mt-1">
                      <input
                        className="border border-gray-300 rounded w-16 text-center"
                        type="number"
                        name="quantity"
                        id="Quantity"
                        min="1"
                        value="1"
                      />
                      <div className="flex space-x-2 ml-2">
                        <button type="button" className="text-gray-500">
                          -
                        </button>
                        <button type="button" className="text-gray-500">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-2">
                    <Button className="!w-fit h-12 rounded-3xl bg-orange-300 text-white  py-3 px-8 flex items-center justify-center text-base font-medium sm:w-auto">
                      Add to cart
                    </Button>
                    <Button className="!w-fit h-12 rounded-3xl bg-gray-900  text-white hover:bg-orange-300 py-3 px-8 flex items-center justify-center text-base font-medium  sm:ml-90  sm:w-auto">
                      Buy it now
                    </Button>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger showIcon={false}></AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger showIcon={true}>
                      Shipping & Returns
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Separator className="my-10 h-[0.5px]  bg-gray-200 w-full " />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-star w-3/4 mt-8 ">
          <Button className="!w-fit h-14 rounded-3xl bg-orange-300   py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-50 sm:w-auto">
            Description
          </Button>
          <div>
            <div className="border border-gray-200 mt-3 rounded-xl">
              <p className="font-medium text-xs text-gray-400 p-8">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-10 h-[0.5px] bg-gray-200 w-full " />
      </div>
    </div>
  );
}
