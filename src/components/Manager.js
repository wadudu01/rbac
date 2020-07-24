import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Manager = (props) => {
	console.log(props);
	
	return (
		<Container>
      <Jumbotron>
      <h1>Halaman Manager</h1>
      </Jumbotron>
		</Container>
	);
};
export default Manager;
