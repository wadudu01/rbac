import React , {Component} from 'react'
import TableC from './TableC';
import { connect } from 'react-redux';
import { getUsersList } from '../actions/userActions';
 

class Dew extends Component{
  componentDidMount(){
    return this.props.dispatch(getUsersList())
  }
  
  render(props){

    // console.log("dew.js",this.props.users);
    
    return(
      <div>
        <h1>Wadudu</h1>
        <TableC/>
      </div>
    )
  }
}

export default connect()(Dew)