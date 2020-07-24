import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Row, Col, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle:()=>{
    return {width:"5%"}
  }
}, {
  dataField: 'name',
  text: 'Nama',
  sort: true
}, {
  dataField: 'price',
  text: 'Price',
  sort: true
},{
  dataField: 'link',
  text: "Action",
  formatter:(rowContent, row)=>{
    return(
      <div>
        <Link to={"edit/"+row._id}>
          <Button color="dark" className="mr-2">Edit
          </Button>
        </Link>
        <Button color="dark" className="mr-2">Delete
        </Button>
      </div>
    )
  }
}

];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList
  }
}

const TableC = (props) => {
  console.log("table => ",props.users)
  return(
    <div>
      {props.getUsersList ? <div>
        <Row>
          <Col>
          <Link to={"/app/create"}>
            <Button color="dark" className="mr-2">Create
            </Button>
          </Link>
          </Col>
        </Row>
        <BootstrapTable keyField='_id' data={ props.getUsersList } columns={ columns } />
      </div> : <div className="text-center">
      {props.errorUsersList ? <h1>{props.errorUsersList}</h1> : <Spinner color="secondary"/>}
        </div>}
      
    </div>
  )
}

export default connect(mapStateToProps,null)(TableC)