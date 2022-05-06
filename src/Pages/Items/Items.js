import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>Items: {items.length}</h1>
            {
                items.map(item => <Item
                    key={item.id}
                    item={item}
                >

                </Item>)
            }
        </div>
    );
};

export default Items;