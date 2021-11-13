import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(()=>{
        const url = `https://shrouded-eyrie-26585.herokuapp.com/allOrders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[status])

    const handleorders = id =>{
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
                const remainingOrders = allOrders.filter(order => order._id !== id);
                setAllOrders(remainingOrders);
            }
        })
        }
    }

    const handleStatusChange = (id) => {
        const proceed = window.confirm('Are you sure, you want to change Status Pending to Shipped?');
        if (proceed) {
            fetch(`https://shrouded-eyrie-26585.herokuapp.com/changeStatus/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setStatus(!status)
                        alert('Order Shipped')
                    }
                    else{
                        alert('Already Shipped')
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
                        <th>Status</th>
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
                        <td>{order?.status}</td>
                        <td>
                            <button className='btn btn-sm btn-danger me-2' onClick={()=>handleorders(order._id)}>Delete Order</button>
                            
                            <button className='btn btn-sm btn-warning' onClick={()=>handleStatusChange(order._id)}>Status Update</button>
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