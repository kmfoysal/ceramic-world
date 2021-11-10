import React from 'react';

const FeaturedProduct = (props) => {
    const {name, price,description,img} = props.product;
    return (
        <div>
            <div class="card border-0 mb-3">
                <img src={img} class="card-img-top border-2 border-bottom border-dark" alt="img" style={{ height:'400px', objectFit:'cover'}} />
                <div class="card-body">
                    <h4 class="card-title my-3">{name}</h4>
                    <h5 style={{color:'#827b75'}}>${price}</h5>
                    <p class="card-text" style={{color:'#acacac'}}>{description}</p>
                    <button class="normal-btn">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;