import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const Updateuser = () => {
  return (
    <Container className="my-4 mb-5">
    <h4 className='text-center'>Update User Data</h4>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Last Name" />
    </Form.Group>

    <Form.Group className="mb-3">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" />
    </Form.Group>
    </Form>

    <Button type="submit"> Update User </Button>

  </Container>
  )
}

export default Updateuser
