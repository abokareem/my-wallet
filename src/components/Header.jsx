import React from 'react';

const Header = (props) => {

    return (
        <div className="header text-overlap">
            <h1>myWallet</h1>
            <button className="btn btn-header fa fa-angle-double-up" onClick={props.headerClick} rotated="false"></button>               
        </div>
    )
}

export default Header;