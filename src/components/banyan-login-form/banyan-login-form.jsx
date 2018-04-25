import React from 'react';

const banyanLoginForm = () => (
	<form id="frmlogin" className="banyan-login-form" name="frmlogin" action="http://logistics.banyantechnology.com/index.aspx?strBrand=Candor" method="post">
		<div className="candor-form-group">
			<label htmlFor="#username" style={{ display: 'none' }}>Username:</label>
			<input name="username" type="text" className="text-input" id="username" placeholder="Enter username..." />
		</div>
		<div className="candor-form-group">
			<label htmlFor="#password" style={{ display: 'none' }}>Password:</label>
			<input name="password" type="password" className="text-input" id="password" placeholder="Enter password..." />
		</div>
		<div className="candor-form-actions">
			<button type="submit" className="candor-btn candor-btn-primary">Login</button>
		</div>
	</form>
);

export default banyanLoginForm;
