"use client";
import { ArrowRight, Award, Briefcase, Presentation, School, Trophy } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone, Circle, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { researchAreas } from "@/data/research";
import { pgCourses, ugCourses } from "@/data/courses";
import { useEffect, useState } from "react";
import { depa, institute } from "@/data/exp";
import { Awards } from "@/data/awards";
import { Journals } from "@/data/journals";
import JournalDiv from "@/components/journal";
import { Conferences } from "@/data/conferences";
import ConferenceDiv from "@/components/conference";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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

export default function Home() {
  const [ugc, setUgc] = useState(false);
  const [pgc, setPgc] = useState(false);
  const [dep, setDep] = useState(false);
  const [insti, setInsti] = useState(false);
  const [selected, setSelected] = useState<"j" | "c">("j");

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = [
    "https://academics.iitp.ac.in/images/homeslider/2.jpg","https://www.iitp.ac.in/images/campus/Amenities/ic.png","https://image-static.collegedunia.com/public/dashboard_upload/1770042384_WhatsAppImage2025-12-18at17.18.31(1).jpeg","https://preview.redd.it/72o3c0cef8if1.jpg?width=640&crop=smart&auto=webp&s=011dd05040d6040dc53ec5dc445ad49f5668ad27","https://cdn.masaischool.com/general/MIT_Building_1.webp-1770344158373-1770344158773.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sm:p-6 p-2 gap-4 sm:gap-8 flex flex-col"
    >
      <div className="relative w-full bg-primary-bg border border-brd rounded-lg">
        <div className="relative w-full h-[120px] md:h-[350px] overflow-hidden bg-primary-bg rounded-t-lg">
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((src,idx) => (
              <div key={idx} className="w-full sm:h-full flex-shrink-0 rounded-t-lg">
                <img 
                  src={src} 
                  alt="campus" 
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-[10px] md:bottom-[35px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-all ${
                  currentIndex===idx ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 w-full px-3 sm:px-20 pb-6 flex flex-col -mt-[50px] md:-mt-[100px] items-start md:gap-6">
          
          <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-primary-bg p-1 md:p-2 shadow-lg flex-shrink-0">
            <img
              src="/profile.jpg" 
              alt="Dr. Koushik Roy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-fg text-[30px] sm:text-[45px] md:text-[50px] font-semibold font-newsreader ">Dr. Koushik Roy</span>
            <span className="text-hghlght-text text-[18px] sm:text-[18px] md:text-[20px] font-medium font-newsreader italic">Assistant Professor</span>
            <span className="text-black text-[14px] sm:text-[14px] md:text-[16px] font-hanken font-medium">Civil & Environmental Engineering</span>
            <span className="text-black text-[14px] sm:text-[14px] md:text-[16px] font-hanken font-medium mb-2">Indian Institute of Technology Patna, Bihta, India- 801103</span>
            <div className="flex flex-row gap-2 items-center">
              <School className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary-fg shrink-0" />
              <span className="text-primary-fg text-[12px] md:text-[14px] font-hanken">Ph.D (IIT Kanpur 2015), M.Tech (IIT Roorkee 2010), B.E. (BESU, Shibpur 2008)</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Mail className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary-fg shrink-0" />
              <span className="text-primary-fg text-[12px] md:text-[14px] font-hanken">koushik@iitp.ac.in</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Phone className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary-fg shrink-0 " />
              <span className="text-primary-fg text-[12px] md:text-[14px] font-hanken">+91-6115233197</span>
            </div>
          </div>

        </div>

      </div>

      <div>
        <div className="text-fg text-[25px] sm:text-[30px] font-semibold font-newsreader border-l-6 border-hghlght-text mb-5">
          &nbsp;&nbsp;Research Interests
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 sm:gap-y-3 ">
          {researchAreas.map((title) => (
            <div key={title}>
              <div className="px-3 py-2 bg-white flex flex-row items-center sm:gap-3 gap-2 text-[14px] sm:text-[16px] font-hanken border border-brd text-primary-fg transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
                <Circle className="sm:w-2 sm:h-2 w-1.5 h-1.5 fill-current" />
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-fg text-[25px] sm:text-[30px] font-semibold font-newsreader border-l-6 border-hghlght-text mb-5">
          &nbsp;&nbsp;Courses Taught
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="px-2 sm:px-5 py-3 bg-[#ededf5] border-brd border rounded-xl w-full ">
            <div
              className={`flex flex-row text-fg justify-between text-[14px] sm:text-[16px] cursor-pointer items-center font-medium font-hanken ${
                ugc ? "border-b-2 border-[#d9d9e1] pb-2" : ""
              } uppercase`}
              onClick={() => setUgc(!ugc)}
            >
              <div className="gap-2 flex flex-row items-center">
                <GraduationCap />
                Undergraduate Courses
              </div>

              <motion.div
                animate={{ rotate: ugc ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {ugc ? <ChevronUp /> : <ChevronDown />}
              </motion.div>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: ugc ? "auto" : 0,
                opacity: ugc ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-2 mt-3">
                {ugCourses.map((courses) => (
                  <motion.div
                    key={courses}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[12px] sm:text-[15px] font-medium font-hanken text-primary-fg"
                  >
                    {courses}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="px-2 sm:px-5 py-3 bg-[#ededf5] border border-brd rounded-xl w-full">
            <div
              className={`flex flex-row justify-between text-fg text-[14px] sm:text-[16px] cursor-pointer items-center font-medium font-hanken ${
                pgc ? "border-b-2 border-[#d9d9e1] pb-2" : ""
              } uppercase`}
              onClick={() => setPgc(!pgc)}
            >
              <div className="flex flex-row gap-2 items-center">
                <Award />
                Postgraduate Courses
              </div>

              <motion.div
                animate={{ rotate: pgc ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {pgc ? <ChevronUp /> : <ChevronDown />}
              </motion.div>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: pgc ? "auto" : 0,
                opacity: pgc ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-2 mt-3">
                {pgCourses.map((courses) => (
                  <motion.div
                    key={courses}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[12px] sm:text-[15px] font-medium font-hanken text-primary-fg"
                  >
                    {courses}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col p-3 sm:p-4 bg-white gap-1 sm:gap-3 border-1 border-brd rounded-md">
          <div className={`flex flex-row gap-2 text-fg text-[14px] sm:text-[16px] items-center font-medium font-hanken uppercase`} >
            <Briefcase />
            Professional Experience
          </div>
          <div className="flex sm:flex-row flex-col gap-1 sm:gap-5">
            <div className="text-[12px] sm:text-[15px] text-hghlght-text font-bold">
              2014-2015
            </div>
            <div className="flex flex-col">
              <div className="text-black text-[12px] sm:text-[15px] font-semibold">
                Project Engineer
              </div>
              <div className="text-primary-fg text-[11px] sm:text-[13px]">
                Smart Materials, Structures and Systems Laboratory, Dept. of Mechanical Engineering, IIT Kanpur
              </div>
            </div>
          </div>
        </div>
        <div className="text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
          Administrative Experience
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="px-2 sm:px-5 py-3 bg-[#ededf5] border-brd border rounded-xl w-full ">
            <div className={`flex flex-row text-fg justify-between text-[14px] sm:text-[16px] cursor-pointer items-center font-medium font-hanken ${dep ? "border-b-2 border-[#d9d9e1] pb-2" : ""} uppercase `} onClick={() => setDep(!dep)}>
              <div>
                Department Level
              </div>
              <motion.div
                animate={{ rotate: dep ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {dep ? <ChevronUp /> : <ChevronDown />}
              </motion.div>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: dep ? "auto" : 0,
                opacity: dep ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
                {depa.map((courses) => (
                  <motion.li
                    key={courses}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[12px] sm:text-[15px] font-medium font-hanken text-primary-fg"
                  >
                    {courses}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="px-3 sm:px-5 py-3 bg-[#ededf5] border-brd border rounded-xl w-full ">
            <div className={`flex flex-row justify-between text-fg text-[14px] sm:text-[16px] cursor-pointer items-center font-medium font-hanken ${insti ? "border-b-2 border-[#d9d9e1] pb-2" : ""} uppercase`} onClick={() => setInsti(!insti)}>
              <div>
                Institute Level
              </div>
              <motion.div
                animate={{ rotate: insti ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {insti ? <ChevronUp /> : <ChevronDown />}
              </motion.div>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: insti ? "auto" : 0,
                opacity: insti ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-3">
                {institute.map((courses) => (
                  <motion.li
                    key={courses}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[12px] sm:text-[15px] font-medium font-hanken text-primary-fg"
                  >
                    {courses}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-fg text-[25px] sm:text-[30px] font-semibold font-newsreader border-l-6 border-hghlght-text">
          &nbsp;&nbsp;Awards & Honours
        </div>
        <div className="grid grid-cols-1 gap-y-3 mt-5 ">
          {Awards.slice(0,3).map((award) => (
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
          <Link href="/awards&honours">
          <div className="flex flex-row font-hanken gap-1 sm:gap-2 text-[12px] sm:text-[16px] text-fg text-center w-full mt-4 justify-center cursor-pointer hover:underline" >
            <div>
              View All Awards & Honours
            </div>
            <ArrowRight className="sm:h-6 sm:w-6 h-4 w-4"/>
          </div>
        </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-4 ">
        <div className="flex flex-row gap-1 sm:gap-2 px-1 text-fg uppercase font-semibold sm:font-bold text-[16px] sm:text-[20px] items-center">
          <Presentation className="sm:w-5 sm:h-5 w-4 h-4"/>
          <div>Professional Memberships</div>
        </div>
        <div className="px-3 sm:px-5 py-2 sm:py-3 bg-[#ededf5] border-brd border rounded-lg sm:rounded-xl w-full text-black text-[12px] sm:text-[16px] font-hanken ">
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-3 items-center ">
              <Circle className="w-1.5 h-1.5 fill-current text-hghlght-text shrink-0" />
              Member, Task Force, Housing for All Scheme, Ministry of Housing and Urban Poverty Alleviation, Govt. of India(2015-16)
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Circle className="w-1.5 h-1.5 fill-current text-hghlght-text shrink-0" />
              Expert member on Structural Engineering, State Technical Agency, Pradhan Mantri Gram Sadak Yojana - 2020
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Circle className="w-1.5 h-1.5 fill-current text-hghlght-text shrink-0" />
              Lifetime member (LM 1904) of Indian Society of Earthquake Technology (Reg. No. 845/64-65)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 items-center justify-between mb-5">
          <div className="text-fg text-[25px] sm:text-[30px] pl-3 sm:pl-4 py-1 font-semibold font-newsreader border-l-6 border-hghlght-text">
            Publications & Conferences
          </div>
          <div className="flex flex-row gap-4 sm:gap-2">
            <button className={`${selected == "j" ? "bg-fg text-bg" : "bg-bg text-fg "} px-3 py-1 text-[18px] sm:text-[20px] border-1 cursor-pointer border-brd h-full font-hanken rounded-xs sm:h-fit`} onClick={() => setSelected("j")}>
              Journals
            </button>
            <button className={`${selected == "c" ? "bg-fg text-bg" : "bg-bg text-fg"} px-3 py-1 border-1 cursor-pointer border-brd text-[18px] sm:text-[20px] h-full font-hanken rounded-xs sm:h-fit`} onClick={() => setSelected("c")}>
              Conferences
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {selected == "j" ? (
            <motion.div
              key="journals"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {Journals.slice(0, 4).map((j) => (
                <JournalDiv key={j.id} journal={j} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="conferences"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {Conferences.slice(0, 4).map((c) => (
                <ConferenceDiv key={c.id} conference={c} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <Link href="/publications">
          <div className="flex flex-row font-hanken gap-1 sm:gap-2 text-[12px] sm:text-[16px] text-fg text-center w-full mt-4 justify-center cursor-pointer hover:underline" >
            <div>
              View All Journals and Conferences
            </div>
            <ArrowRight className="sm:h-6 sm:w-6 h-4 w-4"/>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}