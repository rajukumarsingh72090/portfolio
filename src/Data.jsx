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
        title: 'Htmls',
        percentage: '25'
    },
    {
        id:2,
        title: 'javascript',
        percentage: '89'
    },
    {
        id:3,
        title: 'Css',
        percentage: '70'
    },    {
        id:4,
        title: 'Htmls',
        percentage: '25'
    },
    {
        id:5,
        title: 'Htmls',
        percentage: '25'
    },
    {
        id:6,
        title: 'Htmls',
        percentage: '25'
    },
    {
        id:7,
        title: 'Htmls',
        percentage: '25'
    },
    {
        id:8,
        title: 'Htmls',
        percentage: '25'
    },

];

export const resume = [
    {
        id:1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
    },
    {
        id:2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
    },
    {
        id:3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
    },
    {
        id:4,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
    },
    {
        id:5,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
    },
    {
        id:6,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2018 - Present',
        title: 'Web developer <span> Enavato </span>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos blanditiis dolorum quasi nisi soluta placeat nostrum sint facere fuga. Omnis ad obcaecati, accusamus officia sed cumque assumenda inventore ducimus ut?'
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