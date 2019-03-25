import React from 'react';

const Row = (props) => {

    return (

        <tr>
            <td>
                {props.code}
            </td>
            <td>
                {props.amount}
            </td>
            <td>
                {props.date}
            </td>
        </tr>
    )
}

export default Row;