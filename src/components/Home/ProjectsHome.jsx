
import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { VscGithub } from "react-icons/vsc";


const ProjectsHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {

      await fetch('https://api.github.com/user/repos', {
        headers: {
          'Authorization': `token ${process.env.REACT_APP_API_TOKEN}`,
        }
      })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    }

    fetchData();

  }, [])


  return (
    <div className="container-fluid mb-5">
      {console.log(data)}
      <Row>
        {data.map(item => (
          <Col xs="12" md="6" className="p-sm-5">
            <Card style={{ height: '15rem', width: '18rem' }} className="mx-auto">
              <Card.Body>
                <Card.Title> <VscGithub /> {item.name}</Card.Title>
                <Card.Text style={{height:'50%'}}>
                  {item.description}
                </Card.Text>
                
                  <Button variant="primary" href={item.homepage} target="_blank" className="me-3">Live</Button>
                  <Button variant="secondary" href={item.html_url} target="_blank" >Repo</Button>

                
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>
    </div>
  )
}

export default ProjectsHome
