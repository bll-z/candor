import './location-info.scss';

import React from 'react';

const locationInfo = () => (
	<div className="location-info">
		<div className="location-title">Candor Transport</div>
		<div className="location-address">22801 Aurora Rd Suite 1</div>
		<div className="location-address">Bedford Hts, Ohio 44146</div>
		<div>
			<span className="location-phone">P: <a href="tel:+18669419100">866.941.9100 </a></span>
			<span className="location-phone">P: <a href="tel:+12163787100">216.378.7100</a></span>
			<span className="location-phone">F: <a href="tel:+12163789232">216.378.9232</a></span>
		</div>
	</div>
);

export default locationInfo;
