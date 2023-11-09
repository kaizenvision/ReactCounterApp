import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthentictionSevice from './AuthentictionSevice'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthentictionSevice.isUserLoggedIn()) {
            return this.props.children
         
        } else {
            return <Navigate to="/login" /> 
         
        }
    }
}

export default AuthenticatedRoute