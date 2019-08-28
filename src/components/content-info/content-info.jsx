import './content-info.scss';

import React from 'react';
import { Route } from 'react-router-dom';

import LocationInfo from 'components/location-info/location-info';

const contentInfo = (props) => (
	<div className="content-info" role="contentinfo">
		<div className="contact-info-row">
			<div className="candor-info">
				<div className="candor-pronounciation">(can-dor)</div>
				<div className="candor-definition">honesty, sincerity, forthrightness</div>
			</div>
			<LocationInfo />
			<Route
				path={'/contact-us'}
				children={({ history }) => (
					<a className="contact-us" onClick={() => history.push('contact-us')}>contact us</a>
				)}
			/>
		</div>
		<div className="copyright-row" style={{ display: 'none' }}>
			<div className="copyright-wrapper">
				<div className="copyright-symbol">©</div>
				<div className="copyright-year">2018</div>
			</div>
			<div className="copyright-name">Candor</div>
		</div>
	</div>
);

export default contentInfo;
