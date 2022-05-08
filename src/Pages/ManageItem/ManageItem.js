import React from 'react';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/mobile/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage your item</h1>
            {
                items.map(item => <div key={item._id}>
                    <img style={{ width: '400px' }} src={item.img} alt="" />
                    <h5>Name: {item.name}</h5>
                    <p>{item.description}</p>
                    <p>Price:{item.price}</p>
                    <p>Supplier Name: {item.suppliername}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-primary'>Delete</button>
                </div>)
            }
        </div >
    );
};

export default ManageItem;