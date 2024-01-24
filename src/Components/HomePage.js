  import React from 'react'
  import Button from '@mui/material/Button';
  import '../Styles/HomePage.css';
  import LogoutIcon from '@mui/icons-material/Logout';
  import SendIcon from '@mui/icons-material/Send';
  import Stack from '@mui/material/Stack';
  import PersonAddIcon from '@mui/icons-material/PersonAdd';
  import AnnouncementIcon from '@mui/icons-material/Announcement';
  import {Link} from 'react-router-dom'
  import styles from "../Styles/Login.module.css";

  const logout = () => {
    localStorage.clear()
  }


const Dashboard = () => {
  return (
    
    <div className={styles.dashboard}>
      <img className={styles.imagemainBg} alt="" src="/imagemain--bg@2x.png" />
      <div className={styles.whitesquareBg} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.welcomeAdmin}>{`Welcome Admin `}</div>    
      <div className='buttondiv'>
       <Link to='/FacultyData'>
           <Button className="styledButton" variant='contained' size='medium' endIcon={<PersonAddIcon />}>
             Add Faculty
           </Button>
         </Link>

         <Link to='/announcement'>
           <Button className="styledButton" variant='contained' size='medium' endIcon={<AnnouncementIcon />}>
            Announcement
           </Button>
         </Link>
     
         <Link to='/'>

       <Button className="styledButton" variant="contained" endIcon={<LogoutIcon />}
     
       onClick={logout}>
         Signout
       </Button>
         </Link>

         </div>
      <div className={styles.dashboardChild} />
      <img
        className={styles.bufferRafiki1Icon}
        alt=""
        src="/bufferrafiki-1@2x.png"
      />
    </div>
  );
<<<<<<< Updated upstream
};

export default Dashboard;
=======
}

>>>>>>> Stashed changes
