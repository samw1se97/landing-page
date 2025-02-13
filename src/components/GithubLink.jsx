import React from 'react';
import { FaGithub } from 'react-icons/fa6';

function GithubLink() {
  return (
    <a href='/' className='github-link tooltip'>
      <FaGithub />
    </a>
  );
}

export default GithubLink;
