import React from "react";
import "./ItemListContainer.css";

function ItemListContainer({ greating }) {
    return (
        <div className='list-item-container'>
          <p>{ greating }</p>
        </div>
    )
}

export default ItemListContainer;