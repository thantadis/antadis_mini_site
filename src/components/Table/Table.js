import React from "react";
import {Table} from "react-bootstrap";
const TableComponent = ({Rows}) => {
    return (
        <Table  bordered>
            <tbody>
                {Rows && Rows.map((Row, index) => (

                    <tr className="product-row" key={index}>
                        <td> {Row.name}</td>
                        <td>{Row.value}</td>
                    </tr>    
                ))}
            </tbody>
        </Table>

    )
}
export default TableComponent;