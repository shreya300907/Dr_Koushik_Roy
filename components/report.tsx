import { Report } from "@/data/report"
import {  Library } from "lucide-react"

export default function ReportDiv({report}:{report:Report}){
    return (
        <div className="flex flex-col border border-bdr bg-white px-4 sm:py-6 py-2 transition duration-100 hover:scale-[1.01] hover:shadow-xl hover:shadow-secondary-bg">
            <div className="font-hanken font-bold text-[15px] sm:text-[18px]  text-black">
                {report.title}
            </div>
            <div className="font-haken italic font-normal text-[12px] sm:text-[14px] text-[#1B1B1F] mb-1 sm:mb-2"> 
                {report.author}
            </div>
            <div>
                <div className="rounded-xs text-[#004A99] text-[12px] sm:text-[14px] font-semibold bg-[#d9d9e1] px-2 py-0.5 w-fit">
                    {report.date}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 sm:items-center mt-1.5 sm:mt-3">
                <div className="flex flex-row gap-2 items-center text-[10px] sm:text-[12px] text-[#44474E] font-hanken font-semibold ">
                    <Library className="w-4 h-4 shrink-0" />
                    <div>
                        {report.institute}
                    </div>
                </div>   
            </div>
        </div>
    )
}