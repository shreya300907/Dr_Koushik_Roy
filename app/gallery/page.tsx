"use client"

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeInOut" } },
};

interface AutoImageProps {
  images: string[];
  interval: number; 
  className?: string;
}

function AutoSwappingImage({ images, interval, className = "" }: AutoImageProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt="Gallery item"
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const groupA =["/gallery/p13.png", "/gallery/p16.png", "/gallery/p17.png"] ;
const groupB = ["/gallery/p9.png", "/gallery/p11.png", "/gallery/p12.png"];
const groupC = ["/gallery/p2.avif", "/gallery/p3.jpg", "/gallery/p4.avif", "/gallery/p5.avif","/gallery/p14.png", "/gallery/p15.png"];
const groupD = ["/gallery/p1.avif", "/gallery/p7.png",  "/gallery/p6.jpg", "/gallery/p10.png"];
const groupE = [ "/gallery/p8.png", "/gallery/p18.png"];

export default function Report() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-2 sm:px-8 sm:py-10 flex flex-col gap-4 sm:gap-8"
    >
      <div className="flex flex-col border-b pb-4 sm:pb-5">
        <span className="text-fg text-[30px] sm:text-[50px] font-semibold font-newsreader leading-8 sm:leading-12">Dr. Koushik Roy</span>
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic">Gallery</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-primary-fg text-[13px] sm:text-[16px] font-hanken">Assistant Professor<br /> Civil & Environmental Engineering</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-4">
        <div className="flex flex-row gap-2 sm:gap-4">
          <AutoSwappingImage 
            images={groupA} 
            interval={4000} 
            className="w-[48vw] sm:w-[40vw] aspect-square bg-zinc-900 shrink-0 rounded-lg"
          />
          <AutoSwappingImage 
            images={groupB} 
            interval={5500} 
            className="w-[35vw] h-[48vw] sm:w-[30vw] sm:h-[40vw] bg-zinc-900 shrink-0 rounded-lg"
          />
        </div>
        <AutoSwappingImage 
          images={groupC} 
          interval={7000} 
          className="w-[82vw] sm:w-[70vw] h-[35vw] sm:h-[25vw] bg-zinc-900 rounded-lg"
        />

        <div className="flex flex-row gap-2 sm:gap-4 w-[70vw]">
          <AutoSwappingImage 
            images={groupD} 
            interval={4800} 
            className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] bg-zinc-900 shrink-0 rounded-lg"
          />
          <AutoSwappingImage 
            images={groupE} 
            interval={6200}
            className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] bg-zinc-900 shrink-0 rounded-lg"
          />
        </div>

      </div>
    </motion.div>
  );
}