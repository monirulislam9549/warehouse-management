import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, price, quantity, img, description, suppliername } = item;
    const navigate = useNavigate()
    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <p>Supplier Name: {suppliername}</p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-dark'>Stock Update</button>
        </div>
    );
};

export default Item;