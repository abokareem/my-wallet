import React from 'react';

const Nav = (props) => {

    return (
        <div className="nav">
            {props.currencies.map((item) => 
            
                <a className="btn btn-nav" href={"#" + item.code} key={item.id}>{item.code}</a>
            )}
        </div>
    )
}

export default Nav;