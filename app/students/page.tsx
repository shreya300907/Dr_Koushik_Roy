"use client"

import StudentCard from "@/components/studentCard";
import { Alumini, Scholars } from "@/data/students";
import { AnimatePresence, motion } from "framer-motion"


const pageVariants = {
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

export default function Report(){
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
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic">Students & Alumini</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-primary-fg text-[13px] sm:text-[16px] font-hanken">Assistant Professor<br/> Civil & Environmental Engineering</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 sm:gap-8 mb-2 sm:mb-5">
                <div className="text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
                    Current Scholars
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4"
                        >
                        {Scholars.map((s) => (
                            <div key={s.id} className="h-full border border-brd rounded-sm transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                                <StudentCard student={s}/>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8  mb-5">
                <div className="text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
                    Alumini
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4"
                        >
                        {Alumini.map((s) => (
                            <div key={s.id} className="h-full border border-brd rounded-sm transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                                <StudentCard student={s}/>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
      </div>
    </motion.div>
    );
}