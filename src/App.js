import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Carousel from './components/Carousel.jsx';
import Transactions from './components/Transactions.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		// Data for the cards section
		var currencies = [
			{ symbol: '$', name: 'US Dollar', code: 'USD', amount: 94.56, id: 0 },
			{ symbol: 'R$', name: 'Real', code: 'BRL', amount: 45.94, id: 1 },
			{ symbol: '€', name: 'Euro', code: 'EUR', amount: 251.15, id: 2 },
		];

		// Data for transactions section
		var transactions = [
			{id: 0, code: 'BRL', amount: -94.75, date: (new Date(2019, 2, 25)).toDateString()},
			{id: 1, code: 'BRL', amount: 84.43, date: (new Date(2019, 3, 26).toDateString())},
			{id: 2, code: 'USD', amount: 15.12, date: (new Date(2019, 3, 29)).toDateString()},
		]

		// Data for pending transactions
		var pending = [
			{id: 0, code: 'BRL', amount: 78.14, date: (new Date(2019, 2, 25)).toDateString()},
			{id: 1, code: 'BRL', amount: -6.99, date: (new Date(2019, 3, 26).toDateString())},
		]

		// Binding the headerClick method to the App object
		this.headerClick = this.headerClick.bind(this);

		// Initial state of myWallet
		this.state = { currencies: currencies, transactions: transactions, pending: pending };
	};

	render() {
		return (
			<div className="container bg-image">
				<Header headerClick={this.headerClick}/>
				<Nav currencies={this.state.currencies}/>
				<Carousel currencies={this.state.currencies} />
				<Transactions transactions={this.state.transactions} pending={this.state.pending}/>
			</div>
		);
	}

	headerClick(event) {

		if (event.target.getAttribute('rotated') === "false") {

			// Rotate button icon
			event.target.classList.toggle('fa-rotate-180');
			event.target.setAttribute('rotated', 'true');

			// Collapse cards
			document.querySelectorAll('.card-container').forEach((item) => {

				// Collapse container
				item.classList.add('card-container-collapsed');
				item.classList.remove('card-container');

				// Collapse svg opacity mask
				item.classList.add('mask-collapsed');
				item.classList.remove('mask');

				// Hide currency description
				item.querySelector('.card-description').firstChild.classList.toggle('hide');

				// Fix cards content
				item.querySelector('.card-amount').firstChild.classList.add('card-amount');
			});

			// Make transactions table the main focus
			document.querySelector('table').classList.toggle('hide');

			// Change Pending text color
			document.querySelector('.trans-container').firstChild.style.color = "white";
			
		} else {

			// Unrotate button icon
			event.target.classList.toggle('fa-rotate-180');
			event.target.setAttribute('rotated', 'false');

			// Expand cards
			document.querySelectorAll('.card-container-collapsed').forEach((item) => {

				// Expand container
				item.classList.add('card-container');
				item.classList.remove('card-container-collapsed');

				// Expand svg opacity mask
				item.classList.add('mask');
				item.classList.remove('mask-collapsed');

				// Show currency description
				item.querySelector('.card-description').firstChild.classList.toggle('hide');

				// Fix cards content
				item.querySelector('.card-amount').firstChild.classList.remove('card-amount');
			});

			// Hide transactions table
			document.querySelector('table').classList.toggle('hide');

			// Change Pending text color
			document.querySelector('.trans-container').firstChild.style.color = "#333645";
		}		
	}
}

export default App;