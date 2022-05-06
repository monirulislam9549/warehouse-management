import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { name, price, quantity, img, description, suppliername } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <p>Supplier Name: {suppliername}</p>
            <button>Stock Update</button>
        </div>
    );
};

export default Item;