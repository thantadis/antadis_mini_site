import React from 'react';
import "./TabsItem.css";
const TabsItem = ({
    title = '',
    onItemClicked,
    isActive = false,
  }) => {
    return (
      <div className={isActive ? 'tab-item tab-item--active' : 'tab-item tab-item--inactive'} onClick={onItemClicked}>
        <p className="tab-item__title">{title}</p>
      </div>
    )
  };

export default TabsItem;