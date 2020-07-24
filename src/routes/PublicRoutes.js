import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import JumbotronWrapper from '../components/JumbotronWrapper';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

const PublicRoutes = ({ match }) => (
	<Fragment>
		<Switch>
			<Route exact path="/" component={Login} />
		</Switch>
	</Fragment>
);

export default PublicRoutes;
