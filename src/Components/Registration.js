// import React, { useEffect, useState } from 'react';
// import { auth, provider } from './config';
// import { signInWithPopup, signOut } from 'firebase/auth';
// import HomePage from './HomePage';
// import Button from '@mui/material/Button';
// import '../Styles/Registration.css';

// import GoogleIcon from '@mui/icons-material/Google';


// export default function Registration() {

//   const [value, setValue] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const GoogleRegistration = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         const userEmail = data.user.email;
//         if (userEmail.endsWith('@cfd.nu.edu.pk')) {
//           setValue(userEmail);
//           localStorage.setItem('email', userEmail);
//         } else {
//           setErrorMessage('Invalid email. Please use an email with the domain @cfd.nu.edu.pk');
//         }
//       })
//       .catch((error) => {
//         console.error('Sign-in error:', error);
//         setErrorMessage('Error during sign-in. Please try again.');
//       });
//   };

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         localStorage.removeItem('email');
//         setValue('');
//       })
//       .catch((error) => {
//         console.error('Logout error:', error);
//       });
//   };

//   useEffect(() => {
//     // Cleanup function
//     const handleUnload = () => {
//       handleLogout();
//     };

//     // Attach the unload event listener
//     window.addEventListener('beforeunload', handleUnload);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('beforeunload', handleUnload);


//     };
//   }, []);

//   return (
//     <div>
//       {value ? (
//         <HomePage />
//       ) : (
//         <>
//         <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
          
//           <br />
//           <br />
//           <br /><br /><br />
//           {/* Other spacing elements */}
          
//           <Button
//             className='RegButton'
//             variant="contained"
//             size="medium"
//             onClick={GoogleRegistration}
//             endIcon={<GoogleIcon />}
//           >
//             Login With Google
//           </Button>

//           {errorMessage && <div className="error-message">{errorMessage}</div>}
          
//           {/* Other spacing elements */}
//         </>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import './Styles/Registration.css'
import bgImg from '../assets/img1.jpg'
import { auth, provider } from './config';
import { signInWithPopup, signOut } from 'firebase/auth';
import HomePage from './HomePage';
import Button from '@mui/material/Button';
import '../Styles/Registration.css';
import GoogleIcon from '@mui/icons-material/Google';
<<<<<<< Updated upstream
import styles from "../Styles/Login.module.css";
=======


>>>>>>> Stashed changes

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
        setErrorMessage('');
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
<<<<<<< Updated upstream
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
=======
    <div>

        
          <section>
        <div className="register">
            <div className="col-1">
                <h2>Welcome Admin</h2>
                <span>Login With NU Email ID</span>

                <form id='form' className='flex flex-col' >
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
    </div>
  )
>>>>>>> Stashed changes
}
