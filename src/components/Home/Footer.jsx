import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { IconContext } from "react-icons";
import { CgCopyright } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram, SiGmail } from "react-icons/si";



const Footer = () => {
  return (
    <div className="w-100 bg-dark text-white py-5">
      <div className="container">
        <Row className="p-3 justify-content-center mb-5">
          <IconContext.Provider value={{ size: "2em" }}>
            <Col xs={6} sm="2" className="text-center">
              <Button variant="outline-light border-0" href="https://github.com/let1s3n" target="_blank"> <SiGithub /> </Button>
            </Col>
            <Col xs={6} sm="2" className="text-center">
              <Button variant="outline-light border-0" href="https://www.linkedin.com/in/jcarneiro91/" target="_blank"> <SiLinkedin /> </Button>

            </Col>
            <Col xs={6} sm="2" className="text-center">
              <Button variant="outline-light border-0" href="https://twitter.com/jcarneiroe" target="_blank"> <SiTwitter /> </Button>

            </Col>
            <Col xs={6} sm="2" className="text-center">
              <Button variant="outline-light border-0" href="https://www.instagram.com/carneiro__jose/" target="_blank"> <SiInstagram /> </Button>

            </Col>
            <Col xs={6} sm="2" className="text-center">
              <Button variant="outline-light border-0" href="mailto:letisendev@gmail.com"> <SiGmail /> </Button>

            </Col>
          </IconContext.Provider>
        </Row>
        <Row className="p-3 justify-content-center mb-5" >
          <Col sm="2" className="text-center">
            <h6>Home</h6>

          </Col>
          <Col sm="2" className="text-center">
            <h6>Projects</h6>

          </Col>
          <Col sm="2" className="text-center">
            <h6>Interests</h6>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm="6" className="text-center">
            <span>Derechos de autor <CgCopyright />2021. Todos los derechos reservados.</span>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
