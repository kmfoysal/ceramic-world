import React from 'react';
import useReviews from '../../../hooks/useReviews';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div className='container py-5 border mb-5 shadow'>
            <h3 className='text-center fs-1 mb-5'>What Client Say</h3>

            <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner mx-auto">
                {
                    reviews.map(review => <singleReview key={review._id} review={review}></singleReview>)
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Review;