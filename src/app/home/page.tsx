/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Progress } from "@/components/ui/progress";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import {
  Ship,
  Offer,
  Support,
  Certificate,
  Card,
  Chevron,
  Right,
  Left,
  Heart,
} from "@/assets/svg";

import {
  Belowfeaturedproductdata,
  featuredCollection,
  productdata,
  sliderdata,
  swipersidedata,
  Specialproducts,
  logoIMage,
  PopularCategories,
} from "./(components)/constants";

import Blog from "../blog/page";
import useCountdown from "@/hooks/useCountdownhook";
import { HoverCardDemo } from "./(components)/dropdown";
import ProductActions from "@/components/productdropdown";

function classNameNames(...classNamees: any) {
  return classNamees.filter(Boolean).join(" ");
}

const servicesdata = [
  {
    title: "Express Shipping ",
    name: "All Around the Globe",
    icon: <Ship classNameName="w-8 h-8 -mt-1" />,
  },
  {
    title: "Dialy Offers",
    name: "Save up to 20% off",
    icon: <Offer classNameName="w-8 h-8 -mt-1" />,
  },
  {
    title: "Suport 24/7",
    name: "Shop With an experts",
    icon: <Support />,
  },
  {
    title: "Garented featuredproductdata",
    name: "100% Original featuredproductdata",
    icon: <Certificate classNameName="w-8 h-8 -mt-1" />,
  },
  {
    title: "Secure Payment",
    name: "100% Secure Payment",

    icon: <Card classNameName="w-8 h-8 -mt-1" />,
  },
];

