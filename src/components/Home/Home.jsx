import React from 'react'
import Presentation from './Presentation'
import Tech from './Tech'
import ProjectsHome from './ProjectsHome'
import Footer from './Footer'
import { Form, Button, Row, Col, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="main-section position-relative">
        <div className="full header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="ps-5">
            <Navbar.Brand href="#home">

              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="let1s3n logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Projects</Nav.Link>
                <Nav.Link href="#pricing">Interests</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Presentation />

        </div>
        <div className="cool">

          <div className="container">
            <Tech />
            <ProjectsHome />
          </div>


        </div>

        <div className="container pb-5 mb-5">
          <h2 className="text-center mb-3 text-white">
            Contáctame
              </h2>
          <Form className="mb-5 p-3 text-white">
            <Row className="justify-content-center">

              <Form.Group as={Col} sm="6">
                <Form.Label>Email address</Form.Label>

                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>


            </Row>
            <Row className="justify-content-center">

              <Form.Group as={Col} sm="6">
                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Enter password" />

              </Form.Group>


            </Row>
            <Row className="justify-content-center">

              <Form.Group as={Col} sm="6">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>


            </Row>

            <Row className="justify-content-center mt-3">
              <Col sm="6" className="text-center">
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>

        <Footer />
      </div>
    );
  }



}


export default Home;