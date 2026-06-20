import { Student } from "@/data/students";

export default function StudentCard({student}: {student:Student}){
    return(
        <div className="flex flex-col sm:flex-row sm:px-6 px-2 py-4 sm:gap-9 gap-4  items-start">
            <div className="rounded-sm aspect-sqaure sm:aspect-square sm:h-[200px] h-[120px]">
                <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-sm border border-brd"
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="text-fg font-semibold text-[20px] sm:text-[26px] font-newsreader">
                    {student.name}
                </div>
                <div className="text-hghlght-text font-bold text-[14px] sm:text-[20px] font-hanken">
                    {student.title}
                </div>
                {student.misc?(
                    <div className="text-primary-fg text-[10px] sm:text-[16px] font-hanken font-medium">
                        {student.misc}
                    </div>
                ):(null)}
                {student.research?(
                    <div className="text-primary-fg text-[12px] sm:text-[16px] font-hanken font-medium mt-1">
                        <span className="text-black text-[14px] sm:text-[20px] font-newsreader font-bold">Research: </span>{student.research}
                    </div>
                ):(null)}
            </div>
        </div>
    );
}