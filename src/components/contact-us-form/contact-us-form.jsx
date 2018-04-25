import React from 'react';

class ContactUsForm extends React.Component {

	onSubmit(event) {
		if (document.getElementById('starcolor').value.toLocaleLowerCase() !== 'white') {
			console.log('preventing');
			event.preventDefault();
		}

		// TODO: remove
		event.preventDefault();
	}

	render() {
		return (
			<form id="contactusfrm" className="contact-us-form" name="contactusfrm" method="post" onSubmit={(event) => this.onSubmit(event)}>
				<div className="candor-form-group">
					<label htmlFor="#name">Name:</label>
					<input name="name" type="text" className="text-input" id="name" placeholder="Enter name..." required />
				</div>
				<div className="candor-form-group">
					<label htmlFor="#email">Email:</label>
					<input name="email" type="email" className="text-input" id="email" placeholder="Enter email..." required />
				</div>
				<div className="candor-form-group">
					<label htmlFor="#phone">Phone:</label>
					<input name="phone" type="tel" className="text-input" id="phone" placeholder="Enter phone..." />
				</div>
				<div className="candor-form-group">
					<label htmlFor="#subject">Subject:</label>
					<select name="subject" type="subject" className="text-input select-input" id="subject" placeholder="Enter password..." required>
						<option value="">Pick one...</option>
						<option value="request more information">Request more information</option>
						<option value="request a quote">Request a quote</option>
						<option value="suggestion or comment">Suggestion or comment</option>
						<option value="report a problem with the website">Report a problem with the website</option>
					</select>
				</div>
				<div className="candor-form-group">
					<label htmlFor="#message">Message:</label>
					<textarea name="message" className="text-input textarea-input" id="message" placeholder="Enter message..." required></textarea>
				</div>
				<div className="candor-form-group">
					<label htmlFor="#starcolor">Are you a human? What color are the stars on the United States Flag?:</label>
					<img src="/static/images/usaniflg.gif" />
					<input name="starcolor" type="text" className="text-input" id="starcolor" placeholder="Enter answer..." required />
				</div>
				<div className="candor-form-actions">
					<button type="submit" className="candor-btn candor-btn-primary">Submit</button>
				</div>
			</form>
		);
	}
}

export default ContactUsForm;
