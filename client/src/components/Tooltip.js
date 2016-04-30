import React from 'react'
import ReactDOM from 'react-dom'

export const Orientation = {
	TOP: 'Top',
	RIGHT: 'Right',
	BOTTOM: 'Bottom',
	LEFT: 'Left',
}

const verticalMargin = 40;
const horizontalMargin = 20;

export default class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {width: 0, height: 0, windowWidth: window.innerWidth, windowHeight: window.innerHeight};
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
	}

	componentDidUpdate() {
		let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
		if (this.state.width !== rect.right - rect.left || this.state.height !== rect.bottom - rect.top)
			this.setState({width: rect.right - rect.left, height: rect.bottom - rect.top})

		let bgcolor = hexToRgb(this.props.bgcolor);
		this.luminance = getLuminance(bgcolor);
	}

	handleResize(e) {
		this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
	}

	offset() {
		let parentRect = this.props.parent.getBoundingClientRect();
		if (this.props.orientation === Orientation.TOP || this.props.orientation === Orientation.BOTTOM) {
			return {
				left: (parentRect.left + parentRect.right) / 2 - this.state.width / 2,
				top: this.props.orientation === Orientation.TOP ? parentRect.top - verticalMargin : parentRect.bottom + verticalMargin
			}
		} else {
			return {
				left: this.props.orientation === Orientation.LEFT ? parentRect.left - horizontalMargin : parentRect.right + horizontalMargin,
				top: (parentRect.top + parentRect.bottom) / 2 - this.state.height / 2,
			}
		}
	}

	render() {
		let offset = this.offset();
		let style = {
			display: 'none',
			left: offset.left + 'px',
			top: offset.top + 'px',
			backgroundColor: this.props.bgcolor,
			borderColor: this.props.bgcolor,
			color: this.luminance > 0.179 ? '#000' : '#FFF'
		}

		if (this.props.active)
			Object.assign(style, {display: 'inline'});

		let arrowStyle = {};
		arrowStyle['border' + this.props.orientation + 'Color'] = this.props.bgcolor;

		return (
			<div className={'tooltip ' + this.props.orientation.toLowerCase()} style={style}>
				<span>{this.props.text}</span>
				<div className="arrow" style={arrowStyle} />
			</div>
		)
	}
}

function getLuminance(color) {
	let c = [color.r/255, color.g/255, color.b/255];
	for (let i = 0; i < c.length; i++) {
		if (c[i] <= 0.03928) {
			c[i] = c[i] / 12.92
		} else {
			c[i] = Math.pow((c[i] + 0.055) / 1.055, 2.4);
		}
	}

	return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}