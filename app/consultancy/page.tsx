"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { ClipboardCheck, GraduationCap, Search } from "lucide-react";
import { Consultancies } from "@/data/consultancy";
import { researchGrant } from "@/data/researchGrant";


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

export default function Consultancy(){
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
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic mb-2">Consultancy</span>
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
            {Consultancies.map((c) => (
                <div key={c.id} className="h-full transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                    <div className=" h-full px-1.5 sm:px-3 py-2 bg-white flex flex-row items-center gap-2.5 sm:gap-5 font-hanken border border-brd">
                        <ClipboardCheck  className="sm:w-5 sm:h-5 w-3 h-3 text-hghlght-text shrink-0" />
                        <div className="flex flex-col gap-0.5 sm:gap-1">
                            <div className="font-hanken font-bold text-[15px] sm:text-[18px] text-black leading-6.5">
                                {c.title}
                            </div>
                            <div className="font-haken italic font-normal text-[12px] sm:text-[14px] text-[#1B1B1F] mb-1.5"> 
                                {c?.client}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </motion.div>
      </AnimatePresence>
      <div className="flex flex-col sm:gap-6 gap-3 mb-5">
          <div className="text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
            Research Grant
          </div>
          <div>
            {researchGrant.map((r)=>(
                <div key={r} className="h-full transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                <div className=" h-full px-1.5 sm:px-3 py-2 bg-white flex flex-row items-center gap-2.5 sm:gap-5 font-hanken border border-brd">
                    <Search className="sm:w-5 sm:h-5 w-3 h-3 text-hghlght-text shrink-0" />
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                    <div className="text-[14px] sm:text-[18px] text-black font-medium">
                        {r}
                    </div>
                    </div>
                </div>
                </div>
            ))}
          </div>
      </div>
    </motion.div>
    );
}