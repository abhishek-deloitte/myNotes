import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cards from "../cards/Cards";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [noteTitle, setnoteTitle] = useState("");
  const [noteBody, setnoteBody] = useState("");

  const saveNote = (e) => {
    console.log("title: " + noteTitle);
    console.log("body: " + noteBody);
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">My Notes</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Hi user</Navbar.Text>
            <Navbar.Text>
              <Button className="m-2" variant="dark" onClick={handleShow}>
                Add Note
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" onSubmit={saveNote}>
              <Form.Control
                type="text"
                placeholder="Note Title"
                value={noteTitle}
                onChange={(e) => setnoteTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Note Body"
                value={noteBody}
                onChange={(e) => setnoteBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="p-3">
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Home;
