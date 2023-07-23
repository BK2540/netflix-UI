import { Routes, Route, Navigate } from 'react-router-dom';
import './app.scss';
import Home from "./pages/home/Home";
import LogIn from './pages/login/LogIn';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {

  const user = true;
  
  return (  
        <>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>          
          <Route path="/register" element= {<Register/>}></Route>          
          <Route path="/login" element= {<LogIn />}></Route>       
          <Route path="/movies" element= {<Home type="movies"/>} ></Route>
          <Route path="/series" element= {<Home type="series"/>} ></Route>
          <Route path="/watch" element= {<Watch />}></Route>
        </Routes>
        </>
  );
};

export default App;