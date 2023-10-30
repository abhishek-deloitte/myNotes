import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const Cards = () => {
  return (
    <>
      <Card className="m-2">
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Note
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="btn btn-success m-1">Edit</Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="btn btn-danger m-1">Delete</Button>
            </Nav.Item>
            {/* <Nav.Item>
              <Button variant="btn btn-info m-1 disable">Save</Button>
            </Nav.Item> */}
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
