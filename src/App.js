import logo from './logo.svg';
import './App.css';

import Announcements from './Components/Announcements'
import Registration from './Components/Registration';

import FacultyData from './Components/FacultyData';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />}></Route>
          <Route path='/HomePage' element={<HomePage />}></Route>
          <Route path='/FacultyData' element={<FacultyData />}></Route>
          <Route path='/Announcement' element={<Announcements />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
