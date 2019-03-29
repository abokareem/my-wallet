import React from 'react';

const More = (props) => {

    return (
        <div>
            <button className="btn btn-more fa fa-plus fa-lg" data-open="false" onClick={props.toggleNav}></button>

            <div id="side-nav" className="side-nav">
                <button id="add-btn" className="btn btn-side" onClick={props.toggleModal} >Add money</button>
                <button id="rm-btn" className="btn btn-side">Withdraw money</button>
            </div>

            <div id="add-money" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Add money mockup</p>
                </div>
            </div>

            <div id="take-money" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Take money mockup</p>
                </div>
            </div>

        </div>
    )
}

export default More;