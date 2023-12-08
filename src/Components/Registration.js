import React, { useEffect, useState } from 'react'
import {auth,provider} from './config'
import { signInWithPopup } from 'firebase/auth'
import HomePage from './HomePage';
export default function Registration() {

    const [value,setValue]=useState('');

    const GoogleRegistration=()=>{
        signInWithPopup(auth,provider).then((data)=>{
setValue(data.user.email)
localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
  return (
    <div>
        {value?<HomePage/>:
        
        
      <button onClick={GoogleRegistration} >Login</button>
    
    }
      </div>
  )
}

