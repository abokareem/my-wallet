import React from 'react';

const More = (props) => {

    return (
        <div>
            <button className="btn btn-more fa fa-plus fa-lg" data-open="false" onClick={props.toggleNav}></button>

            <div id="side-nav" className="side-nav">
                <button className="btn btn-side">Add money</button>
                <button className="btn btn-side">Withdraw money</button>
            </div>

        </div>
    )
}

export default More;