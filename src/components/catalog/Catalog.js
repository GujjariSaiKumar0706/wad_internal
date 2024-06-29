import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
function Catalog() {
  return(
    <div>
        <h1>CATALOG</h1>
        <Container>
      <Row className="my-4">
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
          <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>
            <Card.Body>
              <Card.Title>Smartphone</Card.Title>
              <Card.Text>A high-quality smartphone</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
          <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>            <Card.Body>
              <Card.Title>Laptop</Card.Title>
              <Card.Text>A powerful laptop for all your needs</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
          <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>            <Card.Body>
              <Card.Title>Comfy Chair</Card.Title>
              <Card.Text>A comfortable chair for your office</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
          <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>            <Card.Body>
              <Card.Title>House</Card.Title>
              <Card.Text>A beautiful house to call home</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>
            <Card.Body>
              <Card.Title>Shoes</Card.Title>
              <Card.Text>Stylish and comfortable shoes</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
          <img src='https://tse4.mm.bing.net/th?id=OIP.MY2jaXyFDkQcISjUxUw6-gHaEK&pid=Api&P=0&h=180'></img>            <Card.Body>
              <Card.Title>Accessories</Card.Title>
              <Card.Text>Fashionable accessories to complete your look</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Catalog