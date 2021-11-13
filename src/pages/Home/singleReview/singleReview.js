import React from 'react';

const singleReview = (props) => {
    const {customerName, review, rating} = props.review;
    return (
        <div class="carousel-item active text-center">
            <p className='text-capitalize mx-auto'>“{review}”</p>
            <p className='fs-3 mx-auto'>{customerName}</p>
            <p className='text-xl text-gray-500 font-medium mb-4 mx-auto'>Rating : {rating}</p>
        </div>
    );
};

export default singleReview;