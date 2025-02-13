import React from 'react';
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

export const mySkills = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript (ES6+)', icon: FaJsSquare },
  { name: 'React', icon: FaReact },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'Node JS', icon: FaNodeJs },
  { name: 'SQL & NoSQL', icon: FaDatabase },
  { name: 'RESTful APIs', icon: TbApi },
  { name: 'Git', icon: FaGithub },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'Figma', icon: FaFigma },
];

function List({ list }) {
  return (
    <ul>
      {/* {list.map((skill) => (
        <li className='stack_list'>{skill}</li>
      ))} */}
      {mySkills.map((skill) => (
        <li className='stack_list'>
          {skill.name} <skill.icon />
        </li>
      ))}
    </ul>
  );
}

export default List;
