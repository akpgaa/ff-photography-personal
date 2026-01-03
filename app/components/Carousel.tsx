"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import images from "../../lib/images";
import Image, { StaticImageData } from "next/image";

function Carousel({
  title = "",
  images = [],
}: {
  title: string;
  images: StaticImageData[];
}) {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, [carousel]);

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (carousel.current) {
      carousel.current.style.cursor = "grabbing";
      carousel.current.style.userSelect = "none";
      const startX = event.pageX - carousel.current.offsetLeft;
      let scrollLeft = carousel.current.scrollLeft;

      const handleMouseMove = (event: MouseEvent) => {
        if (carousel.current) {
          const x = event.pageX - carousel.current.offsetLeft;
          const walk = (x - startX) * 2;
          carousel.current.scrollLeft = scrollLeft - walk;
        }
      };

      const handleMouseUp = () => {
        if (carousel.current) {
          carousel.current.style.cursor = "grab";
          carousel.current.style.removeProperty("user-select");
          carousel.current.removeEventListener("mousemove", handleMouseMove);
          carousel.current.removeEventListener("mouseup", handleMouseUp);
        }
      };

      carousel.current.addEventListener("mousemove", handleMouseMove);
      carousel.current.addEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div className="mt-8" key={title}>
      <p className="font-ovo text-2xl text-gray-600 hover:text-black hover:drop-shadow transition duration-200">
        {title}
      </p>

      <motion.div
        ref={carousel}
        className=" cursor-grab overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseUp={() => {
          if (carousel.current) {
            carousel.current.style.cursor = "grab";
            carousel.current.style.removeProperty("user-select");
          }
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-2 shadow"
        >
          {images.map((image: StaticImageData, index: number) => {
            return (
              <motion.div className="  " key={index}>
                <Image
                  className="max-w-xs lg:max-w-sm 2xl:max-w-md"
                  src={image}
                  alt="photography example"
                  height={400}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <p className="text-xs lg:text-base text-gray-400 italic flex flex-row items-center gap-2">
        Swipe{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
      </p>
    </div>
  );
}

export default Carousel;
