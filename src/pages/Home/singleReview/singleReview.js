import React from 'react';
import Rating from 'react-rating';

const SingleReview = (props) => {
    const {customerName, review, rating} = props.review;
    return (
        <div className="carousel-item text-center">
            <p className='text-capitalize fs-5 mx-auto'>“{review}”</p>
            <p className='fs-3 mx-auto'>{customerName}</p>
            <Rating 
                    initialRating={rating} 
                    readonly
                    emptySymbol={<i className="far fa-star fx-3 fa-2x text-warning"></i>}
                    fullSymbol={<i className="fas fa-star fa-2x text-warning"></i>} />
        </div>
    );
};

export default SingleReview;