import React from 'react';


class HamburgerIcon extends React.PureComponent {
	render() {
		return (
			<svg className="candor-icon" width={this.props.width} height={this.props.height} viewBox="0 0 92.833 92.833">
				<g className="no-stroke fill">
					<path d="M89.834,1.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V4.75 C92.834,3.096,91.488,1.75,89.834,1.75z" />
					<path d="M89.834,36.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V39.75 C92.834,38.096,91.488,36.75,89.834,36.75z" />
					<path d="M89.834,71.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V74.75 C92.834,73.095,91.488,71.75,89.834,71.75z" />
				</g>
			</svg>
		);
	}
}

export default HamburgerIcon;
