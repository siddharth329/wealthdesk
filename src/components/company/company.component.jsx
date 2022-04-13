import React from 'react';
import './company.styles.scss';

const CompanyComponent = () => {
	return (
		<div className="rel">
			<div className="rel__container">
				<span className="rel__name">Reliance Industries Ltd.</span>
				<span className="pill pill--1">NSE</span>
				<span className="pill pill--2">BSE</span>
			</div>
			<div className="rel__desc">Oil, Gas, and Fuels</div>

			<div className="card">
				<div className="card__container">
					<div className="card__head">RELIANCE</div>
					<div className="card__desc">
						<span className="card__price">₹ 2,527.40</span>
						<span className="card__time">29th Oct, 3:30PM IST</span>
					</div>
					<div className="card__meta">
						<span className="card__red">-38.60 (2.26%)</span>
						<span className="card__ltd">LTD</span>
					</div>
				</div>
				<div className='card__btn-container'>
					<button className="card__btn">Trade</button>
				</div>
			</div>
		</div>
	);
};

export default CompanyComponent;
