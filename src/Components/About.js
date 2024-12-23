import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Nada Elmahfoudi</b>, and I am a <b>MERN stack web developer</b> from Morocco. 
            I specialize in building modern web applications and have a strong passion for transforming ideas into impactful digital solutions.<br/><br/>
            I gained valuable experience as a <b>Back-end Developer Intern</b> at MajorMedia, where I contributed to the development of scalable applications and collaborative projects. 
            Additionally, I have worked on various projects using <b>Node.js</b>, <b>Express.js</b>, <b>MongoDB</b>, and <b>React.js</b>, creating platforms for user interactions and dynamic services.<br/><br/>
            I am <b>open</b> to collaborations or opportunities to contribute and grow professionally. Feel free to connect with me using the links in the footer.<br/>
            Outside of coding, I enjoy playing chess and exploring music, which fuels my creativity and problem-solving mindset.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' /> 
        <Skills skill='AWS' />
        <Skills skill='Jest' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        
      </div>
    </>
  )
}

export default About