import React from "react";
import "./TableMobile.css";

const TableMobile = ({data}) => {
  return (
      <>
        {
            data && data.map((item, index) => (
                <div className="table-mobile" key={index}>
                    <span> {item.name}:</span>
                    <span>{item.value}</span>
                </div>    
            ))
        }
      </>
  )
}

export default TableMobile;