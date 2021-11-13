import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useAuth();
    if(isLoading){ return <div class="d-flex justify-content-center">
                         <div class="spinner-grow text-warning" role="status">
                             <span class="visually-hidden">Loading...</span>
                         </div>
                     </div>
                 }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default AdminRoute;