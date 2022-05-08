import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://fierce-brushlands-16042.herokuapp.com/mobile/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h1>This is Service Detail :{item.name}</h1>
            <div className='text-center'>
                <Link to={'/inventory'}>
                    <button className='btn btn-primary'>Inventory Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;