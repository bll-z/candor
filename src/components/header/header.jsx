import './header.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, setPropTypes } from 'recompose';
import { withRouter } from 'react-router-dom';

import HamburgerIcon from 'icons/hamburger';
import Modal from 'components/modal/modal';
import Sidebar from 'components/sidebar/sidebar';
import BanyanLoginForm from 'components/banyan-login-form/banyan-login-form';
import routes from 'utils/routes';


const defaultBurgerMenuState = {
	open: false,
};

const burgerMenuMixin = compose(
	setPropTypes({
		history: PropTypes.shape({}).isRequired,
	}),
	withState('burgerMenuState', 'setBurgerMenuState', defaultBurgerMenuState),
	withHandlers({
		onRouteSelect: ({ history }) => ({ path }) => history.push(path),
		onBurgerMenuToggle: ({ burgerMenuState, setBurgerMenuState }) => () => setBurgerMenuState({ open: !burgerMenuState.open }),
	}),
);


const defaultFormModalState = {
	isOpen: false,
};

const formModalMixin = compose(
	withState('formModalState', 'setFormModalState', defaultFormModalState),
	withHandlers({
		openFormModal: ({ setFormModalState }) => () => setFormModalState({ isOpen: true }),
		onFormModalClose: ({ setFormModalState }) => () => setFormModalState(defaultFormModalState),
	}),
);

const header = ({ openFormModal, onFormModalClose, formModalState, onRouteSelect, burgerMenuState, onBurgerMenuToggle }) => (
	<div className="header" role="banner">
		<div className="header-logo" />
		<div className="banyan-login-form-wrapper">
			<button
				onClick={onBurgerMenuToggle}
				className="candor-nav-small candor-wrapper-btn candor-btn-default"
				type="button"
			>
				<HamburgerIcon height="30px" width="30px" />
			</button>
		</div>
		<Sidebar open={burgerMenuState.open} onToggle={onBurgerMenuToggle} />
	</div>
);

export default compose(
	formModalMixin,
)(withRouter(burgerMenuMixin(header)));
