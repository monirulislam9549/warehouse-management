import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams()
    return (
        <div>
            <h1>This is Service Detail :{itemId}</h1>
            <div className='text-center'>
                <Link to={'/inventory'}>
                    <button className='btn btn-primary'>Inventory Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;