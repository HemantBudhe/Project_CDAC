import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom'

import About from './HomeComponent/About';
//import Navbar from './HomeComponent/NavbarComponent';
import NavbarComponent from './HomeComponent/NavbarComponent';
import Login from './HomeComponent/Login';
import URegister from './UserComponent/URegister';
import HomePage from './UserComponent/HomePage';
import Grid from './UserComponent/Grid';
import JobList from './UserComponent/JobList';
import EHomePage from './EmployerCompenent/EHomePage';
import Profile from './EmployerCompenent/Profile';
import ERegister from './EmployerCompenent/ERegister';
import PostJob from './EmployerCompenent/PostJob'
import EJobList from './EmployerCompenent/EJobList';
import AppliersList from './EmployerCompenent/AppliersList';
import AppliedJobs from './UserComponent/AppliedJobs';
import ANavbar from './AdminComponent/ANavbar';
import AJobList from './AdminComponent/AJobList';
import RecList from './AdminComponent/RecList';
import UserList from './AdminComponent/UserList';
import AHomepage from './HomeComponent/AHomepage';


function App() {
  return (
    <div className="App">
      
      {/* <NavbarComponent/>
      <HomePage/> */}
      <Routes>
        <Route path="/" element={<AHomepage></AHomepage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/uregister" element={<URegister></URegister>}></Route>

        {/* <Route path="/" element={<Navbar></Navbar>}></Route>  */}

        <Route path="/homepage" element={<HomePage></HomePage>}></Route>
      <Route path="/grid" element={<Grid></Grid>}></Route>
        <Route path="/job" element={<JobList></JobList>}></Route> 
        <Route path="/applied" element={<AppliedJobs></AppliedJobs>}></Route>

        <Route path="/ehomepage" element={<EHomePage></EHomePage>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/eregister" element={<ERegister></ERegister>}></Route>
        <Route path="/postJob" element={<PostJob></PostJob>}></Route>
        <Route path="/ejob" element={<EJobList></EJobList>}></Route>
        <Route path="/ejob/appliers" element={<AppliersList />} />

        <Route path="/ahomepage" element={<ANavbar></ANavbar>}></Route>
        <Route path="/joblist" element={<AJobList></AJobList>}></Route>
        <Route path="rlist" element={<RecList></RecList>}></Route>
        <Route path="ulist" element={<UserList></UserList>}></Route>

        </Routes>
        
        
    </div>
  );
}

export default App;
