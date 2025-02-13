import React from 'react';
import GithubLink from './GithubLink';
import List from './List';

function ProjectCard({ data }) {
  return (
    <div className='project_box'>
      <GithubLink />
      <h3>{data.type}</h3>
      <b>{data.title}</b>
      <p>{data.description}</p>

      <List list={data.stack} />
    </div>
  );
}

export default ProjectCard;
