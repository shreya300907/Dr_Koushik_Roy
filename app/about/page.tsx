"use client"
import Education from "@/components/education";
import { Extracurricular } from "@/data/extra";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Circle, Mail, Phone, School } from "lucide-react";
import Image from "next/image";

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


export default function About(){
    return(
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="sm:p-6 p-2 gap-4 sm:gap-8 flex flex-col"
            >
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 px-2 sm:px-4 py-4 sm:py-8 items-center w-full bg-primary-bg border border-brd rounded-lg">
                <div className="relative sm:w-[400px] w-[200px] aspect-square">
                    <Image 
                        src="/profile2.png" 
                        alt="Profile Image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-fg text-[35px] sm:text-[65px] md:text-[70px] font-semibold font-newsreader ">Dr. Koushik Roy</span>
                    <span className="text-hghlght-text text-[18px] sm:text-[18px] md:text-[30px] font-medium font-newsreader italic">Assistant Professor</span>
                    <span className="text-black text-[14px] sm:text-[14px] md:text-[25px] font-hanken font-medium">Civil & Environmental Engineering</span>
                    <span className="text-black text-[14px] sm:text-[14px] md:text-[25px] font-hanken font-medium mb-2">Indian Institute of Technology Patna, Bihta, India- 801103</span>
                    <div className="flex flex-row gap-2 items-center">
                        <School className="w-4 h-4 sm:w-4 sm:h-4 text-primary-fg shrink-0" />
                        <span className="text-primary-fg text-[12px] md:text-[20px] font-hanken">Ph.D (IIT Kanpur 2015), M.Tech (IIT Roorkee 2010), B.E. (BESU, Shibpur 2008)</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Mail className="w-4 h-4 sm:w-4 sm:h-4 text-primary-fg shrink-0" />
                        <span className="text-primary-fg text-[12px] md:text-[20px] font-hanken">koushik@iitp.ac.in<br/> koushikbesus@gmail.com</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Phone className="w-4 h-4 sm:w-4 sm:h-4 text-primary-fg shrink-0 " />
                        <span className="text-primary-fg text-[12px] md:text-[20px] font-hanken">+91-6115233197</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <CalendarDays className="w-4 h-4 sm:w-4 sm:h-4 text-primary-fg shrink-0 " />
                        <span className="text-primary-fg text-[12px] md:text-[20px] font-hanken">2nd March 1987</span>
                    </div>
                </div>
            </div> 
            <div>
                <div className="sm:mb-8 text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
                Education 
                </div>
                <Education/>
            </div>
            <div className="flex flex-col p-3 sm:p-4 bg-white gap-1 sm:gap-3 border-1 border-brd rounded-md">
                <div className={`flex flex-row gap-2 text-fg text-[14px] sm:text-[16px] items-center font-medium font-hanken uppercase`} >
                    Professional Experience
                </div>
                <div className="flex  flex-col gap-1 ">
                    <div className="text-[12px] sm:text-[15px] text-hghlght-text font-bold">
                    2014-2015
                    </div>
                    <div className="flex flex-col">
                        <div className="text-black text-[12px] sm:text-[15px] font-semibold">
                            Project Engineer
                        </div>
                        <div className="text-primary-fg text-[11px] sm:text-[13px]">
                            Smart Materials, Structures and Systems Laboratory, Dept. of Mechanical Engineering, IIT Kanpur, India - 208016 
                        </div>
                    </div>
                </div>
                <div className="flex  flex-col gap-1 ">
                    <div className="text-[12px] sm:text-[15px] text-hghlght-text font-bold">
                    2015-Present
                    </div>
                    <div className="flex flex-col">
                        <div className="text-black text-[12px] sm:text-[15px] font-semibold">
                            Assistant Professor
                        </div>
                        <div className="text-primary-fg text-[11px] sm:text-[13px]">
                            Department of Civil and Environmental Engineering, IIT Patna, India - 801103
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="sm:mb-8 mb-4 text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
                Extracurricular 
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-3 ">
                    {Extracurricular .map((title) => (
                        <div key={title}>
                        <div className="h-full px-3 py-2 bg-white flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken border border-brd text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                            <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current shrink-0" />
                            {title}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col p-3 sm:p-4 bg-white gap-1 sm:gap-3 border-1 border-brd rounded-md">
                <div className={` text-fg text-[14px] sm:text-[16px] items-center font-medium font-hanken uppercase`} >
                    Languages Known
                </div>
                <div className="flex flex-col gap-1">
                    <div className="h-full px-3 flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                        <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current shrink-0" />
                        Bengali
                    </div>
                    <div className="h-full px-3   flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                        <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current shrink-0" />
                        English
                    </div>
                    <div className="h-full px-3 flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                        <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current shrink-0" />
                        German (speaking and reading)
                    </div>
                    <div className="h-full px-3 flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                        <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current shrink-0" />
                        Hindi (reading and speaking)
                    </div>
                </div>
            </div>
        </motion.div>
    );
}