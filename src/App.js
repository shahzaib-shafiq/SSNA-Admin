import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


import Registration from './Components/Registration';
import FacultyData from './Components/FacultyData';
import HomePage from './Components/HomePage';
import Announcements from './Components/Announcements'
import CourseMaterial from './Components/CourseMaterial'
import Events from './Components/Events'
import Timetable from './Components/Timetable'
import BusRoutes from './Components/BusRoutes'
import { Announcement } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />}></Route>
          <Route path='/HomePage' element={<HomePage />}></Route>
          <Route path='/FacultyData' element={<FacultyData />}></Route>
          <Route path='/UpcomingEvents' element={<Events/>}></Route>
          <Route path='/Announcements' element={<Announcements />}></Route>
          <Route path='/CourseMaterial' element={<CourseMaterial/>}></Route>
          <Route path='/Timetable' element={<Timetable/>}></Route>
          <Route path='/BusRoutes' element={<BusRoutes/>}></Route>
          
          
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
