import React, { Fragment } from "react";
import AppNavbar from "../Navigation/AppNavbar";
import { Accordion, Card, Form, Button, Col } from 'react-bootstrap';

class StateManager {}

class TodoDetail extends React.Component {
  state = new StateManager();

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // set the state
    };

    render = () => {
        return (
            <Fragment>
                <AppNavbar />
                <Accordion defaultActiveKey="0" style={{ marginTop: "10px" }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Form.Check type="checkbox" label="Check me out" className="open-accordion"/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" xs={7}>
                                            <Form.Label>Notes</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                        <Form.Row as={Col}>
                                            <Form.Group as={Col} controlId="formGridState" xs={12}>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState" xs={12}>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="offset-9">
                                                Submit
                                            </Button>
                                        </Form.Row>
                                    </Form.Row>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Form.Check type="checkbox" label="Check me out" className="open-accordion"/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1" xs={7}>
                                            <Form.Label>Notes</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                        <Form.Row as={Col}>
                                            <Form.Group as={Col} controlId="formGridState" xs={12}>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState" xs={12}>
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="offset-9">
                                                Submit
                                            </Button>
                                        </Form.Row>
                                    </Form.Row>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Fragment>
        )
    };
}

export default TodoDetail;
