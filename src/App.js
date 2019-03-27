import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Carousel from './components/Carousel.jsx';
import Transactions from './components/Transactions.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		var currencies = [
			{ symbol: '$', name: 'US Dollar', code: 'USD', amount: 94.56, id: 0 },
			{ symbol: 'R$', name: 'Real', code: 'BRL', amount: 45.94, id: 1 },
			{ symbol: '€', name: 'Euro', code: 'EUR', amount: 251.15, id: 2 },
		];

		var transactions = [
			{id: 0, code: 'BRL', amount: -94.75, date: (new Date(2019, 2, 25, 10, 33, 45)).toDateString()},
			{id: 1, code: 'BRL', amount: 84.43, date: (new Date(2019, 3, 26, 7, 21, 32).toDateString())},
			{id: 2, code: 'USD', amount: 15.12, date: (new Date(2019, 3, 29, 9, 42, 15)).toDateString()},
		]

		this.state = { currencies: currencies, transactions: transactions };
	};

	render() {
		return (
			<div className="container bg-image">
				<Header />
				<Nav currencies={this.state.currencies} />
				<Carousel currencies={this.state.currencies} />
				<Transactions transactions={this.state.transactions}/>
			</div>
		);
	}
}

export default App;
