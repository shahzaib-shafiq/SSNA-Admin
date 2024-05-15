import React, { useEffect, useState } from 'react';
import '../Styles/HomepageForm.css'
import bgImg from '../assets/img1.jpg'
import { auth, provider } from './config';
import { signInWithPopup, signOut } from 'firebase/auth';
import HomePage from './HomePage';
import Button from '@mui/material/Button';
import '../Styles/Registration.css';
import GoogleIcon from '@mui/icons-material/Google';
import styles from "../Styles/Login.module.css";
import Swal from 'sweetalert2';
export default function Registration() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
const GoogleRegistration = () => {
  signInWithPopup(auth, provider)
    .then((data) => {
      const userEmail = data.user.email;
      if (userEmail.endsWith("@cfd.nu.edu.pk") || userEmail.endsWith("@nu.edu.pk")) {
        setValue(userEmail);
        localStorage.setItem('email', userEmail);
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in.",
          icon: "success"
        });
      } else {
        setErrorMessage('Invalid email. Please use an email with the domain @cfd.nu.edu.pk');
        Swal.fire({
          title: "Error!",
          text: "Invalid email. Please use an email with the domain @cfd.nu.edu.pk",
          icon: "error"
        });
      }
    })
    .catch((error) => {
      console.error('Sign-in error:', error);
      setErrorMessage('');
      Swal.fire({
        title: "Error!",
        text: "An error occurred during sign-in. Please try again later.",
        icon: "error"
      });
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
    value ? (
      <HomePage />
    ) : (
      <>
      
        <div className={styles.loginpage}>
          <img className={styles.imagemainBg} alt="" src="/imagemain--bg@2x.png" />
          <div className={styles.whitesquareBg} />
          <div className={styles.sideillustration}>
            <div className={styles.sideillustrationChild} />
            <img
              className={styles.loginRafiki1Icon}
              alt=""
              src="/loginrafiki-1@2x.png"
            />
          </div>
          <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
          {/* <div className={styles.adminLogin}>{`Admin Login `}</div> */}
          <div className={styles.loginWithNuces}>Login with NUCES account</div>
          <div className={styles.loginWithNucesError}>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>

          <Button
  className={styles.button}
  variant="contained"
  size="medium"
  onClick={GoogleRegistration}
  endIcon={<GoogleIcon />}
>
  Login With Google
</Button>
        </div>
      </>
    )
  );
}
