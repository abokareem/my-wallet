import React from 'react';

const Carousel = (props) => {

    return (

        props.currencies.map((item) =>

            <div key={item.id}>
                <h1>{item.name}</h1>
                <button>{item.symbol}</button>
                <p>{item.code}</p>
                <h1>{item.amount}</h1>
            </div>
        )
    )
}

export default Carousel;