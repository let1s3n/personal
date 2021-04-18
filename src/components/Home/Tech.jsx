
import React, { useEffect } from 'react';
import { IconContext } from "react-icons";
import { IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoCss3, IoGitMerge, IoLogoReact, IoLogoPython } from "react-icons/io5";

import { AiOutlineConsoleSql } from "react-icons/ai";

import { DiMongodb, DiJava } from "react-icons/di";



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
    }
  }, []);
  return (
    <div id="slideTech" className="h-100 border-bottom mb-3">
      <h1 className="fs-1 margin-after-title text-center">Technologies I Know</h1>
      <div className="container-fluid">
        <IconContext.Provider value={{ size: "7em" }}>
          <div className="row justify-content-between">

            <div className="col-6 col-sm-4 text-center py-2 py-sm-3">

              <IoLogoHtml5 id="html5-icon"/>


            </div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3">
              <IoLogoJavascript id="js-icon"/>
            </div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3">
              <IoLogoNodejs id="node-icon"/>
            </div>

            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><IoLogoCss3 id="css3-icon"/></div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><IoGitMerge id="git-icon"/></div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><IoLogoReact id="react-icon"/></div>
       
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><AiOutlineConsoleSql id="sql-icon"/></div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><DiMongodb id="mongodb-icon"/></div>
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><IoLogoPython id="py-icon"/></div>
  
  
            <div className="col-6 col-sm-4 text-center py-2 py-sm-3"><DiJava id="java-icon"/></div>
          </div>
        </IconContext.Provider>


      </div>

    </div>
  )
}

export default Tech;