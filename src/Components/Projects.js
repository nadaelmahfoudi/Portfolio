import React from 'react';
import ProjectBox from './ProjectBox';
import AlloFood from '../images/AlloFood.png';
import BookCloud from '../images/BookCloud.png';
import Hint from '../images/Hint.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Hint} projectName="Hint" />
        <ProjectBox projectPhoto={BookCloud} projectName="BookCloud" />
        <ProjectBox projectPhoto={AlloFood} projectName="AlloFood" />
      </div>

    </div>
  )
}

export default Projects