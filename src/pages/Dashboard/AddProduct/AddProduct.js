import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Inserted Successfully');
                reset();
            
            }
        })
    }

    return (
        <div className='add-product'>

            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mb-4'>Add a New Product</h2>
            <input {...register("name", { required: true, maxLength: 30 })} placeholder='Product Name' />
            <input type="text" {...register("key")} placeholder='SKU Number'/>
            <select {...register("category")}>
                <option value="dinnerWare">DINNERWARE</option>
                <option value="homeDecor">HOME DECOR</option>
            </select>
            <textarea {...register("description")} placeholder='Description'/>
            <input type="number" {...register("price")} placeholder='Product Price'/>
            <input type="text" {...register("img")} placeholder='Image Url'/>
            <input type="submit" value='ADD PRODUCT'/>
            </form>
        </div>
    );
};

export default AddProduct;