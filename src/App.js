import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		var currencies = [
			{ symbol: '$', name: 'US Dollar', code: 'USD', amount: 94.56 },
			{ symbol: 'R$', name: 'Real', code: 'BRL', amount: 45.94 },
			{ symbol: '€', name: 'Euro', code: 'EUR', amount: 251.15 },
		];

		this.state = { currencies: currencies };
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Nav currencies={this.state.currencies} />
			</div>
		);
	}
}

export default App;
