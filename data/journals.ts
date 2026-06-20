export interface Journal {
  id: string;
  title: string;
  authors: string;
  year: number;
  department: string;
}

export const Journals: Journal[] = [
  {
    id: "1",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    authors: "Ganguly, S. and Roy, K.",
    year: 2025,
    department: "Measurement, 242(E), 116109"
  },
  {
    id: "2",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    authors: "Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V.",
    year: 2024,
    department: "Journal of Civil Structural Health Monitoring, 14, 693–710"
  },
  {
    id: "3",
    title: "Damage quantification in beam-type structures using modal curvature ratio",
    authors: "Faridi, M. A., Roy, K. and Singhal, V.",
    year: 2024,
    department: "Innovative Infrastructure Solutions, 9 (44)"
  },
  {
    id: "4",
    title: "Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation",
    authors: "Faridi, M. A., Roy, K. and Singhal, V.",
    year: 2024,
    department: "Structural Health Monitoring, 23 (6), 3883-3903"
  },
  {
    id: "5",
    title: "Forced Vibration Analysis using ‘Elmer’ FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators",
    authors: "Ganguly, S. and Roy, K.",
    year: 2024,
    department: "Journal of Engineering Research (Accepted)"
  },
  {
    id: "6",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    authors: "Das, S. and Roy, K.",
    year: 2024,
    department: "Mechanical Systems and Signal Processing, 216, 111454"
  },
  {
    id: "7",
    title: "Structural damage quantification in shear buildings using mode shape slope ratio",
    authors: "Roy, K.",
    year: 2023,
    department: "Structural Health Monitoring, 22(4): 2346-2359"
  },
  {
    id: "8",
    title: "Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review",
    authors: "Paul, D. and Roy, K.",
    year: 2023,
    department: "Structural Health Monitoring, 22(6): 4194-4232"
  },
  {
    id: "9",
    title: "Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures",
    authors: "Ganguly, S. and Roy, K.",
    year: 2023,
    department: "Measurement, 216, 112847"
  },
  {
    id: "10",
    title: "Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings",
    authors: "Das, S. and Roy, K.",
    year: 2023,
    department: "Probabilistic Engineering Mechanics, 74: 103539"
  },
  {
    id: "11",
    title: "A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward",
    authors: "Das, S. and Roy, K.",
    year: 2022,
    department: "International Journal of Structural Stability and Dynamics, 22(2): 2230001"
  },
  {
    id: "12",
    title: "Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper",
    authors: "Gur, S. Roy, K. and Singh, P.",
    year: 2022,
    department: "Structural Control and Health Monitoring, 29(5): e2926"
  },
  {
    id: "13",
    title: "Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition",
    authors: "Faridi, M. A., Roy, K. and Singhal, V.",
    year: 2022,
    department: "Journal of Structural Integrity and Maintenance, 8(2): 111-120"
  },
  {
    id: "14",
    title: "Response surface-based structural damage identification using dynamic responses",
    authors: "Anjneya, K and Roy K.",
    year: 2021,
    department: "Structures, 29, 1047-1058"
  },
  {
    id: "15",
    title: "Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method",
    authors: "Chaudhary, P. K., Anjneya, K and Roy, K.",
    year: 2021,
    department: "Journal of Engineering Mechanics (ASCE), 147(11): 04021091"
  },
  {
    id: "16",
    title: "Acceleration time history dataset for a 3D miniature model of a shear building with structural damage",
    authors: "Anjneya, K. and Roy K.",
    year: 2021,
    department: "Data in Brief, 38: 107337"
  },
  {
    id: "17",
    title: "Structural Damage Identification using Mode Shape Slope and Curvature",
    authors: "Roy, K.",
    year: 2017,
    department: "Journal of Engineering Mechanics (ASCE), 143(9): 04017110"
  },
  {
    id: "18",
    title: "Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers",
    authors: "Gur, S., Roy K. and Mishra, S. K.",
    year: 2016,
    department: "Mechanical Systems and Signal Processing, 72-73, 642-659"
  },
  {
    id: "19",
    title: "Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study",
    authors: "Chakraborty, S., Roy, K. and Ray-Chaudhuri, S.",
    year: 2016,
    department: "Engineering Structures, 126, 66-77"
  },
  {
    id: "20",
    title: "ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements",
    authors: "Roy, K., Bhattacharya, B. and Ray-Chaudhuri, S.",
    year: 2015,
    department: "Journal of Sound and Vibration, 349, 99-122"
  },
  {
    id: "21",
    title: "Tuned-liquid-column ball-damper for seismic vibration control",
    authors: "Gur, S., Roy K. and Mishra, S. K.",
    year: 2015,
    department: "Structural Control and Health Monitoring, 22(11), 1325-1342"
  },
  {
    id: "22",
    title: "Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing",
    authors: "Mishra, S. K., Gur, S., Roy, K. and Chakraborty, S.",
    year: 2015,
    department: "Journal of Bridge Engineering (ASCE), 21(3) 04015071"
  },
  {
    id: "23",
    title: "Fundamental Mode Shape and its Derivative in Structural Damage Localization",
    authors: "Roy, K. and Ray-Chaudhuri, S.",
    year: 2013,
    department: "Journal of Sound and Vibration, 332 (21), 5584-5593"
  }
];