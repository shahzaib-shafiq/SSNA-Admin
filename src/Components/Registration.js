import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup, signOut } from 'firebase/auth';
import HomePage from './HomePage';
import Button from '@mui/material/Button';
import '../Styles/Registration.css';
import GoogleIcon from '@mui/icons-material/Google';
export default function Registration() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const GoogleRegistration = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const userEmail = data.user.email;
        if (userEmail.endsWith('@cfd.nu.edu.pk')) {
          setValue(userEmail);
          localStorage.setItem('email', userEmail);
        } else {
          setErrorMessage('Invalid email. Please use an email with the domain @cfd.nu.edu.pk');
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        setErrorMessage('Error during sign-in. Please try again.');
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('email');
        setValue('');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  useEffect(() => {
    // Cleanup function
    const handleUnload = () => {
      handleLogout();
    };

    // Attach the unload event listener
    window.addEventListener('beforeunload', handleUnload);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <div>
      {value ? (
        <HomePage />
      ) : (
        <>
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <br />
          <br />
          <br /><br /><br />
          {/* Other spacing elements */}
          
          <Button
            className='RegButton'
            variant="contained"
            size="medium"
            onClick={GoogleRegistration}
            endIcon={<GoogleIcon />}
          >
            Login With Google
          </Button>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          
          {/* Other spacing elements */}
        </>
      )}
    </div>
  );
}
