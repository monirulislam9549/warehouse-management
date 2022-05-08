import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fierce-brushlands-16042.herokuapp.com/mobile')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id='items'>
            <h1 className='items-title mt-5'>Inventory Items</h1>
            <div className='items-container'>
                {
                    items.map(item =>
                        <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;