import './sidebar.scss';
import 'react-widgets/dist/css/react-widgets.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { DropdownList } from 'react-widgets'
import _ from 'lodash';

import routes from 'utils/routes';

import SidebarItem from './sidebar-item';

const renderNavItem = ({ title, path }, onToggle = () => {}) => (<Route
	key={path}
	path={path}
	children={({ history, location }) => (
		<SidebarItem title={title} path={path} selected={location && location.pathname.startsWith(path)} history={history} onToggle={onToggle} />
	)}
/>);

const renderNavList = (label, data = []) => {
	return (
		<li role="tab" tabIndex={0} className="candor-nav-list-wrapper" key={label}>
			<div className="candor-nav-list-label">{label}</div>
			<ul className="candor-nav-list">
				{data.map(item => renderNavItem(item))}
			</ul>
		</li>
	);
};

const renderLargeNav = () => {
	const groupedRoutes = _.groupBy(routes, 'order');
	const orders = Object.keys(groupedRoutes).sort();

	return (
		<ul className="candor-nav-large" role="navigation">
			{orders.map(order => {
				const group = groupedRoutes[order];
				const label = group[0].group;

				if (label) {
					return renderNavList(label, group);
				}

				return renderNavItem(group[0]);
			})}
		</ul>
	)
};

const renderSmallNav = (open, onToggle) => {
	const className = `candor-nav-small ${open ? '' : 'candor-nav-hidden'}`;

	return (
		<ul className={className} role="navigation">
			{routes.map(route => renderNavItem(route, onToggle))}
		</ul>
	);
}


class Navigation extends React.Component {

	static propTypes = {
		onToggle: PropTypes.func.isRequired,
		open: PropTypes.bool.isRequired,
	};

	render() {
		const { open, onToggle } = this.props;

		return (
			<div className="candor-nav">
				{renderSmallNav(open, onToggle)}
				{renderLargeNav()}
			</div>
		);
	}
};

export default Navigation;
