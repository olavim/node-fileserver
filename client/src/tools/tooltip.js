import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../components/Tooltip';

export const showTooltip = (parent, text) => {
	let parentRect = parent.getBoundingClientRect();
	let style = {
		left: parentRect.left + 'px',
		top: (parentRect.top - 20) + 'px'
	}

	let tooltip = <Tooltip text={text} style={style} />;
	//parent.appendChild(React.findDOMNode(tooltip));
	ReactDOM.render(tooltip, document.body);
}

export const hideTooltips = (parent) => {
	let tooltips = parent.getElementsByClassName('tooltip');
	for (let i = 0; i < tooltips.length; i++)
		parent.removeChild(tooltips[i]);
}