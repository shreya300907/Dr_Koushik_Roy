"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { GraduationCap, Trophy } from "lucide-react";
import { Awards } from "@/data/awards";


const pageVariants:Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function AwardsPage(){
    return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-2 sm:p-6 flex flex-col gap-2 sm:gap-8"
    >

      <div className="flex flex-col border-b pb-1 sm:pb-2">
        <span className="text-fg text-[30px] sm:text-[50px] font-semibold font-newsreader leading-8 sm:leading-12">Dr. Koushik Roy</span>
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic mb-2">Awards and Honours</span>
        <div className="flex flex-row gap-2 items-center">
          <GraduationCap className="sm:w-10 sm:h-10 w-5 h-5 shrink-0" />
          <span className="text-primary-fg text-[13px] sm:text-[16px] font-hanken">Assistant Professor<br/> Civil & Environmental Engineering</span>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            {Awards.map((award) => (
                <div key={award.id} className="h-full transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                    <div className=" h-full px-1.5 sm:px-3 py-2 bg-white flex flex-row items-center gap-2.5 sm:gap-5 font-hanken border border-brd">
                        <Trophy className="sm:w-5 sm:h-5 w-3 h-3 text-hghlght-text shrink-0" />
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                        <div className="text-[14px] sm:text-[18px] text-black font-medium">
                            {award.title}
                        </div>
                        <div className="text-[12px] sm:text-[17px] text-hghlght-text font-bold">
                            {award.timeline}
                        </div>
                        <div className="text-[10px] sm:text-[14px] text-primary-fg">
                            {award.body}
                        </div>
                        </div>
                    </div>
                </div>
            ))}
          </motion.div>
      </AnimatePresence>
    </motion.div>
    );
}