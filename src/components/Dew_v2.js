import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Dew = (props) => {
	console.log(props);
	
	return (
		<Container>
			<Jumbotron style={{ marginTop: '50px' }}>
				<h1>Form</h1>
				<Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="input name" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Price</Label>
        <Input type="number" name="price" id="examplePassword" placeholder="input price" />
      </FormGroup>
      
      <Button>Submit</Button>
    </Form>
			</Jumbotron>
		</Container>
	);
};
export default Dew;
