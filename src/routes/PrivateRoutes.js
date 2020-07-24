import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { rolesConfig } from '../config/roles';
import * as Routes from './index';
import Navigation from '../components/Navigation';
import NotFound from '../components/NotFound';

class PrivateRoutes extends Component {
	state = { allowedRoutes: [] };

	componentDidMount() {
		let roles = localStorage.getItem('roles');
		// console.log("roles Private v1: ", roles)

		if (roles) {
			roles = ['common', ...roles];
			// console.log("roles Private v2: ", roles)

			let allowedRoutes = roles.reduce((acc, role) => {
				return [...acc, ...rolesConfig[role].routes];
			}, []);

			// console.log("t : ", roles)
			allowedRoutes = uniqBy(allowedRoutes, 'url');
			this.setState({ allowedRoutes });
		} else {
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<Fragment>
				<Navigation
					routes={this.state.allowedRoutes}
					path={this.props.match.path}
				/>
				<Switch>
					{this.state.allowedRoutes.map((route) => (
						<Route
							exact
							key={route.url}
							component={Routes[route.component]}
							path={`${this.props.match.path}${route.url}`}
						/>
					))}
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		);
	}
}

export default PrivateRoutes;
