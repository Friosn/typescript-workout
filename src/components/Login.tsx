import React, { useEffect, useReducer } from 'react'
import { Alert } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'

interface AuthState {
    validating: boolean;
    token: string | null;
    username: string;
    name: string;
}

type AuthAction = { type:'logout'  }

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: ''
}

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: '' 
            }
            
            break;
    
        default:
            return state;
    }
}

const Login = () => {

    const [{validating, token}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }, [])



  return (
    <>
    
    <h3>Login</h3>
    <div>
    <Alert key='info' variant="info"> Validating...</Alert>
    </div>
    <div>
    <Alert key='danger' variant="danger"> No Autenticado</Alert>
    </div>
    <div>
    <Alert key='success' variant="success"> Autenticado</Alert>
    </div>

    <Button variant='primary'>Login</Button>
    <Button variant='danger'>Logout</Button>
    </>
  )
}

export default Login