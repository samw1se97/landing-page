import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaFigma,
} from 'react-icons/fa';
import { TbBrandReactNative, TbApi } from 'react-icons/tb';
import { SiExpress, SiMongodb, SiReactrouter } from 'react-icons/si';

export const mySkills = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript (ES6+)', icon: FaJsSquare },
  { name: 'React', icon: FaReact },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'React-Router', icon: SiReactrouter },
  { name: 'Node JS', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },

  { name: 'SQL & NoSQL', icon: FaDatabase },
  { name: 'RESTful APIs', icon: TbApi },
  { name: 'Git', icon: FaGithub },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'Mongo DB', icon: SiMongodb },
  { name: 'Figma', icon: FaFigma },
];

export const myProjects = [
  {
    type: 'Front-End',
    title: 'Iner organization Mailbox',
    description:
      'An intra-organizational social communication system, which realizes functionality for calling within work teams in the organization, including a group messaging system, group and private chat, file sharing, and more. The system is designed to replace the Slack and WhatsApp platforms for communication within a team.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'React-Router', icon: SiReactrouter },
      { name: 'Node js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    type: 'Front & Back',
    title: 'File saving Driver ',
    description:
      'An google drive style file saving web app. The application allows the user to create and delete folders, upload and download files just like Google Drive allows you to do.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Node js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'file-saver' },
    ],
  },
  {
    type: 'Full-Stack',
    title: 'Wedding RSVP & Photo Sharing App',
    description:
      'A feature-rich RSVP web app designed to streamline wedding guest management. Guests can confirm attendance, specify meal preferences, and upload event photos to a shared gallery. Admins have access to a secure dashboard for managing guest lists and moderating uploads.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Node js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Multer' },
      { name: 'JWT' },
    ],
  },
  {
    type: 'Front-End',
    title: 'QR Code Generator & Downloader',
    description:
      'A user-friendly QR code generator that allows users to input a link and download the generated QR code in multiple formats (SVG, PNG, JPG). Features a clean UI, real-time QR code preview, and format selection buttons for seamless downloads. Built for both personal and professional use cases, ensuring high-quality QR code generation and easy accessibility.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'qrcode.react' },
      { name: 'FileSaver.js' },
      { name: 'CSS' },
    ],
  },
];
