import React from 'react';

interface TimelineItem {
  date: string;
  degree: string;
  department: string;
  institution: string;
  specialization: string;
  thesis?: string;
  note?: string;
}

export default function Eductaion() {
  const academicJourney: TimelineItem[] = [
    {
      date: "July, 2010 - April, 2015",
      degree: "Doctor of Philosophy (Ph.D.)",
      department: "Department of Civil Engineering",
      institution: "IIT Kanpur, India - 208016",
      specialization: "Structural Engineering",
      thesis: "Vibration-based Structural Damage Localization and Characterization using Output-only Measurements"
    },
    {
      date: "July, 2008 - June, 2010",
      degree: "Master of Technology (M.Tech)",
      department: "Department of Earthquake Engineering",
      institution: "IIT Roorkee, India - 247667",
      specialization: "Structural Dynamics (8.53)",
      thesis: "Stochastic Extension of the Burridge-Knopoff Model for Earthquake",
      note: "The thesis work was financially supported by DAAD Master Sandwich Program and carried out in Karlsruher Institut für Technologie, Institut für Technische Mechanik, Karlsruhe, Germany during September, 2009 – May, 2010"
    },
    {
      date: "June, 2004 - May, 2008",
      degree: "Bachelor of Engineering (B.E.)",
      department: "Department of Civil Engineering",
      institution: "Bengal Engineering and Science University, Shibpur, India - 711103",
      specialization: "Civil Engineering"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-[#f8fafc] rounded-xl">
      <div className="relative pl-5 sm:pl-10 border-l-2 border-slate-300 ml-1 sm:ml-4 flex flex-col gap-10">
        
        {academicJourney.map((item, index) => (
          <div key={index} className="relative group">
            <div className={`absolute left-[-34px] sm:left-[-55px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 flex items-center justify-center transition-all bg-white border-[#0f3460] `}>
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0f3460] `} />
            </div>
            <div className="flex flex-col gap-1">
              <span className={`text-sm sm:text-base font-semibold tracking-wide uppercase text-hghlght-text`}>
                {item.date}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mt-0.5">
                {item.degree}
              </h3>
              <p className="text-sm sm:text-base font-medium text-slate-600">
                {item.department}<br/>
                <span className="font-semibold">{item.institution}</span>
              </p>
              <p className="text-sm sm:text-base text-slate-700 mt-1">
                <strong className="text-slate-900 font-medium">Specialization:</strong> {item.specialization}
              </p>
              {item.thesis && (
                <div className="mt-2 p-3 bg-white border border-slate-200/80 rounded-md shadow-xs max-w-3xl">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-medium">Thesis:</strong> {item.thesis}
                  </p>
                </div>
              )}
              {item.note && (
                <p className="mt-2 text-[10px] sm:text-sm text-slate-500 italic bg-slate-100/70 p-2.5 rounded-md border-l-2 border-slate-400 max-w-3xl leading-normal">
                  {item.note}
                </p>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}