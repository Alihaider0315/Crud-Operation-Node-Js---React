import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const Adduser = () => {
  const users = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/create', user);
      toast.success(response.data.message || 'User created successfully');
      // Reset the form fields to their initial empty values
      setUser(users);
    } catch (error) {
      toast.error(error.response.data.message || 'Error creating user');
    }
  };

  return (
    <Container className="my-4 mb-5">
      <h4 className="text-center">Add New User</h4>
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="fname" onChange={inputHandler} placeholder="Enter Your Name" value={user.fname} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lname" onChange={inputHandler} placeholder="Enter Your Last Name" value={user.lname} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" onChange={inputHandler} placeholder="Enter Your Email" value={user.email} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={inputHandler} name="password" type="password" placeholder="Enter Your Password" value={user.password} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Adduser;
