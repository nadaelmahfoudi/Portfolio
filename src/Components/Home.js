import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Elmahfoudi Nada</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love transforming raw ideas into impactful websites and digital products. 
            I seek work that challenges me as a developer and makes me proud.<br /><br />
            I am fluent in <b>JavaScript</b> (ES6+) and have solid expertise in the 
            <b>MERN stack</b> (MongoDB, Express.js, React.js, Node.js). I have experience with 
            <b>React.js</b>, <b>TailwindCSS</b>, and <b>Bootstrap</b> for front-end development, 
            and back-end technologies like <b>Express.js</b>, <b>Node.js</b>, and <b>PHP</b>.<br /><br />
            I plan to learn <b>Next.js</b>, and <b>Three.js</b>, while continuing to work on 
            projects using <b>Git/GitHub</b>, <b>Jira</b>, <b>Postman</b>, <b>AWS</b>, and CI/CD pipelines.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
          </p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home