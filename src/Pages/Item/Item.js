import React from 'react';

const Item = ({ item }) => {
    const { name, price, quantity, img, description, suppliername } = item;
    return (
        <div>
            <img src={img} alt="" />
            <h1>This is Item :{name}</h1>

        </div>
    );
};

export default Item;