import React from "react";
import {Route, Switch} from "react-router-dom";

import Index from "../component/Index";
import Dashboard from "../component/dashboard/dashboard";
import Service from "../component/service/service";
import Contact from "../component/contact/contact";
import Api from "../component/api/api";
import Map from "../component/map/Map";

export default () => (

	<Switch>
		<Route path="/" exact component={Index} />
        <Route path="/service" exact component={Service} />
		<Route path="/dashboard" exact component={Dashboard} />
		<Route path="/map" exact component={Map} />
		<Route path="/api" exact component={Api} />
		<Route path="/contact" exact component={Contact} />
	</Switch>

);