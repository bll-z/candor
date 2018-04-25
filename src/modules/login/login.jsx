import './login.scss';

import React from 'react';

import BanyanLoginForm from 'components/banyan-login-form/banyan-login-form';

const login = () => (
	<div className="candor-login-page-wrapper">
		<div className="candor-login-page">
			<div className="header-logo" />
			<div className="banyan-login-title">Banyan Portal Login</div>
			<BanyanLoginForm />
		</div>
	</div>
);

export default login;
