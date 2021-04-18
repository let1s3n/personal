import React, { useEffect } from 'react'
import coding from '../../assets/img/coding.svg'
import { Row, Col } from 'react-bootstrap'
const Presentation = () => {


  useEffect(() => {
    
    const str_body = `Bienvenid@ 
      a mi 
    página`;
    
    const charac_body = [...str_body];
    let j = 0;
    const body = setInterval(() => {
      if (j >= charac_body.length) {
        clearInterval(body);
      }
      else {
        document.getElementById('presentation-body').innerHTML += charac_body[j++];
      }
    }, 100);

    return () => {
      clearInterval(body);
    }
  }, []);

  return (
    <div className="container-fluid h-100">
      <Row className="h-100">

        <Col xs="12" lg="6" className="align-self-center">
          <p id="presentation-body" class="multiline lh-lg"></p>
        </Col>

        <Col xs="12" lg="6" className="align-self-center">
          <img id="coding-img" src={coding} alt="coding svg" />

        </Col>


      </Row>
    </div>


  )
}

export default Presentation;