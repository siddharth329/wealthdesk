import React from 'react';
import CardContainer from './components/card-container/card-container.component';
import CompanyComponent from './components/company/company.component';
import ExploreComponent from './components/explore/explore.component';
import Footer from './components/footer/footer.component';
import HorizontalComponent from './components/horizontal/horizontal.component';
import NavbarComponent from './components/navbar/navbar.component';

function App() {
	return (
		<div className="App">
			<div className="bg-clip">&nbsp;</div>
			<NavbarComponent />
			<CompanyComponent />
			<HorizontalComponent />
			<ExploreComponent />
			<CardContainer {...cardData1} />
			<CardContainer {...cardData2} />
			<CardContainer {...cardData3} />
			<Footer />
		</div>
	);
}

const cardData1 = {
	header: 'This stocks is in 4 WealthBaskets',
	warning: null,
	pills: [ '20,000 - 50,000', '20,000 - 50,000', '20,000 - 50,000', '20,000 - 50,000' ],
	cards: [
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		}
	]
};

const cardData2 = {
	header: 'Find more WealthBaskets containing this stock based on your investment appetite',
	warning:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum delectus pariatur cum ipsa de.',
	pills: [ '20,000 - 50,000', '20,000 - 50,000', '20,000 - 50,000' ],
	cards: [
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		}
	]
};

const cardData3 = {
	header: 'Find more WealthBaskets containing similar stocks',
	warning: null,
	pills: [],
	cards: [
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		},
		{
			head: 'Chemical Momentum',
			subhead: 'By Quantech Capital',
			pills: [ 'Low Volatility', 'Midcap' ],
			min: '4,000',
			type: 'Stable Momentum',
			typeVal: '+20.24%',
			sensex: '+12.24%'
		}
	]
};

export default App;
