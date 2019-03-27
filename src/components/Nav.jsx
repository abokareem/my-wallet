import React from 'react';

const Nav = (props) => {

    return (
        <div className="nav">
            {props.currencies.map((item) => 
            
                <button className="btn btn-nav" key={item.id}>{item.code}</button>
            )}
        </div>
    )
}

export default Nav;