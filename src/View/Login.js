import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../Redux/Actions/authActions'


const Login = () => {

    const dispatch = useDispatch()

    const history = useHistory()
    
    const handleLogin = () => {
        dispatch( login() )
        history.replace('/home')
    }
    
    return (
        <div className="container">
            <h1>Login</h1> 

                <button
                    className="btn"
                    onClick={()=> handleLogin() }
                >
                    Login
                </button>     
        </div>
    )
}

export default Login
