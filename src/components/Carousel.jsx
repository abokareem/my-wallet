import React from 'react';

const Carousel = (props) => {

    return (

        <div className="cards">
            {props.currencies.map((item) =>

                <div className={


                    (item.id % 5 === 1) ? "card-container background-primary mask" :
                        (item.id % 5 === 2) ? "card-container background-secondary mask" :
                            (item.id % 5 === 3) ? "card-container background-tertiary mask" :
                                (item.id % 5 === 4) ? "card-container background-quaternary mask" : "card-container background-tertiary mask"

                } key={item.id} id={item.code}>
                    <div className="card-description">
                        <h1>{item.name}</h1>
                        <p className="card-symbol">{item.symbol}</p>
                        <p>{item.code}</p>
                    </div>
                    <div className="card-amount">
                        <h1>{item.amount.toFixed(2)}</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carousel;