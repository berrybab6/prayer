import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from './accounts/common/common';


function PrivateRoute({component:Comporent, ...rest}) {
    return (
        <Route {...rest}
            render = {props=>{getToken()? <Component {...props}/>:<Redirect to={{pathname: '/login', state:{from:props.location}}}/>}}
        />
       
    )
}

export default PrivateRoute
