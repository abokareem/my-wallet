import React from 'react';

const Carousel = (props) => {

    return (

        <div className="cards">
            {props.currencies.map((item) =>

                <div className={


                    (item.id % 5 === 1) ? "card-container background-primary" :
                        (item.id % 5 === 2) ? "card-container background-secondary" :
                            (item.id % 5 === 3) ? "card-container background-tertiary" :
                                (item.id % 5 === 4) ? "card-container background-quaternary" : "card-container background-tertiary"

                } key={item.id}>
                    <div className="card-description">
                        <h1>{item.name}</h1>
                        <p className="card-symbol">{item.symbol}</p>
                        <p>{item.code}</p>
                    </div>
                    <div className="card-amount">
                        <h1>{item.amount}</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carousel;