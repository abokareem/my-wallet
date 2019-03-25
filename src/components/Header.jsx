import React from 'react';

const Header = () => {

    var containerStyle = {
        'display': 'flex'
    }

    var h1Style = {
        'margin': '1em'
    }

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>myWallet</h1>
            <button>^</button>               
        </div>
    )
}

export default Header;