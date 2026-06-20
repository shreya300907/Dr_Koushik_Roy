export interface Conference {
  id: string;
  title: string;
  authors: string;
  institute: string;
  location?: string;
  date: string;
  year: number;
}

export const Conferences: Conference[] = [
  {
    id: "1",
    title: "Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty",
    authors: "Ganguly, S. and Roy, K.",
    date: "2024",
    institute: "Procedia Structural Integrity Conference Publication",
    year: 2024
  },
  {
    id: "2",
    title: "Numerical investigation on the influence of soil-structure interaction in damage quantification of shear buildings",
    authors: "Das, S., Gautam, P. and Roy, K.",
    date: "December 11-14, 2024",
    institute: "8th International Conference on Recent Advances in Geotechnical Earthquake Engineering and Soil Dynamics (8ICRAGEE), IIT Guwahati",
    location: "India-781039",
    year: 2024
  },
  {
    id: "3",
    title: "Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage",
    authors: "Das, S. and Roy, K.",
    date: "June 12-14, 2023",
    institute: "9th ECCOMAS Thematic Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023)",
    location: "Athens, Greece",
    year: 2023
  },
  {
    id: "4",
    title: "Uncertainty propagation in modal parameters and its influence on damage quantification in shear buildings using fundamental mode",
    authors: "Das, S. and Roy, K.",
    date: "December 7-9, 2023",
    institute: "13th Structural Engineering Convention (SEC 2023), VNIT Nagpur",
    location: "India-440010",
    year: 2023
  },
  {
    id: "5",
    title: "Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion",
    authors: "Paul, D. and Roy, K.",
    date: "March 19-21, 2022",
    institute: "International Conference on Advances in Mechanics, Modelling, Computing and Statistics (ICAMMCS-2022), BITS Pilani",
    location: "Pilani, India - 333031",
    year: 2022
  },
  {
    id: "6",
    title: "FRF-based experimental investigation of multiple damage quantification in a shear building",
    authors: "Das, S. and Roy, K.",
    date: "June 23-24, 2022",
    institute: "Socio-Technological Aspects of Seismic Disaster and its Mitigation (STASDM), IIT Guwahati",
    location: "India-781039",
    year: 2022
  },
  {
    id: "7",
    title: "Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion",
    authors: "Paul, D. and Roy, K.",
    date: "August 23-25, 2022",
    institute: "The fourteenth international conference on Computational Structures Technology (CST-2022)",
    location: "Montpellier, France",
    year: 2022
  },
  {
    id: "8",
    title: "Experimental investigation for quantifying damage considering soil-structure interaction effect on a smallscale model",
    authors: "Das, S., Baghel, A., Grover, D. and Roy, K.",
    date: "November 14-17, 2022",
    institute: "17th Symposium on Earthquake Engineering (17SEE), IIT Roorkee",
    location: "India-247667",
    year: 2022
  },
  {
    id: "9",
    title: "A novel damage indicator evolved from the Poincaré map for localization of seismic damage in a structure with nonlinear breathing crack",
    authors: "Ganguly, S. and Roy, K.",
    date: "November 14-17, 2022",
    institute: "17th Symposium of Earthquake Engineering (17 SEE), IIT Roorkee",
    location: "India-247667",
    year: 2022
  },
  {
    id: "10",
    title: "Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers",
    authors: "Singh, P., Gur, S. and Roy, K.",
    date: "December 19-22, 2021",
    institute: "12th Structural Engineering Convention 2021 (SEC2021), MNIT Jaipur",
    location: "India - 302017",
    year: 2021
  },
  {
    id: "11",
    title: "Structural Damage Quantification Using Flexibility Matrix Based Approach",
    authors: "Das, S. and Roy, K.",
    date: "September 4-6, 2020",
    institute: "1st Online International Conference on Recent Advances in Computational and Experimental Mechanics (ICRACEM 2020), IIT Kharagpur",
    location: "India - 721302, VC-20-036",
    year: 2020
  },
  {
    id: "12",
    title: "Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty",
    authors: "Chaudhary, P. K., Anjneya, K. and Roy, K.",
    date: "November 12-14, 2020",
    institute: "5th International Conference on Civil Structural and Transportation Engineering (ICCSTE 2020)",
    location: "Ottawa, Canada (Virtual Conference), 301",
    year: 2020
  },
  {
    id: "13",
    title: "Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper",
    authors: "Gur, S., Singh, P. and Roy, K.",
    date: "November 23-26, 2020",
    institute: "11th International Conference on Structural Dynamics (EASD Procedia EURODYN 2020)",
    location: "Athens, Greece (Virtual Conference), 4696-4709",
    year: 2020
  },
  {
    id: "14",
    title: "Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model",
    authors: "Das, S., Baghel, A., Grover, D. and Roy, K.",
    date: "December 2020",
    institute: "Symposium in Earthquake Engineering",
    year: 2020
  },
  {
    id: "15",
    title: "Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters",
    authors: "Anjneya, K. and Roy, K.",
    date: "June 6-7, 2019",
    institute: "2nd National Conference on Recent Advances in Civil Engineering (RACE2019), NIT Patna",
    location: "India - 800005",
    year: 2019
  },
  {
    id: "16",
    title: "Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction",
    authors: "Chowdhury, P. K., Anjneya, K. and Roy, K.",
    date: "September 2019",
    institute: "29th European Safety and Reliability Conference (ESREL)",
    location: "Hannover, Germany",
    year: 2019
  },
  {
    id: "17",
    title: "Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM",
    authors: "Anjneya, K., Grover, D. and Roy, K.",
    date: "December 11-13, 2019",
    institute: "7th International Congress on Computational Mechanics and Simulation (ICCMS2019), IIT Mandi",
    location: "India - 175001",
    year: 2019
  },
  {
    id: "18",
    title: "A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate",
    authors: "Bhardwaj, A. and Roy, K.",
    date: "July 22-27, 2018",
    institute: "13th World Congress in Computational Mechanics",
    location: "New York City (USA)",
    year: 2018
  },
  {
    id: "19",
    title: "Application of response surface-based model updating in damage identification using dynamic responses",
    authors: "Anjneya, K. and Roy, K.",
    date: "December 19-21, 2018",
    institute: "11th Structural Engineering Convention 2018 (SEC2018), Jadavpur University",
    location: "India - 700032",
    year: 2018
  },
  {
    id: "20",
    title: "Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties",
    authors: "Faridi, M. A., Roy, K. and Singhal, V.",
    date: "December 20-22, 2018",
    institute: "16th symposium on earthquake engineering (SEE 2018), IIT Roorkee",
    location: "India - 247667",
    year: 2018
  },
  {
    id: "21",
    title: "Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response",
    authors: "Gaurav, K., Sonam, K., Singhal, V. and Roy, K.",
    date: "September 10-13, 2017",
    institute: "10th International Conference on Structural Dynamics (Procedia Engineering EURODYN 2017)",
    location: "Rome, Italy, 199 (1988-1993)",
    year: 2017
  },
  {
    id: "22",
    title: "Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes",
    authors: "Roy, K., Gur, S. and Mishra, S. K.",
    date: "April 24-25, 2017",
    institute: "19th International Conference on Earthquake, Geological and Structural Engineering",
    location: "Boston (USA)",
    year: 2017
  },
  {
    id: "23",
    title: "Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification",
    authors: "Roy, K. and Ray-Chaudhuri, S.",
    date: "September 28-30, 2016",
    institute: "ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur",
    location: "India - 208016",
    year: 2016
  },
  {
    id: "24",
    title: "Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques",
    authors: "Panikkaveettil, H., Roy, K. and Ray-Chaudhuri, S.",
    date: "March 13-15, 2014",
    institute: "International federation of automation and control (IFAC), Advances in control and optimization of dynamical systems (ACODS 2014), IIT Kanpur",
    location: "India - 208016, 3 (1), 973-980",
    year: 2014
  },
  {
    id: "25",
    title: "A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition",
    authors: "Xiao, H., Lu, C., Ogai, H. and Roy, K.",
    date: "September 9-12, 2014",
    institute: "SICE annual conference (IEEE), Hokkaido University",
    location: "Sapporo, Japan, 775-780",
    year: 2014
  },
  {
    id: "26",
    title: "Fundamental Mode Shape in Structural Damage Quantification",
    authors: "Roy, K. and Ray-Chaudhuri, S.",
    date: "December 11-13, 2014",
    institute: "15th symposium on earthquake engineering (SEE 2014), IIT Roorkee",
    location: "India - 247667",
    year: 2014
  },
  {
    id: "27",
    title: "Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer",
    authors: "Roy, K., Agrawal, S., Bhattacharya, B. and Ray-Chaudhuri, S.",
    date: "December 22-24, 2014",
    institute: "9th Structural Engineering Convention 2014 (SEC2014), IIT Delhi",
    location: "India - 110016, 2621-2633",
    year: 2014
  },
  {
    id: "28",
    title: "Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty",
    authors: "Roy, K. and Ray-Chaudhuri, S.",
    date: "January 3-5, 2012",
    institute: "International symposium on engineering under uncertainty: safety assessment and management (ISEUSAM 2012), BESU",
    location: "Shibpur, India - 711103, 1061-1072",
    year: 2012
  },
  {
    id: "29",
    title: "Comparative Study of Various Vibration-based Structural Damage Detection Techniques",
    authors: "Roy, K. and Ray-Chaudhuri, S.",
    date: "March 23-25, 2012",
    institute: "Asian pacific symposium on structural Reliability and its applications (APSSRA 2012), NUS",
    location: "Singapore",
    year: 2012
  },
  {
    id: "30",
    title: "Damage Detection of Bridge Using Wireless Sensors",
    authors: "Roy, K., Ogai, H., Bhattacharya, B., Ray-Chaudhuri, S. and Qin, J.",
    date: "September 10-12, 2012",
    institute: "International federation of automation and control (IFAC), Mining, Mineral and Metal Industries (MMM 2012)",
    location: "Nagaragawa, Gifu, Japan, 107-111",
    year: 2012
  },
  {
    id: "31",
    title: "On development of a new seismic base isolation system",
    authors: "Chakraborty, S., Roy, K., Chinta, C. and Ray-Chaudhuri, S.",
    date: "September 17-19, 2012",
    institute: "6th international conference on scalable uncertainty management (SUM 2012)",
    location: "Marburg, Germany, 574-581",
    year: 2012
  },
  {
    id: "32",
    title: "Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization",
    authors: "Roy K., Panikkaveettil, H., Ray-Chaudhuri, S and Raychowdhury, P.",
    date: "September 24-28, 2012",
    institute: "15th world conference in earthquake engineering (WCEE 2012)",
    location: "Lisbon, Portugal",
    year: 2012
  }
];