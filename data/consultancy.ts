export interface Consultancy {
  id: string;
  title: string;
  client?: string;
}

export const Consultancies: Consultancy[] = [
  {
    id: "1",
    title: "Investigation of Structural Safety of Bihar State Chief Minister’s Residence",
    client:
      "Building Construction Department, Govt. of Bihar, September 2016",
  },
  {
    id: "2",
    title:
      "Structural Design Vetting of Budha Smriti Stupa and Museum at Vaishali, Bihar (Ongoing)",
    client: "Building Construction Department, Govt. of Bihar",
  },
  {
    id: "3",
    title:
      "Proof Checking of Structural Design of Govt. Medical College & Hospital, Purnea",
    client: "BMSICL, Govt. of Bihar",
  },
  {
    id: "4",
    title:
      "Proof Checking of Structural Design for Construction of Constable Barrack at New Police Line, Patna",
    client:
      "Bihar Police Building Construction, Govt. of Bihar",
  },
  {
    id: "5",
    title:
      "Performance of Destructive/Nondestructive Tests on a Well Cap in Connection with Hajipur-Sagauli New BG Rail Line Project",
    client:
      "Chief Engineer/Con/II/HJP, East Central Railway, Hajipur, Pin – 844101",
  },
  {
    id: "6",
    title:
      "One Time Visit for Visual Inspection for a Building at NIPER, Hajipur",
    client:
      "Director, Additional-charge, NIPER-Hajipur",
  },
];