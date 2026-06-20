"use client";
import ConferenceDiv from "@/components/conference";
import JournalDiv from "@/components/journal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Conferences } from "@/data/conferences";
import { Journals } from "@/data/journals";
import {  Search } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const pageVariants: Variants = {
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

export default function Publications() {
  const [selected, setSelected] = useState<"j" | "c">("j");
  const [selectedYear, selectYear] = useState(0);
  const [search, setSearch] = useState("");

  const filteredJournals = Journals.filter((j) => {
    const matchesYear = selectedYear === 0 || j.year === selectedYear;
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.authors.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const filteredConferences = Conferences.filter((c) => {
    const matchesYear = selectedYear === 0 || c.year === selectedYear;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.authors.toLowerCase().includes(search.toLowerCase()) ||
      c.location?.toLowerCase().includes(search.toLowerCase()) ||
      c.institute.toLowerCase().includes(search.toLowerCase());
    return matchesYear && matchesSearch;
  });

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
        <span className="text-hghlght-text text-[20px] sm:text-[24px] font-medium font-newsreader italic mb-2">Journals & Conferences</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-primary-fg text-[13px] sm:text-[16px] font-hanken">Assistant Professor<br/> Civil & Environmental Engineering</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 bg-secondary-bg gap-2 sm:gap-8 items-center px-2 sm:px-4 py-2 ">
        <div className="relative w-full">
          <Search className="absolute sm:left-3 left-1 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <Input
            placeholder="Search by title, author, or keyword..."
            type="text"
            className=" h-[28px] sm:h-[40px] pl-5 sm:pl-9 w-full bg-white rounded-none text-[12px] sm:text-[16px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Select
            value={selectedYear === 0 ? "0" : String(selectedYear)}
            onValueChange={(value) => selectYear(Number(value))}
          >
            <SelectTrigger className="w-[180px] sm:w-[200px] rounded-none bg-white cursor-pointer ">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="0">All Years</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
              <SelectItem value="2018">2018</SelectItem>
              <SelectItem value="2017">2017</SelectItem>
              <SelectItem value="2016">2016</SelectItem>
              <SelectItem value="2015">2015</SelectItem>
              <SelectItem value="2014">2014</SelectItem>
              <SelectItem value="2013">2013</SelectItem>
              <SelectItem value="2012">2012</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-row text-[16px] gap-8 border-b border-bdr font-hanken relative">
        <div
          className={`${selected == "j" ? "text-fg" : "text-primary-fg"} cursor-pointer py-3 relative`}
          onClick={() => setSelected("j")}
        >
          Journals{`(${filteredJournals.length})`}
          {selected === "j" && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-fg"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </div>
        <div
          className={`${selected == "c" ? "text-fg" : "text-primary-fg"} cursor-pointer py-3 relative`}
          onClick={() => setSelected("c")}
        >
          Conferences{`(${filteredConferences.length})`}
          {selected === "c" && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-fg"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected == "j" ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            {filteredJournals.map((j) => (
              <JournalDiv key={j.id} journal={j} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="conferences-page"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            {filteredConferences.map((c) => (
              <ConferenceDiv key={c.id} conference={c} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}