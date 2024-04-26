import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';


const db = getDatabase(app);

function App() {

  const putData = () => {
    set(ref(db, 'users/peeyush'), {
      id : 1,
      name : "Peeyush",
      age : 21
    })
  }
  return (
    <div className="App">
      <h1>Real time firebase</h1>
      <button onClick={putData}> PUT DATA </button>
       
    </div>
  );
}

export default App;
