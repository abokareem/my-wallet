import React from 'react';

const Nav = (props) => {

    return (
        <div>
            {props.currencies.map((item) => 
            
                <button>{item.code}</button>
            )}
        </div>
    )
}

export default Nav;