import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    const handleMakeAdminSubmit = e =>{
        const user ={email};
        fetch('https://shrouded-eyrie-26585.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                setSuccessMsg(true)
            }
            setEmail('')
        })
        e.preventDefault();
    }

    const handleOnBlur = e =>{

        setEmail(e.target.value);
    }

    return (
        <div className='border border-2 rounded-3 shadow-sm p-4'>
            <form onSubmit={handleMakeAdminSubmit}>
                <div className="form-floating mb-4">
                    <input type="email" name='email' className="form-control border-start-0 border-end-0 border-top-0 border-bottom-1 border-dark rounded-0 px-0 bg-transparent shadow-none" id="floatingInput" placeholder='Email' required onBlur={handleOnBlur}/>
                    <label for="floatingInput" className='p-0'>Email Address</label>
                </div>
                <button type='submit' className='normal-btn mb-3'>MAKE ADMIN</button>
            </form>

            {
                successMsg && <div className="alert alert-success" role="alert">
                                 Made Admin Successfully
                              </div>
                       }
        </div>
    );
};

export default MakeAdmin;