"use client";

import { Container, Text, Box,Flex } from "@radix-ui/themes";

// export default function Certificates(){
//     return (

//     )
// }

import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index: any) => {
    const items = document.querySelectorAll("[data-carousel-item]");
    items.forEach((item, i) => {
      item.classList.toggle("duration-700", i === index);
      item.classList.toggle("ease-in-out", i === index);
      item.classList.toggle("opacity-0", i !== index);
      item.classList.toggle("absolute", i !== index);
    });
  };

  const updateCarousel = () => {
    showItem(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming 5 items in the carousel
    updateCarousel();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex+5 - 1) % 5); // Assuming 5 items in the carousel
    updateCarousel();
  };
  return (
    <>
      <Container size={"4"} className="h-auto" id="certificates">
        <Text as="p" className="italic text-3xl font-semibold" align={"center"}>
          Certificates
        </Text>
        <Flex align={'center'} justify={'center'} mt={'5'}>
          <div
            id="controls-carousel"
            className="h-[60%] w-[60%] relative"
            data-carousel="static"
          >
            <div className="relative overflow-hidden">
              <div
                className="duration-700 ease-in-out w-full"
                data-carousel-item
              >
                <Image
                  src={"/certificates/tcs.png"}
                  className=" block w-full h-full "
                  width={"100"}
                  height={"0"}
                  layout="responsive"
                  alt="image"
                />
              </div>
              <div
                className="duration-700 ease-in-out w-full absolute"
                data-carousel-item
              >
                <Image
                  src={"/certificates/sl.png"}
                  className=" block w-full h-full"
                  width={"100"}
                  height={"0"}
                  layout="responsive"
                  alt="image"
                />
              </div>
              
              <div
                className="duration-700 ease-in-out w-full absolute"
                data-carousel-item
              >
                <Image
                  src={"/certificates/restapi.png"}
                  className=" block w-full h-full"
                  alt="image"
                  width={"100"}
                  height={"0"}
                  layout="responsive"
                />
              </div>
              <div
                className="duration-700 ease-in-out w-full absolute"
                data-carousel-item
              >
                <Image
                  src={"/certificates/Foundation.png"}
                  className=" block w-full h-full"
                  alt="image"
                  width={"100"}
                  height={"0"}
                  layout="responsive"
                />
              </div>
              <div
                className="duration-700 ease-in-out w-full absolute"
                data-carousel-item
              >
                <Image
                  src={"/certificates/ps(basic).png"}
                  className=" block w-full h-full"
                  alt="image"
                  width={"100"}
                  height={"0"}
                  layout="responsive"
                />
              </div>

              {/* Buttons */}
              <button
                type="button"
                className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
}
