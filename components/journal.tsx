import { Journal } from "@/data/journals"
import { BookOpen } from "lucide-react"

export default function JournalDiv({journal}:{journal:Journal}){
    return (
        <div className="flex flex-col border border-bdr bg-white px-5 sm:py-6 py-2  transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
            <div className="font-hanken font-bold text-[15px] sm:text-[18px] text-black leading-6.5">
                {journal.title}
            </div>
            <div className="font-haken italic font-normal text-[12px] sm:text-[14px] text-[#1B1B1F] mb-1.5"> 
                {journal.authors}
            </div>
            <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-row gap-2 items-center  text-[10px] sm:text-[12px] text-[#44474E] font-hanken font-semibold ">
                    <BookOpen size={16} />
                    <div>
                        {journal.department}
                    </div>
                </div>
                    <div className="rounded-xs text-[#004A99] text-[12px] sm:text-[14px] font-semibold bg-[#d9d9e1] px-2 py-0.5">
                    {journal.year}
                </div>
            </div>
        </div>
    )
}