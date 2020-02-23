import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Legend from "./Legend.js";

function App() {
  var h = 75
  return (
    <div className="App">
      <Form name="enterZip" onSubmit={handleSubmit} class="Form">
        <Form.Group controlId="enterZip">
          <Form.Label style={{fontSize:40,fontWeight:1000}}>Check The Water Quality Near You</Form.Label>
          <Form.Control style={{width: 600, height: 50,backgroundColor:'#85C1E9',marginLeft:350,marginRight:350,marginTop:25,}}size="lg" minLength="5" maxLength="5" type="zip" placeholder="Enter 5 Digit Zip Code" />
        </Form.Group>
        <Button type="submit" variant="primary" size="lg" style={{color:'white', backgroundColor:'#0099ff'}}>
          GO
        </Button>
      </Form>


      <ListGroup style={{width:200,height:100,marginLeft:1000,marginTop:100}}>
      <ListGroup.Item>Bromodichloromethane</ListGroup.Item>
      <ListGroup.Item>Chloroform</ListGroup.Item>
      <ListGroup.Item>Total trihalomethanes </ListGroup.Item>
      <ListGroup.Item>Trichloroacetic acid</ListGroup.Item>
      </ListGroup>

      <ListGroup style={{width:75,height:100, marginLeft:600,marginRight:600, marginBottom:100}}>
      <ListGroup.Item style={{backgroundColor:"red",height:75}}></ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"blue",height:22}}></ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"green",height:h}}></ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"yellow",height:h}}></ListGroup.Item>
      </ListGroup>
      
    </div>
  );
}

function handleSubmit(event)
{
  event.preventDefault();
  console.log("hey")
}
function doStuff(event)
{
  event.preventDefault();
}

export default App;

