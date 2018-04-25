import './contact-us.scss';

import React from 'react';

import LocationInfo from 'components/location-info/location-info';
import ContactUsForm from 'components/contact-us-form/contact-us-form';

const contactUs = () => (
	<div className="contact-us candor-page candor-content">
		<div className="candor-title">Contact Us</div>
		<div className="candor-paragraph">Need answers fast? Candor is the solution! <a href="tel:+12163787100">Call now</a> to speak directly with one of our local representatives and let us work efficient solutions right away.
		</div>
		<LocationInfo />
		<ContactUsForm />
	</div>
);

export default contactUs;
