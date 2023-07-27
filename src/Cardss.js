import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{ Link } from 'react-router-dom';

function Cardss({data}) {
  return (
    <Container>
    <Row>


    {
        data.map(i => (


            <Col sm={12} md={4}>
<Link to={`view/${i.id}`} style={{textDecoration: "none"}}> 
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.photograph} />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
          {i.address}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Link>
            </Col>


        ))
    }


    </Row>
    </Container>
  )
}

export default Cardss