import React from "react";
import TableMobile from "../TableMobile/TableMobile";
import "./TabMobile.css";
const TabMobile = ({tabItems}) => {
    return (
        <div className="tab-mobile">
            {tabItems && tabItems.map(({ id, title, content }) => {
                let contentResult;
                if(id === 2) {
                    contentResult = (
                        <div className="tab-item-mobile" key={title}>
                            <div className="product-title">
                                {title}
                            </div>
                            <div className="product-content">
                                <TableMobile data={content} />
                            </div>
                        </div>
                    )
                } else {
                    contentResult = (
                        <div className="tab-item-mobile" key={title}>
                            <div className="product-title">
                                {title}
                            </div>
                            <div className="product-content">
                                <div dangerouslySetInnerHTML={{__html: content}} />
                            </div>
                        </div>
                    )
                }
                return contentResult;
            }
            
         )}
        </div>
    )
}
export default TabMobile