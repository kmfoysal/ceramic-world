import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
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
            <h2 className='text-center mb-4'>Please Give Your Valuable Review</h2>
            <input {...register("customerName", { required: true, maxLength: 30 })} placeholder='Your Name' />
            <textarea {...register("review")} placeholder='Add Review Here ...'/>
            <select {...register("rating")}>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <input type="submit" value='ADD REVIEW'/>
            </form>
        </div>
    );
};

export default AddReview;