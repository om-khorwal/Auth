import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  const isAuthenticated = () => localStorage.getItem("jwttoken");

  const RedirectIfLoggedIn = ({ element }) => {
    return isAuthenticated() ? <Navigate to="/home" /> : element;
  };
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("jwttoken");
    return token ? element : <Navigate to="/login" />;
  };
  return (
    <>
    <div>  
    <Routes>
      <Route path='/' element={<Navigate to = "/Login"/>} />
      <Route path='/login' element={<RedirectIfLoggedIn> <Login/> </RedirectIfLoggedIn>} />
      <Route path='/signup' element={<RedirectIfLoggedIn> <Signup/> </RedirectIfLoggedIn>} />
      <Route path='/home' element={ <ProtectedRoute> <Home/> </ProtectedRoute>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
