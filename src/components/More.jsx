import React from 'react';

const More = (props) => {

    return (
        <div>
            <button className="btn btn-more fa fa-plus fa-lg" data-open="false" onClick={props.toggleNav}></button>

            <div id="side-nav" className="side-nav">
                <button id="add-btn" className="btn btn-side" onClick={props.toggleModal}>Add money</button>
                <button id="rm-btn" className="btn btn-side" onClick={props.toggleModal}>Withdraw money</button>
            </div>

            <div id="add-money" className="modal">
                <div className="modal-content">

                    <label for="currency-code" className="label-input">Currency</label>
                    <select id="currency-code" className="code-input">
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <br></br>
                    <label for="currency-amount" className="label-input">Amount</label>
                    <input type="number" step="0.01" name="currency-amount" required className="num-input" placeholder="0.00"></input>

                    <hr></hr>
                    <div className="modal-btns">
                        <button type="button" className="btn btn-trans">Add</button>
                        <button id="add-close" className="btn btn-close" onClick={props.toggleModal}>Cancel</button>
                    </div>

                </div>
            </div>

            <div id="take-money" className="modal">
                <div className="modal-content">

                    <label for="currency-code" className="label-input">Currency</label>
                    <select id="currency-code" className="code-input">
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <br></br>
                    <label for="currency-amount" className="label-input">Amount</label>
                    <input type="number" step="0.01" name="currency-amount" required className="num-input" placeholder="0.00"></input>

                    <hr></hr>
                    <div className="modal-btns">
                        <button type="button" className="btn btn-trans">Withdraw</button>
                        <button id="rm-close" className="btn btn-close" onClick={props.toggleModal}>Cancel</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default More;