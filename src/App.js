// import { getDatabase, ref, set } from 'firebase/database';
// import { app } from './firebase';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Dashboard } from './components/Pages/Dashboard';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import { Navbar } from './components/Navbar';
import Parameter from "./components/Dashboard/Parameter";

// const db = getDatabase(app);

function App() {

  // const putData = () => {
  //   set(ref(db, 'users/peeyush'), {
  //     id : 1,
  //     name : "Peeyush",
  //     age : 21
  //   })
  // }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path= '/patient' element = {<Parameter/>}/>
        </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
