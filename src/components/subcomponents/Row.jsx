import React from 'react';

const Row = (props) => {

    return (

        <tr>
            <td>
                {props.code}
            </td>
            <td>
                {props.amount.toFixed(2)}
            </td>
            <td>
                {props.date}
            </td>
        </tr>
    )
}

export default Row;