import React , {Component}from 'react';
import JumbotronWrapper from '../components/JumbotronWrapper';
import Dew from '../components/Dew';
import Manager from '../components/Manager';
import CreateC from '../components/CreateC';

// Private routes.
class AdminOnly extends Component {
	
	render() {
		// console.log("admin only => ",this.state.users);
		return (
			<Dew/>
		);
	}
}

// const AdminOnly1 = (props) =>{
// 	return(
// 		<Dew users={props.users}/>
// 	)
// }


const Create = () => <CreateC/>
const Users = () => <JumbotronWrapper title="Users" />;
const Managerx = () => <Manager/>;
const Profile = () => <JumbotronWrapper title="Profile" />;
const Home = () => <JumbotronWrapper title="Home" />;

export {
	AdminOnly,
	Users,
	Managerx,
	Profile,
	Create,
	Home
};
