import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import CarrierServices from '../carrier-services/carrier-services';
import CompanyProfile from '../company-profile/company-profile';
import ContactUs from '../contact-us/contact-us';
import ContainerServices from '../container-services/container-services';
import Home from '../home/home';
import Login from '../login/login';
import LtlShipments from '../ltl-shipments/ltl-shipments';
import Rigging from '../rigging/rigging';
import Warehousing from '../warehousing/warehousing';
import TransportationServices from '../transportation-services/transportation-services';


export default class ApplicationRouter extends React.Component {

	render() {
		return (
			<Switch>
				<Route
					path="/home"
					component={Home}
				/>
				<Route
					path="/carrier-services"
					component={CarrierServices}
				/>
				<Route
					path="/company-profile"
					component={CompanyProfile}
				/>
				<Route
					path="/contact-us"
					component={ContactUs}
				/>
				<Route
					path="/container-services"
					component={ContainerServices}
				/>
				<Route
					path="/login"
					component={Login}
				/>
				<Route
					path="/ltl-shipments"
					component={LtlShipments}
				/>
				<Route
					path="/rigging"
					component={Rigging}
				/>
				<Route
					path="/warehousing-and-distribution"
					component={Warehousing}
				/>
				<Route
					path="/transportation-services"
					component={TransportationServices}
				/>
				<Redirect key="redirect" from="*" to="/home" />
			</Switch>
		);
	}
}
