import React , {Component} from 'react'
// import axios from 'axios'
// import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Row, Col } from 'reactstrap';
// import TableC from './TableC';
import BackC from './BackC'
import FormC from './FormC';

class CreateC extends Component{
 
  render(props){

    console.log("dew.js",this.props.users);
    
    return(
      <div>
        <Row>
          <Col>
          <BackC/>
          </Col>
        </Row>
        <h1>Create</h1>
        <FormC/>
      </div>
    )
  }
}

export default CreateC