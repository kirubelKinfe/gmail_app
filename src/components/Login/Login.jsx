import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth, provider } from '../../utils/firebaseDb'
import './Login.css'
import {signInWithPopup} from 'firebase/auth'

const Login = () => {
  const dispatch = useDispatch()

  const signIn = () => {
    signInWithPopup(auth,provider)
    .then(({ user }) => {
        dispatch(
            login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            })
        )
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className='login'>
        <div className='login__container'>
            <img 
                src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='logo' 
            />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login