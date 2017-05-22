import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NewPersonForm from './containers/FormData';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="/form" component={NewPersonForm} />
	</Route>
);