export default function home() {
  const sp = useCountdown(56);

  const pp = useCountdown(20);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fpRef = useRef(null);
  const frRef = useRef(null);

  return (
    <div className="">
      <div className="grid grid-rows-1 p-7 ">
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="relative rounded-xl w-full h-fit">
            <Swiper
              pagination={true}
              className="mySwiper "
              effect={"coverflow"}
              centeredSlides={false}
              loop={true}
              autoplay={true}
              grabCursor={false}
              slidesPerView={1}
              spaceBetween={0}
              modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                scale: 0.9,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                nextEl: ".previous-arrow-default",
                prevEl: ".next-arrow-default",
                disabledClass: "swiper-button-enabled",
              }}
              centeredSlidesBounds={true}
            >
              {sliderdata.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  id={"swiper-custom" + index}
                  className="relative text-black "
                >
                  <div className="flex justify-center ">
                    <div className="h-full">
                      <div>
                        <Image
                          src={slide.image}
                          alt="me"
                          width="1000"
                          height="800"
                          className="rounded-xl object-cover"
                        />

                        <div className="absolute top-10  left-2 flex flex-col justify-center  mx-4  space-y-3  ">
                          <p className="text-md font-normal text-base text-orange-600">
                            {slide.text}
                          </p>
                          <p className="font-bold text-3xl text-black">
                            {slide.title}
                          </p>
                          <p className="font-normal text-md text-gray-900">
                            {slide.description}
                          </p>
                          <p className="font-normal text-md text-gray-900">
                            For 24 mo. Footnote.
                          </p>
                          <Button
                            variant="default"
                            className="w-fit rounded-3xl bg-slate-800 "
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full h-fit grid grid-rows-1 ">
            <div className="grid grid-cols-2  gap-4 relative  ">
              {swipersidedata.map((slide, index) => (
                <>
                  <div className="relative rounded-xl w-full h-auto    ">
                    <div className=" overflow-hidden rounded-xl">
                      <Image
                        src={slide.image}
                        alt="me"
                        width="400"
                        height="200"
                        className="object-cover transition-transform duration-300 transform hover:scale-125 "
                      />
                    </div>
                    <div className="absolute top-10 left-2 flex flex-col justify-center  mx-4">
                      <p className="text-md font-normal text-base text-orange-600">
                        {slide.text}
                      </p>
                      <p className="font-bold text-3xl text-black">
                        {slide.title}
                      </p>
                      <p className="font-normal text-md text-gray-900">
                        {slide.price}
                      </p>
                      <p className="font-normal text-md text-gray-900">
                        For 24 mo. Footnote.
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100">
        <div className="grid grid-rows-1 grid-flow-col gap-4 h-auto w-full my-8 ">
          {servicesdata.map((item, i) => (
            <>
              <div className={` ${i + 1}   py-8`}>
                <div className="flex justify-center items-center text-black ">
                  <p className="mt-1">{item.icon}</p>
                  <div className="flex flex-col justify-start  mx-1 px-1 ">
                    <span className="text-sm font-semibold  text-black">
                      {item.title}
                    </span>
                    <span className=" mt-1 text-center  text-xs text-black">
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="py-8 px-8">
          <div className="grid grid-cols-5 p-6 rounded-md  bg-white ">
            {productdata.map((d, i) => (
              <>
                <div
                  className={`flex items-center  border-slate-100  p-6  ${
                    (i + 1) % 5 == 0 ? " border-0" : "border-r-2"
                  } ${i < 5 ? "border-b-2" : "border-0"}  `}
                >
                  <div className="flex flex-col w-full  !rounded-md  justify-start mx-1 px-1 ">
                    <p className="font-semibold text-base text-black">
                      {d.name}
                    </p>
                    <p className="text-xs text-slate-500">items {d.items}</p>
                  </div>
                  <Image
                    src={d.imageSrc}
                    alt="me"
                    width="100"
                    height="100"
                    className="flex w-12 h-10  object-cover transition-transform duration-300 transform hover:scale-125"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* ///////////fetured////////////// */}

        <div className="grid grid-rows-1 gap-4 h-auto px-4 w-full mt-4 mb-10">
          <div className="flex justify-between">
            <p className="flex justify-start ml-4 items-start text-xl font-semibold text-black">
              Featured Collection
            </p>
            <div className="flex mx-2">
              <div ref={fpRef} className="cursor-pointer">
                <Left className="text-slate-500 w-6 h-6" />
              </div>
              <div ref={frRef} className="cursor-pointer">
                <Right className="text-slate-500 w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden sm:px-4">
            {/* <div className="grid grid-cols-1 gap-4 sm:mx-0 md:grid-cols-3 lg:grid-cols-6"> */}

            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              pagination={{ clickable: false }}
              navigation={{
                prevEl: fpRef.current,
                nextEl: frRef.current,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {featuredCollection.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="group relative border border-gray-200 shadow-md shadow-gray-200 w-full rounded-md bg-white sm:p-2"
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
                </SwiperSlide>
              ))}
            </Swiper>
            {/* </div> */}
          </div>
        </div>
        {/* //////////////////////////////////////////////////// */}

        <div className="grid grid-rows-1 gap-4 h-auto px-4 w-full mt-10 mb-10  ">
          <div className="w-full overflow-hidden sm:px-4 ">
            <div className="grid grid-cols-1 gap-6 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {Belowfeaturedproductdata.map((product, index) => (
                <>
                  <div
                    className={`${
                      index === 0
                        ? "bg-black text-white "
                        : "bg-white text-black"
                    } group relative p-4 border border-gray-200  shadow-md shadow-gray-200 rounded-md  sm:p-6`}
                  >
                    <div className=" flex flex-col justify-start space-y-2  ">
                      <h3 className="text-md font-semibold line-clamp-1">
                        {product.name}
                      </h3>

                      <h1 className="text-2xl font-semibold  line-clamp-1">
                        {product.des}
                      </h1>
                      <p className="text-sm font-light line-clamp-2">
                        {product.price}
                      </p>
                    </div>
                    <div>
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width="300"
                        height="300"
                        className="justify-center items-center mx-auto object-cover "
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* //////////////special product//////// */}

        <div className="grid grid-rows-1 gap-4 h-auto px-4 w-full mt-10 mb-10  ">
          <div className="w-full overflow-hidden sm:px-4 ">
            <div className="flex justify-between my-4">
              <div>
                <p className="flex justify-start items-start text-xl  font-semibold text-black">
                  Special Products
                </p>
              </div>
              <div className="flex mx-2">
                <div ref={prevRef} className="cursor-pointer">
                  <Left className="text-slate-500 w-6 h-6" />
                </div>
                <div ref={nextRef} className="cursor-pointer">
                  <Right className="text-slate-500 w-6 h-6" />
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-3 lg:grid-cols-3"> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{ clickable: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Specialproducts.map((product, index) => (
                <>
                  <SwiperSlide key={index}>
                    <div className=" rounded-lg border bg-white shadow-md p-4">
                      <div className="flex w-full justify-between   ">
                        <span className="bg-orange-400 w-10 h-4 text-black text-xs font-xs px-1 rounded-full text-center">
                          {product.discount}
                        </span>
                        <Heart className="w-4 h-4" />
                      </div>

                      <div className="flex justify-between  my-2">
                        <div className="flex flex-col  items-center">
                          <Image
                            src={product.src}
                            alt="uuu"
                            width="100"
                            height="100"
                            className=" mx-auto  object-contain"
                          />
                        </div>

                        <div className="ml-4">
                          <div className="text-xs text-gray-500">
                            {product.brand}
                          </div>
                          <div className="font-semibold text-sm">
                            {product.description}
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="text-yellow-400 text-sm">★★★★★</div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <span className="text-red-600 font-bold text-lg">
                              {product.currentPrice}
                            </span>
                            <span className="text-gray-500 line-through ml-2">
                              {product.originalPrice}
                            </span>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="text-gray-500 text-xs">
                              742 Days
                            </div>
                            <div className="flex ml-2 items-center text-red-600 text-xs">
                              <div className="bg-gray-100 rounded px-1">
                                {sp.hours}
                              </div>
                              <div className="px-1">:</div>
                              <div className="bg-gray-100 rounded px-1">
                                {sp.minutes}
                              </div>
                              <div className="px-1">:</div>
                              <div className="bg-gray-100 rounded px-1">
                                {sp.seconds}
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-500 text-xs mt-2">
                            {product.productsLeft}
                          </div>

                          <Progress value={10} className="w-full h-2" />
                          <Button className="mt-4 w-auto px-4 bg-slate-800  text-white rounded-full py-1">
                            OPTION
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
            {/* </div> */}
          </div>
        </div>
        {/* //////////////our popular  product//////// */}

        <div className="grid grid-rows-1 gap-4 h-auto px-4 w-full mt-10 mb-10  ">
          <div className="w-full overflow-hidden sm:px-4 ">
            <div className="flex justify-between my-4">
              <p className="flex justify-start  items-start text-xl  font-semibold text-black">
                Our Popular Products
              </p>
              <div className="flex mx-2 ">
                <Left className=" text-slate-500 w-6 h-6 " />
                <Right className="  text-slate-500 w-6 h-6  " />
              </div>
            </div>
            <div className="grid  gap-4 grid-cols-[1fr_1fr_4fr] ">
              <div className="bg-white rounded-lg gap-4 ">
                {PopularCategories.map((category, index) => (
                  <>
                    <div
                      className=" flex p-2  bg-white hover:bg-zinc-100 rounded-lg"
                      key={index}
                    >
                      <Image
                        src={category.src}
                        alt="Samsung Galaxy Note10+"
                        width="50"
                        height="50"
                        className="w-auto h-auto object-contain  "
                      />
                      <p className="font-semibold text-sm mt-4 ml-8 text-gray-500 hover:text">
                        {category.name}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <div className="bg-red-500  rounded-lg">
                <Image
                  src="/products/ppp1.jpg"
                  alt="Samsung Galaxy Note10+"
                  width="600"
                  height="1700"
                  className="object-cover  rounded-lg "
                />
              </div>

              <div className="overflow-hidden ">
                {/* <div className="grid grid-cols-1 gap-4 sm:mx-0 md:grid-cols-3 lg:grid-cols-6"> */}

                <Swiper
                  slidesPerView={4}
                  spaceBetween={15}
                  pagination={{ clickable: false }}
                  navigation={{
                    prevEl: fpRef.current,
                    nextEl: frRef.current,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {featuredCollection.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      className="group relative border border-gray-200 shadow-md shadow-gray-200 w-full rounded-md bg-white sm:p-2"
                    >
                      <div className="flex justify-between border-red-500">
                        <div className="bg-red-500 text-white text-xs w-auto h-fit font-xs  rounded-md p-1 ">
                          Sold out
                        </div>

                        <ProductActions />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-wite group-hover:opacity-75">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width="100"
                          height="100"
                          className=" flex justify-center items-center mx-auto !bg-white object-contain transition-transform duration-300 transform hover:scale-125"
                        />
                        <div className="pt-10 pb-4 px-2 flex flex-col justify-start space-y-1">
                          <p className="font-medium text-sm text-orange-400">
                            Sony
                          </p>
                          <div className="flex items-center mt-1">
                            <div className="text-yellow-400 text-sm">★★★★★</div>
                          </div>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* </div> */}
              </div>
            </div>

            {/* <div className="flex ">
              <div className="flex flex-col rounded-lg"></div>
            </div> */}

            {/* <div className="grid grid-cols-1 gap-4 my-4 sm:mx-0 md:grid-cols-4 lg:grid-cols-6">
              <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
                <div className="flex justify-between  border-red-500 ">
                  <div className="bg-orange-400 text-black text-xs  w-10 h-4 font-xs px-1 rounded-full text-center">
                    -30%
                  </div>
                  <Heart className="w-4 h-4" />
                </div>
                <Image
                  src="/products/came.webp"
                  alt="Samsung Galaxy Note10+"
                  className="w-full rounded-t-lg"
                  width="100"
                  height="100"
                />
                <div className="mt-4">
                  <div className="text-xs text-gray-500">Havells</div>
                  <div className="font-semibold text-sm">
                    Samsung Galaxy Note10+ Mobile Phone; Sim...
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-red-600 font-bold text-lg">
                      $60.00
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      $75.00
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="text-gray-500 text-xs">742 Days</div>
                    <div className="flex ml-2 items-center text-red-600 text-xs">
                      <div className="bg-gray-100 rounded px-1">{pp.hours}</div>
                      <div className="px-1">:</div>
                      <div className="bg-gray-100 rounded px-1">
                        {pp.minutes}
                      </div>
                      <div className="px-1">:</div>
                      <div className="bg-gray-100 rounded px-1">
                        {pp.seconds}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs mt-2">Products: 5</div>

                  <button className="mt-4 w-full bg-slate-800  text-white rounded-full py-2">
                    OPTION
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* ////////////////////////////logosection///////////////////////// */}
        <div className="grid grid-rows-1 gap-4 px-4   mx-8  rounded-md  py-8  bg-white  ">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7  ">
            {logoIMage.map((item: any, index: any) => (
              <>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    height="100"
                    width="100"
                    src={item.imagesrc}
                    className="w-24 h-24"
                    alt="Tuple"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        {/* /////////////////////////////////////blo................///////////////////////// */}
        <div className="grid grid-rows-1 gap-4 px-4   mx-8  rounded-md  py-8  bg-slate-  "></div>
        <Blog />
      </div>
    </div>
  );
}
