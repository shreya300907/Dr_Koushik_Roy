"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { Reports } from "@/data/report";
import ReportDiv from "@/components/report";


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

export default function Report(){
    return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-2 sm:px-8 sm:py-10 pflex flex-col gap-2 sm:gap-8"
    >

      <div className="flex flex-col border-b pb-2 sm:pb-5">
        <span className="text-fg text-[30px] sm:text-[50px] font-semibold font-newsreader leading-8 sm:leading-12">Dr. Koushik Roy</span>
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic">Reports/Thesis</span>
        <div className="flex flex-row gap-2 items-center">
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
            {Reports.map((c) => (
                <div key={c.id} className="h-full transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                    <ReportDiv report={c}/>
                </div>
            ))}
          </motion.div>
      </AnimatePresence>
    </motion.div>
    );
}