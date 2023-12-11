import logo from './logo.svg';
import './App.css';
import FacultyInfo from './Components/FacultyInfo'
import Announcements from './Components/Announcements'
import Registration from './Components/Registration';



function App() {
  return (
    <div className="App">
  <FacultyInfo/>
    <Announcements/>

    {/* <Registration/> */}

    
    </div>
  );
}

export default App;
