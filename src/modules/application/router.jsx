import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ContentInfo from 'components/content-info/content-info';

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

const candorPage = Page => () => (
	<div className="content-wrapper">
		<div className="content">
			<Page />
			<ContentInfo />
		</div>
	</div>
);


export default class ApplicationRouter extends React.Component {

	render() {
		return (
			<Switch>
				<Route
					path="/home"
					component={candorPage(Home)}
				/>
				<Route
					path="/carrier-services"
					component={candorPage(CarrierServices)}
				/>
				<Route
					path="/company-profile"
					component={candorPage(CompanyProfile)}
				/>
				<Route
					path="/contact-us"
					component={candorPage(ContactUs)}
				/>
				<Route
					path="/container-services"
					component={candorPage(ContainerServices)}
				/>
				<Route
					path="/login"
					component={Login}
				/>
				<Route
					path="/ltl-shipments"
					component={candorPage(LtlShipments)}
				/>
				<Route
					path="/rigging"
					component={candorPage(Rigging)}
				/>
				<Route
					path="/warehousing-and-distribution"
					component={candorPage(Warehousing)}
				/>
				<Route
					path="/transportation-services"
					component={candorPage(TransportationServices)}
				/>
				<Redirect key="redirect" from="*" to="/home" />
			</Switch>
		);
	}
}
