import './application.scss';

import React from 'react';

import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';

import ApplicationRouter from './router';


class Application extends React.Component {

	render() {
		const { openNavbar } = this.props;

		return (
			<div className="application-wrapper">
				<div className="header-wrapper">
					<Header openNavbar={openNavbar} />
				</div>
				<ApplicationRouter />
			</div>
		);
	}

}

export default Application;
