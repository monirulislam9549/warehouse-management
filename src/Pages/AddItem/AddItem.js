import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://fierce-brushlands-16042.herokuapp.com/mobile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='mx-auto w-50'>
            <h2>Add your item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier name")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input type="submit" value='Delivered' />
            </form>
        </div>
    );
};

export default AddItem;