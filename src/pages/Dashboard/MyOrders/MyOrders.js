import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        const url = `https://shrouded-eyrie-26585.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user.email])

    const handleMyOrders = id =>{
        const proceed = window.confirm('Are you sure want to delete ?')
        if(proceed){
            const url = `https://shrouded-eyrie-26585.herokuapp.com/orders/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted')
                const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                setMyOrders(remainingOrders);
            }
        })
        }
    }

    return (
        <div className='text-center'>
            <h3 className='mb-4'>Manage My Orders</h3>
            <h5 className='mb-3'>Total Orders : {myOrders.length}</h5>

            <div className='overflow-auto'>
                <Table bordered hover>
                    <thead>
                        <tr>
                        <th>Product Name</th>
                        <th>Shipping Address</th>
                        <th>Contact Number</th>
                        <th>Price</th>
                        <th>Shipping Cost</th>
                        <th>Total Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        myOrders.filter(order=>order.email === user.email).map(myOrder => 
                        <tr key={myOrder._id}>
                        <td>{myOrder.ProductName}</td>
                        <td>{myOrder.address}</td>
                        <td>{myOrder.phone}</td>
                        <td>${myOrder.price}</td>
                        <td>${myOrder.shipping}</td>
                        <td>${myOrder.totalPrice}</td>
                        <td>
                            <button className='btn btn-sm btn-danger' onClick={()=>handleMyOrders(myOrder._id)}>Delete Order</button>
                        </td>
                        </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;