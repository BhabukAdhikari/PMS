import React, { useState } from "react";
import {
  Container,
  ListGroup,
  Form,
  Button,
  Modal,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./Dash-css/CreateList.css";

const CreateList = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskFormData, setTaskFormData] = useState({
    name: "",
    description: "",
    date: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, taskFormData]);
    setTaskFormData({
      name: "",
      description: "",
      date: "",
    });
    handleClose();
  };
  const List = () => {
    const [showlist, setShowList] = useState(false);
    const [listName, setListName] = useState([]);
    const [listInput, setListInput] = useState("");
    const createList = () => {
      setShowList(true);
    };
    const addList = () => {
      e, preventDefault();
      setListName([...listName, listInput]);
      setListInput("");
    };
    return (
      <div>
        <button onClick={createList}>Create</button>
        {showlist && (
          <>
            <form action="" onSubmit={addList}>
              <label htmlFor="">
                List NAME:
                <input
                  type="text"
                  value={listInput}
                  onChange={(e) => setListInput(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
        {listName.map((names, index) => {
          return (
            <div key={index}>
              <h1>{names}</h1>
            </div>
          );
        })}
      </div>
    );
  };
  <>
    <div>
      <h2>Create list</h2>
      <Button>Create lists</Button>
    </div>
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShow} className="ml-auto">
            Add Task
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleTaskSubmit}>
            <Form.Group className="mb-3" controlId="list">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the task name"
                name="name"
                value={taskFormData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={taskFormData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="list">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the date"
                name="date"
                value={taskFormData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    <Container>
      <h2>Task Lists</h2>
      <ListGroup className="listgroup">
        {tasks.map((task, index) => (
          <Col key={index} md={12}>
            <Card className="card m-2" style={{ width: "100%" }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Task name: {task.name}</Card.Title>
                <Card.Text>Task Description: {task.description}</Card.Text>
                <Card.Text>Date: {task.date}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Form.Check inline label="Completed" name={`group${index}`} />
                  <Form.Check inline label="Pending" name={`group${index}`} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </ListGroup>
    </Container>
  </>;
};

export default CreateList;
