import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Form name="enterZip" onSubmit={handleSubmit}>
        <Form.Group controlId="enterZip">
          <Form.Label>Check The Water Quality Near You</Form.Label>
          <Form.Control type="zip" placeholder="Enter Zip Code" />
        </Form.Group>
        <Button type="submit" variant="primary" size="lg">
          GO
        </Button>
      </Form>
    </div>
  );
}

function handleSubmit(event)
{
  event.preventDefault();
  console.log("hey")
} 



export default App;
