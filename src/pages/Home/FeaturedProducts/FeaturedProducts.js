import React from 'react';
import useProducts from '../../../hooks/useProducts';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    const [products] = useProducts();
    return (
        <div className='py-5'>
            <h2 className='my-3 fs-1 text-center'>FEATURED PRODUCTS</h2>
            <hr style={{width:'150px', margin:'auto',height:'2px'}} className='mb-5' />
            <div className="container">
               <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                    products.map(product => <FeaturedProduct 
                                            product={product}
                                            key={product.key}
                                            ></FeaturedProduct>).slice(0,6)
                }
               </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;