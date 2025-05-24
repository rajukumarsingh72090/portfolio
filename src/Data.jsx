import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";




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