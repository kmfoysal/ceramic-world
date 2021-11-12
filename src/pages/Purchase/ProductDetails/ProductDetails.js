import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';

const ProductDetails = () => {
    const [products] = useProducts();
    const {productKey} = useParams();
    const {user} = useAuth()

    const initialInfo = {customerName:user.displayName, email:user.email, phone:'', address:'',}
    const [ordersInfo, setOrdersInfo] = useState(initialInfo);

    const singleDetails = products?.find(product => product.key === productKey);

    const totalPrice = parseInt(singleDetails?.shipping) + parseInt(singleDetails?.price);
    

    const handleOnBlur= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...ordersInfo}
        newInfo[field] = value;
        setOrdersInfo(newInfo);
    }

    const handleSubmit = e => {
         // Collect Data 
         const order = {
            ...ordersInfo,
            ProductName: singleDetails?.name,
            price: singleDetails?.price,
            shipping: singleDetails?.shipping,
            totalPrice: totalPrice,
          }

          // Send to the Server 
        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            alert('Place Order Successfully')
          }
        })
          e.preventDefault();
    }



    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-0 mb-3">
                    <img src={singleDetails?.img} className="card-img-top border-2 border-bottom border-dark" alt="img" style={{height:'400px', objectFit:'cover'}} />
                    <div className="card-body">
                        <div className='d-flex'>
                            <p className='me-3'><strong>SKU :</strong> {singleDetails?.key} </p>
                            <p><strong>CATEGORY :</strong> {singleDetails?.category} </p>
                        </div>
                        <h4 className="card-title fs-2 my-3">{singleDetails?.name}</h4>
                        <h5 style={{color:'#827b75'}}>${singleDetails?.price}</h5>
                        <p className="card-text" style={{color:'#acacac'}}>{singleDetails?.description}</p>
                        <div className='d-flex'>
                            <p className="me-2">Diameter {singleDetails?.size[0].value},</p>
                            <p className="">Height {singleDetails?.size[1].value}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='register-form shadow-sm'>
                        <h3 className='text-center mb-5'>Billing Info</h3>

                        <form onSubmit={handleSubmit} className='w-100'>
                            <div className="form-floating mb-4">
                                <input type="text" name='name' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Name' required onBlur={handleOnBlur} defaultValue={user.displayName}/>
                                <label for="floatingInput" className='p-0'>Enter Your Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="email" name='email' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email' required onBlur={handleOnBlur} defaultValue={user.email} />
                                <label for="floatingInput" className='p-0'>Enter Your Email Address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="tel" name='phone' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Phone' required onBlur={handleOnBlur} />
                                <label for="floatingInput" className='p-0'>Enter Your Phone Number</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" name='address' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='address' required onBlur={handleOnBlur} />
                                <label for="floatingInput" className='p-0'>Shipping Address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" name='price' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Price' required defaultValue={singleDetails?.price} disabled/>
                                <label for="floatingInput" className='p-0'>Product Price</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" name='shipping' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Shipping' required defaultValue={singleDetails?.shipping} disabled/>
                                <label for="floatingInput" className='p-0'>Shipping Chargre</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" name='total' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Total' required defaultValue={totalPrice} disabled/>
                                <label for="floatingInput" className='p-0'>Total Price</label>
                            </div>
                            <button type='submit' className='normal-btn w-100 mb-4'>PLACE ORDER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;