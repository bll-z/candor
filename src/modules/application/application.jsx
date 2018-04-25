import './application.scss';

import React from 'react';

import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';
import ContentInfo from 'components/content-info/content-info';

import ApplicationRouter from './router';


class Application extends React.Component {

	render() {
		const { openNavbar } = this.props;

		return (
			<div className="application-wrapper">
				<div className="header-wrapper">
					<Header openNavbar={openNavbar} />
				</div>
				<div className="content-wrapper">
					<div className="content">
						<ApplicationRouter />
						<ContentInfo />
					</div>
				</div>
			</div>
		);
	}

}

export default Application;
