// import { getDatabase, ref, set } from 'firebase/database';
// import { app } from './firebase';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard } from './components/Pages/Dashboard';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import { Navbar } from './components/Navbar';
import Parameter from "./components/Dashboard/Parameter";
import About from "./components/Pages/About";
import Report from "./components/Dashboard/Report";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path= '/dashboard/:patientId' element = {<Parameter/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/dashboard/:patientId/report" element ={<Report/>}/>
        </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
