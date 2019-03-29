import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Carousel from './components/Carousel.jsx';
import Transactions from './components/Transactions.jsx';
import More from './components/More.jsx';

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
			{ id: 0, code: 'BRL', amount: -94.75, date: (new Date(2019, 2, 25)).toDateString() },
			{ id: 1, code: 'BRL', amount: 84.43, date: (new Date(2019, 3, 26).toDateString()) },
			{ id: 2, code: 'USD', amount: 15.12, date: (new Date(2019, 3, 29)).toDateString() },
		]

		// Data for pending transactions
		var pending = [
			{ id: 0, code: 'BRL', amount: 78.14, date: (new Date(2019, 2, 25)).toDateString() },
			{ id: 1, code: 'BRL', amount: -6.99, date: (new Date(2019, 3, 26).toDateString()) },
		]

		// Binding the headerClick method to the App object
		this.headerClick = this.headerClick.bind(this);

		// Binding the toggleNav method to the App object
		this.toggleNav = this.toggleNav.bind(this);

		// Binding the toggleModal method to the App object
		this.toggleModal = this.toggleModal.bind(this);

		// Binding the addTransaction method to the App object
		this.addTransaction = this.addTransaction.bind(this);

		// Initial state of myWallet
		this.state = { currencies: currencies, transactions: transactions, pending: pending };
	};

	render() {
		return (
			<div className="container bg-image">
				<Header headerClick={this.headerClick} />
				<Nav currencies={this.state.currencies} />
				<Carousel currencies={this.state.currencies} />
				<Transactions transactions={this.state.transactions} pending={this.state.pending} />
				<More toggleNav={this.toggleNav} toggleModal={this.toggleModal} addTransaction={this.addTransaction} />
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

	toggleNav(event) {

		// If sidenav closed, open it
		if (event.target.getAttribute('data-open') === "false") {

			// Change plus sign to minus sign
			event.target.classList.remove('fa-plus');
			event.target.classList.add('fa-minus');

			// Save open status
			event.target.setAttribute('data-open', 'true');

			// Open nav
			document.getElementById('side-nav').parentElement.classList.toggle('modal-show');
			document.getElementById('side-nav').style.width = "auto";

		} else {

			// Change minus sign to plus sign
			event.target.classList.remove('fa-minus');
			event.target.classList.add('fa-plus');

			// Save closed status
			event.target.setAttribute('data-open', 'false');

			// Close nav
			document.getElementById('side-nav').parentElement.classList.toggle('modal-show');
			document.getElementById("side-nav").style.width = "0";
		}
	}

	toggleModal(event) {

		// Handle add money button click and add modal close button
		if (event.target.id === "add-btn" || event.target.id === "add-close") {

			// Show / hide add money modal
			document.getElementById('add-money').classList.toggle('modal-show');

		} else if (event.target.id === "rm-btn" || event.target.id === "rm-close") {

			// Handle withdraw money button click and withdraw modal close button (show / hide take money modal)
			document.getElementById('take-money').classList.toggle('modal-show');

		} else {

			// Hide open modal
			document.querySelectorAll('.modal-show').forEach((item) => {

				if (item.id === "add-money" || item.id === "take-money") {

					item.classList.toggle('modal-show');
				}
			});
		}
	}

	addTransaction(event) {

		// Get the parent div (add-money or take-money)
		var superParent = event.target.parentElement.parentElement.parentElement;

		// Get currency code
		var code = superParent.querySelector('#currency-code').value;

		// Get amount of transaction
		var amount = parseFloat(superParent.querySelector('#currency-amount').value);

		if (amount <= 0 || isNaN(amount)) {

			alert("Amount should be greater than zero.");
			return;
		}

		// Add amount to the balance on the state currencies array
		var currenciesCopy = this.state.currencies.slice();

		// Find index that matches this transactions currency code
		var index = currenciesCopy.findIndex((item) => {

			return item.code === code;
		});

		// Transaction ID
		var id = this.state.transactions.length;

		// Transaction date
		var date = new Date().toDateString();

		// Copy transactions array so we can update it
		var transactionsCopy = this.state.transactions.slice();

		// If add money
		if (superParent.id === "add-money") {

			// Update the balance value
			currenciesCopy[index].amount += amount;

			// Add new object with ID, code, amount and date to the state transactions array
			transactionsCopy.push(

				{ id: id, code: code, amount: amount, date: date }
			);

		} else {

			// Update the balance value
			currenciesCopy[index].amount -= amount;

			// Add new object with ID, code, amount and date to the state transactions array
			transactionsCopy.push(

				{ id: id, code: code, amount: (amount * -1), date: date }
			);
		}

		// Update the state
		this.setState({ currencies: currenciesCopy, transactions: transactionsCopy });

		// Hide open modal
		this.toggleModal(event);
	}
}

export default App;