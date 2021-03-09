/* import { FaNodeJs } from "react-icons/fa"; */
import React,{useEffect} from 'react'
import { IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoCss3, IoGitMerge, IoLogoReact, IoLogoPython } from "react-icons/io5";

import { AiOutlineConsoleSql } from "react-icons/ai";

import { DiMongodb, DiJava } from "react-icons/di";

import pyLogo from '../../assets/img/python-logo.png'



const Tech = () => {
  useEffect(() => {
    const element = document.querySelector('#slideTech');
    const elementClass = element.getAttribute("class");
    element.setAttribute('class', elementClass + ' hide');

    window.onscroll = () => {
      if (window.scrollY >= 400) {
        element.setAttribute('class', elementClass);
        element.setAttribute('class', elementClass + ' slide-top');

      }
      console.log("Vertical: " + window.scrollY);
      console.log("Horizontal: " + window.scrollX);
    }
  }, []);
  return (
    <div id="slideTech" className="center-align" >
      <h1>Technologies I Know</h1>
      <div className="section tech-icons">
        <div className="row">
          <div className="col s4"><h3 id="html5-icon"><IoLogoHtml5 /></h3></div>
          <div className="col s4"><h3 id="js-icon"><IoLogoJavascript /></h3></div>
          <div className="col s4"><h3 id="node-icon"><IoLogoNodejs /></h3></div>
        </div>
        <div className="row">
          <div className="col s4"><h3 id="css3-icon"><IoLogoCss3 /></h3></div>
          <div className="col s4"><h3 id="git-icon"><IoGitMerge /></h3></div>
          <div className="col s4"><h3 id="react-icon"><IoLogoReact /></h3></div>
        </div>
        <div className="row">
          <div className="col s4"><h3 id="sql-icon"><AiOutlineConsoleSql /></h3></div>
          <div className="col s4"><h3 id="mongodb-icon"><DiMongodb /></h3></div>
          <div className="col s4"><h3 id="py-icon"><IoLogoPython /></h3></div>
         {/*  <div className="col s4"><h3 id="py-icon"><img src={pyLogo} alt="pyLogo"/></h3></div> */}
        </div>
        <div className="row">
          <div className="col s12"><h3 id="java-icon"><DiJava /></h3></div>
        </div>
      </div>
    </div>
  )
}

export default Tech;