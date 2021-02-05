/* import { FaNodeJs } from "react-icons/fa"; */
import { IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoCss3, IoGitMerge, IoLogoReact, IoLogoPython } from "react-icons/io5";

import { AiOutlineConsoleSql } from "react-icons/ai";

import { DiMongodb, DiJava } from "react-icons/di";



const Tech = () => {
  return (
    <div className="section technologies">
      <h1>Technologies I Know</h1>
      <div className="section tech-icons">
        <div className="row">
          <div className="col s4"><h3><IoLogoHtml5 /></h3></div>
          <div className="col s4"><h3><IoLogoJavascript /></h3></div>
          <div className="col s4"><h3><IoLogoNodejs /></h3></div>
        </div>
        <div className="row">
          <div className="col s4"><h3><IoLogoCss3 /></h3></div>
          <div className="col s4"><h3><IoGitMerge /></h3></div>
          <div className="col s4"><h3><IoLogoReact /></h3></div>
        </div>
        <div className="row">
          <div className="col s4"><h3><AiOutlineConsoleSql /></h3></div>
          <div className="col s4"><h3><DiMongodb /></h3></div>
          <div className="col s4"><h3><IoLogoPython /></h3></div>
        </div>
        <div className="row">
          <div className="col s12"><h3><DiJava /></h3></div>
        </div>
      </div>
    </div>
  )
}

export default Tech;