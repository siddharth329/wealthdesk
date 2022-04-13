import React from 'react';
import './card.styles.scss';

const Card = ({ head, subhead, pills, min, type, typeVal, sensex }) => {
	return (
		<div className="cards">
			<div className="cards__head">
				<div>
					<div
						className="cards__img"
						style={{ background: `url(https://picsum.photos/200/300)` }}
					>
						&nbsp;
					</div>
				</div>
				<div className="cards__headerdisc">
					<div className="cards__header">{head}</div>
					<div className="cards__subhead">{subhead}</div>
				</div>
			</div>

			<div className="cards__pills">
				{pills.map((pill) => <div className="cards__pill">{pill}</div>)}
			</div>

			<div className="">
				<div className="cards__heading">Min Investment</div>
				<div className="cards__minval">₹ {min}</div>
			</div>

			<div className="">
				<div className="cards__heading">1 Year Comparision</div>

				<div className="cards__typecontainer">
					<div className="cards__type">{type}</div>
					<div className="cards__typeval">{typeVal}</div>
				</div>
				<div className="cards__sensexcontainer">
					<div className="cards__type">Sensex</div>
					<div className="cards__typeval">{sensex}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
