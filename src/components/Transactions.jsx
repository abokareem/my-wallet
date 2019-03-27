import React from 'react';
import Row from './subcomponents/Row.jsx';

const Transactions = (props) => {

    return (

        <div className="trans-container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.transactions.map((item) =>
                            <Row key={item.id}
                                code={item.code}
                                amount={item.amount}
                                date={item.date}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Transactions;