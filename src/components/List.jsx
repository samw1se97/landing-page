import React from 'react';

function List({ list }) {
  console.log(list);

  return (
    <ul>
      {list.map((skill) => (
        <li className='stack_list'>
          {skill.name} {skill.icon && <skill.icon />}
        </li>
      ))}
      {/* {mySkills.map((skill) => (
        <li className='stack_list'>
          {skill.name} <skill.icon />
        </li>
      ))} */}
    </ul>
  );
}

export default List;
