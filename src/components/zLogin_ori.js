import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Button, Row, Col } from 'react-bootstrap';
import JumbotronWrapper from './JumbotronWrapper';
import { Link } from 'react-router-dom';
import history from '../util/history';

class Login extends Component {
	state = { selected: [] };

	handleChange = (e) => {
		let selected = [];
		for (let i = 0; i < e.target.options.length; i++) {
			if (e.target.options[i].selected) {
				selected.push(e.target.options[i].value);
			}
		}
		this.setState({ selected });
	};

	handleClick = () => {
		// console.log("ini akun :",this.state.selected)
		let wadudu = ""
		let pengguna = this.state.selected[0]
		console.log(pengguna)

		if(pengguna === "3"){
			// localStorage.setItem('roles', JSON.stringify(this.state.selected));
			// localStorage.setItem('roles', "3");
			wadudu="3"
			console.log("ini admin pak")
			// admin = "admin"
		}else if(pengguna === "2"){
			console.log("ini siapa")
			wadudu="2"
		}else if(pengguna === "1"){
			console.log("ini siapa")
			wadudu="1"
		}

		localStorage.setItem('roles', wadudu);
		history.push('/app');
	};

	render() {
		return (
			<JumbotronWrapper title="Login" description="">
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Select Role:</Form.Label>
					<Form.Control
						as="select"
						value={this.state.selected}
						onChange={this.handleChange}
						multiple
					>
						<option value="1">Admin</option>
						<option value="2">Manager</option>
						<option value="3">Customer</option>
					</Form.Control>
				</Form.Group>
				<Alert variant="primary">Support multi roles.</Alert>
				<Row className="text-right">
					<Col sm={11}>
						<Link to="/forgot-password">Forgot Password</Link>
					</Col>
					<Col sm={1}>
						<Link to="/register">Register</Link>
					</Col>
				</Row>
				<Button
					variant="primary"
					onClick={this.handleClick}
					disabled={!this.state.selected.length}
				>
					Login
				</Button>
			</JumbotronWrapper>
		);
	}
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
