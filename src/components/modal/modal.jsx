import './modal.scss';
import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

class Modal extends React.Component {

	get wrappedProps() {
		return {
			...this.props,
			className: `candor-modal ${this.props.className || ''}`,
			overlayClassName: 'candor-modal-overlay',
			contentLabel: 'Modal',
		};
	}

	render() {
		return <ReactModal {...this.wrappedProps} />;
	}

}

export default Modal;
