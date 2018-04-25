import * as React from 'react';


class SidebarItem extends React.Component {

	onClick = () => {
		this.props.onToggle();
		if (this.props.path) {
			this.props.history.push(this.props.path);
		}
	};

	onKeyUp = (e) => {
		if (e.keyCode === 32) {
			this.onClick();
		}
	};

	render() {
		const sideBarItemClasses = `candor-nav-item ${this.props.selected ? 'selected' : ''}`;
		const sideBarItemTitleClasses = `candor-nav-item-title ${this.props.selected ? 'selected' : ''}`;

		return (
			<li role="tab" tabIndex={0} className={sideBarItemClasses} onClick={this.onClick} onKeyUp={this.onKeyUp}>
				<div className={sideBarItemTitleClasses}>
					{this.props.title}
				</div>
			</li>
		);
	}
}

export default SidebarItem;
