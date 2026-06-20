export interface Student{
    id:string;
    name:string;
    title:string;
    research?:string;
    misc?:string;
    img:string;
}

export const Scholars: Student[]=[
    {
        id:"1",
        name:"Saranika Das",
        title:"PhD student, 2019 to present",
        research:"Damage identification in structures through flexibility based methods.",
        img:"/student/s2.png"
    },
    {
        id:"2",
        name:"Md Arif Faridi",
        title:"PhD student",
        misc:"B.Tech (NIT Patna), M.Tech (AMU)",
        img:"/student/s3.png"
    }
]

export const Alumini:Student[]=[
    {
        id:"1",
        name:"Divya Grover",
        title:"M.tech (Gold Medal, IIT Patna )",
        misc:"Master's student (2018-2020)",
        research:"Probability density evolution method (PDEM), Soil Structure Interaction",
        img:"/student/s5.png"
    },
    {
        id:"2",
        name:"Kumar Anjneya",
        title:"M.Tech (Silver medal, IIT Patna) ",
        misc:"Master's student (2017-2019) B.E. ( BIT MESRA)",
        research:"Response surface methodology based Damage quantification  in building model, Spectral element methodology, Probability density evolution method (PDEM), Principal Component analysis (PCA)",
        img:"/student/s4.png"
    },
    {
        id:"3",
        name:"Purushottam Kumar Chowdhury",
        title:"M.tech ( IIT Patna )",
        misc:"Master's student (2016-2018)",
        research:"Damage identification using Spectral element methodology (SEM), Principal component analysis( PCA)",
        img:"/student/s6.png"
    },
    {
        id:"4",
        name:"Eshwar Kunchan",
        title:"JRF (2017-2018) (IIT Patna)",
        research:"Monitoring of bridge in Bihar, Damage identification in beam using mode shape curvature ",
        img:"/student/s1.png"
    }
]