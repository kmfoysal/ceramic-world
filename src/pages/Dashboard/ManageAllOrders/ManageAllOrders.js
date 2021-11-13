import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/allOrders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const handleorders = id =>{
        const proceed = window.confirm('Are you sure want to delete ?')
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted')
                const remainingOrders = allOrders.filter(order => order._id !== id);
                setAllOrders(remainingOrders);
            }
        })
        }
    }

    return (
        <div className='text-center'>
            <h3 className='mb-4'>Manage All Orders</h3>
            <h5 className='mb-3'>Total Orders : {allOrders.length}</h5>

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
                        allOrders.map(order => 
                        <tr key={order._id}>
                        <td>{order.ProductName}</td>
                        <td>{order.address}</td>
                        <td>{order.phone}</td>
                        <td>${order.price}</td>
                        <td>${order.shipping}</td>
                        <td>${order.totalPrice}</td>
                        <td>
                            <button className='btn btn-sm btn-danger' onClick={()=>handleorders(order._id)}>Delete Order</button>
                        </td>
                        </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;