import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Elmahfoudi Nada</h4>
      <h4>Copyright &copy; 2024 EN</h4>
      <div className='footerLinks'>
        <a href="https://github.com/nadaelmahfoudi" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/elmahfoudi-nada-3548222a0/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer