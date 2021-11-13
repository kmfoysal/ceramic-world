import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProduct = (props) => {
    const {key, name, price,description,img} = props.product;
    return (
        <div>
            <div className="card border-0 mb-3">
                <img src={img} className="card-img-top border-2 border-bottom border-dark" alt="img" style={{ height:'400px', objectFit:'cover'}} />
                <div className="card-body">
                    <h4 className="card-title my-3">{name}</h4>
                    <h5 style={{color:'#827b75'}}>${price}</h5>
                    <p className="card-text" style={{color:'#acacac'}}>{description}</p>
                    <Link to={`/productDetails/${key}`}>
                       <button className="normal-btn">BUY NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;