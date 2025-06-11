import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";

import work1 from '../src/assets/work1.jpeg'
// import Theme1 from '../src/assets/Theme1.png'
// import Theme2 from '../src/assets/Theme2.png'

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className="nav__icon" />,
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className="nav__icon" />,
        path: '/about'
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className="nav__icon" />,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className="nav__icon" />,
        path: '/contact'
    },
]

export const PersonalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Raju Kumar',
    },
    {
        id:2,
        title: 'Last Name : ',
        description: 'Singh'
    },
    {
        id: 3,
        title: 'Age : ',
        description: '21 years'
    },
    {
        id: 4,
        title: 'Nationality : ',
        description: 'Indian'
    },
    {
        id: 5,
        title: 'Freelance : ',
        description: 'Available'
    },
    {
        id: 7,
        title: 'Phone : ',
        description: '+91 7209078494'
    },
    {
        id: 9,
        title: 'Instagram : ',
        description: 'techexplorarguy'
    },
    {
        id: 10,
        title: 'Language : ',
        description: 'Hindi, English, bhojpuri'
    }
]

export const stats = [
    {
        id: 1,
        no: '1+',
        title: 'Years of <br/> experience'
    },
    {
        id: 2,
        no: '10+',
        title: 'completed <br/> projects'
    },
    {
        id: 3,
        no: '11+',
        title: 'Happy <br/> customers'
    },
    {
        id: 4,
        no: '4+',
        title: 'certificate <br/> obtain'
    }
]

export const skills = [
    {
        id:1,
        title: 'HTML',
        percentage: '50'
    },
    {
        id:2,
        title: 'CSS',
        percentage: '30'
    },
    {
        id:3,
        title: 'Javascript',
        percentage: '70'
    },    {
        id:4,
        title: 'Reactjs',
        percentage: '90'
    },
    {
        id:5,
        title: 'Nodejs',
        percentage: '80'
    },
    {
        id:6,
        title: 'Nextjs',
        percentage: '40'
    },
    {
        id:7,
        title: 'React Native',
        percentage: '90'
    },
    {
        id:8,
        title: 'Mongodb',
        percentage: '20'
    },

];

export const resume = [
    {
        id:1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'July 2024 - December 2024',
        title: 'IBMS operator <span> EXL private limited </span>',
        desc: 'Experienced in managing and maintaining Access Control Systems (ACS), Face Recognition Systems (FRS), and CCTV surveillance to ensure employee monitoring and workplace security. Responsible for tracking employee attendance, generating daily and weekly reports, and updating access and recognition systems based on staffing changes such as new hires, separations, and departmental movements. Also skilled in managing security and technician teams to ensure smooth building operations and safety compliance.'
    },
    {
        id:2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'April 2024 - June 2024',
        title: 'Digital Marketing <span> Hetal Shah Exclusive accomodation </span>',
        desc: 'To generate leads effectively, I implemented a comprehensive marketing strategy that included social media advertising, online listings, and search engine optimization. First, I ran targeted Facebook advertisements to attract potential clients and direct them to the business’s Facebook page, which helped increase engagement and lead conversion. Simultaneously, I posted detailed listings of the Paying Guest (PG) services on major real estate websites such as MagicBricks, 99acres, Housing.com, OLX, and other relevant platforms to maximize online visibility and reach a broader audience. Additionally, I applied search engine optimization (SEO) techniques to improve the website’s ranking on search engines, which drove more organic traffic and generated high-quality leads over time. This integrated approach successfully contributed to both immediate results and sustained growth in client acquisition.'
    },
    {
        id:3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'December 2023 - March 2024',
        title: 'Wordpress website Make <span> RoyalITSolution </span>',
        desc: 'Made and managed two blogging website mytechnicalhindi.com and royalhow.com.'
    },
    {
        id:4,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2020 - 2022',
        title: 'Intermediate <span> Ram Krishna College </span>',
        desc: 'completed my intermediate in science from Ram Krishna college from Saran, Bihar'
    },
    {
        id:5,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2018 - 2020',
        title: 'Matric <span> MuktaPushPanjali School </span>',
        desc: 'Completed my basic elementry school from MuktaPushPanjali School from gota, Ahmedabad, Gujarat'
    },

]

export const portfolio = [
    {
        id:1,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    },
    {
        id:2,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    },
    {
        id:3,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    },
    {
        id:4,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    },
    {
        id:5,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    }, 
    {
        id:6,
        img: work1,
        title: 'photo editing',
        details: [
            {
                icon: <FiFileText/>,
                title: 'project',
                desc: 'photo',
            },
            {
                icon: <FiUser/>,
                title: 'Client',
                desc: 'Drible',
            },
            {
                icon: <FaCode/>,
                title: 'Language',
                desc: 'adobe photoshop',
            },
            {
                icon: <RxExternalLink />,
                title: 'preview',
                desc: <a href="https://www.example.com">go to link</a>,
            },
        ]
    },

]


// export const themes = [
//     {
//         id: 1,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 2,
//         img: Theme2,
//         color: 'hsl(4, 93%% 54%)'
//     },
//     {
//         id: 3,
//         img: Theme1,
//         color: 'hsl(271, 76% 53%)'
//     },
//     {
//         id: 4,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 5,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 6,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 7,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 8,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 9,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
//     {
//         id: 10,
//         img: Theme1,
//         color: 'hsl(252, 35% 51%)'
//     },
// ]