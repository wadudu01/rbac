import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Button, Row, Col } from 'react-bootstrap';
import JumbotronWrapper from './JumbotronWrapper';
import { Link } from 'react-router-dom';
import history from '../util/history';

class Login extends Component {
	constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
		let wadudu = ""
    const { email, password } = this.state;
		event.preventDefault();
		console.log(this.state)
		let emailku = this.state.email
		let passku = this.state.password


		if(emailku === "admin@gmail.com" && passku === "1"){
			// console.log("ini siapa")
			wadudu="1"
		}else if(emailku === "manager@gmail.com" && passku === "2"){
			// console.log("ini siapa")
			wadudu="2"
		}


		localStorage.setItem('roles', wadudu);
		history.push('/app');
  }

	render() {
		return (
			<JumbotronWrapper title="Login" description="">
				 <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
			</JumbotronWrapper>
		);
	}
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
