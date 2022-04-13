import React from 'react';
import Card from '../card/card.component';
import './card-container.styles.scss';

const CardContainer = ({ header, pills, cards, warning }) => {
	return (
		<div className="cardcontainer">
			<div className="cardcontainer__container">
				<div className="cardcontainer__header">{header}</div>

				{pills.length > 0 && (
					<div className="cardcontainer__pills">
						{pills.map((pill, index) => (
							<div
								className={`cardcontainer__pill ${index === 0 &&
									'cardcontainer__pill--active'}`}
							>
								{pill}
							</div>
						))}
					</div>
				)}

				<div className="cardcontainer__cards">
					{cards.map((card) => <Card {...card} />)}
				</div>

				{warning && <div className="cardcontainer__warning">{warning}</div>}
			</div>
		</div>
	);
};

export default CardContainer;
