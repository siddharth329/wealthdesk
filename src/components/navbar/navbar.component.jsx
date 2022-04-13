import React from 'react';
import './navbar.styles.scss';

const NavbarComponent = () => {
	return (
		<div className="nav">
			<div className="nav__wrapper">
				<div className="nav__brand">
					<img
						src="https://wealthdesk.in/wp-content/uploads/2021/09/landing-logo.svg"
						alt="Logo"
						className="nav__logo"
					/>
				</div>
				<div className="nav__search">
					<div className="nav__input">Search for Stocks</div>
					<div className="nav__searchbtn">Search</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
