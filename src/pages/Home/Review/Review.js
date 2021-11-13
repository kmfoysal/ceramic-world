import React from 'react';
import Rating from 'react-rating';
import useReviews from '../../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div className='container py-5 border my-5 shadow'>
            <h3 className='text-center fs-1 mb-5'>What Client Say</h3>

            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner w-75 mx-auto">
                <div className="carousel-item active text-center">
                    <p className='text-capitalize fs-5 mx-auto'>“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis mollis est non commodo luctus, nisi erat porttitor ligula eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor”</p>
                <p className='fs-3 mx-auto'>Md. Rabiul Islam</p>
                <Rating 
                    initialRating={4.5} 
                    readonly
                    emptySymbol={<i className="far fa-star fx-3 fa-2x text-warning"></i>}
                    fullSymbol={<i className="fas fa-star fa-2x text-warning"></i>} />
                </div>
                {
                    reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Review;