import logo from './logo.svg';
import './App.css';

import Announcements from './Components/Announcements'
import Registration from './Components/Registration';
import HomePage from './Components/HomePage';
import FacultyData from './Components/FacultyData';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Registration/>}></Route>
<Route path='/FacultyData' element={<FacultyData/>}></Route>
<Route path='/Announcement' element={<Announcements/>}></Route>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
