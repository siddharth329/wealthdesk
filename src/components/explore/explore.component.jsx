import React from 'react';
import './explore.styles.scss';

const ExploreComponent = () => {
	return (
		<div className="explore">
			<div className="explore__content">
				<h4>What's better than investing in stocks?</h4>
				<h2>
					Investing in a Basket of stocks <br /> backed by Investment Managers
				</h2>
				<a href="#" className="explore__btn">
					Explore WealthBaskets
				</a>
			</div>
			<div
				className="explore__video"
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)`
				}}
			>
				<div>&nbsp;</div>
			</div>
		</div>
	);
};

export default ExploreComponent;
