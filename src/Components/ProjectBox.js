import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    HintDesc : "A platform for users to create, manage, and interact with their blog posts and comments. It includes authentication, profile management, and responsive design with server-side rendering using EJS or Handlebars.",
    HintGithub : "https://github.com/nadaelmahfoudi/Hint",
    HintWebsite : "https://hint.otmankharbouch.live/",

    BookCloudDesc : "A digital platform for a local library, allowing users to sign up, search and borrow books, and receive return reminders. It uses a microservices architecture and AWS for scalability.",
    BookCloudGithub : "https://github.com/nadaelmahfoudi/BookCloud",
    BookCloudWebsite : "",

    AlloFoodDesc : "A platform where customers can search for restaurants, place orders, and track deliveries. Delivery drivers confirm deliveries, and restaurant managers manage menus and orders. Super admins oversee restaurant registrations and modifications.",
    AlloFoodGithub : "https://github.com/AlloMedia/AllomediaDelivery",
    AlloFoodWebsite : "",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox