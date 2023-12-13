import React, { useEffect, useState } from 'react'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import HomePage from './HomePage';

import Button from '@mui/material/Button';


import '../Styles/Registration.css'
import GoogleIcon from '@mui/icons-material/Google';

export default function Registration() {

  const [value, setValue] = useState('');

  const GoogleRegistration = () => {
    // signInWithPopup(auth, provider).then((data) => {
    //   setValue(data.user.email)
    //   localStorage.setItem("email", data.user.email)


    // })

    signInWithPopup(auth, provider)
  .then((data) => {
    const userEmail = data.user.email;
    if (userEmail.endsWith('@cfd.nu.edu.pk')) {
      setValue(userEmail);
      localStorage.setItem("email", userEmail);
    } else {
      // Show error message for invalid email domain
      alert('Invalid email domain. Please use an email with the domain @cfd.nu.edu.pk');
    }
  })
  .catch((error) => {
    // Handle the sign-in error here
    console.error("Sign-in error:", error);
  });

  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })
  return (
    <div>
      {value ? <HomePage /> :
       
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        
        <Button className='RegButton'  variant="contained" size="medium"
        onClick={GoogleRegistration}
        
        endIcon={<GoogleIcon />}
        >Login With Google</Button>
        
        </>


      }
    </div>
  )
}