import React from 'react';
import Row from './subcomponents/Row.jsx';

const Transactions = (props) => {

    return (

        <div className="trans-container">
            <p>Pending</p>
            <div className="trans-pending">
                {
                    props.pending.map((item) =>

                        <div className="card-pending" key={item.id}>
                            <p><strong>{item.date}</strong></p>
                            <p>{item.code}</p>
                            <p>{item.amount}</p>
                        </div>
                    )
                }
            </div>
            <table className="hide">
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