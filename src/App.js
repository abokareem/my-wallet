import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Carousel from './components/Carousel';

class App extends Component {
	constructor(props) {
		super(props);

		var currencies = [
			{ symbol: '$', name: 'US Dollar', code: 'USD', amount: 94.56, id: 0 },
			{ symbol: 'R$', name: 'Real', code: 'BRL', amount: 45.94, id: 1 },
			{ symbol: '€', name: 'Euro', code: 'EUR', amount: 251.15, id: 2 },
		];

		var transactions = [
			{id: 0, code: 'BRL', amount: -94.75},
			{id: 1, code: 'BRL', amount: 84.43},
			{id: 2, code: 'USD', amount: 15.10},
		]

		this.state = { currencies: currencies, transactions: transactions };
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Nav currencies={this.state.currencies} />
				<Carousel currencies={this.state.currencies} />
			</div>
		);
	}
}

export default App;
