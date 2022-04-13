import React from 'react';
import './horizontal.styles.scss';

const HorizontalComponent = () => {
	return (
		<div className="horizontal">
			<ul className="horizontal__links">
				<li className="horizontal__link">Overview</li>
				<li className="horizontal__link">Financials</li>
				<li className="horizontal__link horizontal__link--active">WealthBaskets</li>
				<li className="horizontal__link">News & Events</li>
			</ul>
		</div>
	);
};

export default HorizontalComponent;
