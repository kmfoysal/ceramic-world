import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleProducts = id =>{
        const proceed = window.confirm('Are you sure want to delete ?')
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted')
                const remainingProducts = products.filter(product => product._id !== id);
                setProducts(remainingProducts);
            }
        })
        }
    }

    return (
        <div className='text-center'>
            <h3 className='mb-4'>Manage All Products</h3>
            <h5 className='mb-3'>Total products : {products.length}</h5>

            <div className='overflow-auto'>
                <Table bordered hover>
                    <thead>
                        <tr>
                        <th>Product SKU</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        products.map(product => 
                        <tr key={product._id}>
                        <td>{product.key}</td>
                        <td>{product.name}</td>
                        <td>
                            <img src={product.img} alt="img" style={{width:'50px', height:'50px'}} />
                        </td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>
                            <button className='btn btn-sm btn-danger' onClick={()=>handleProducts(product._id)}>Delete product</button>
                        </td>
                        </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProducts;