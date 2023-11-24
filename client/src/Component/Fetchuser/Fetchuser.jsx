import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Fetchuser = () => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' , password: '1234567890' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' , password: '1234567890' },
    // Add more user data as needed
  ];

  const handleEdit = (userId) => {
    // Add your edit/update logic here
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    // Add your delete logic here
    console.log(`Delete user with ID ${userId}`);
  };

  return (
    <Container className="my-4">
    <h4 className='text-center'>All User Details</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={'/edituser'}>
                  <Button variant="info" onClick={() => handleEdit(user.id)}>
                    <FaEdit />
                  </Button>
                </Link>{' '}
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Fetchuser;
