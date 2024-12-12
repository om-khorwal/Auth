import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  return (
    <>
    <div>  
    <Routes>
      <Route path='/' element={<Navigate to = "/Login"/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
