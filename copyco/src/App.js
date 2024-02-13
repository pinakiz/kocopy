import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { useRef } from 'react';
import Home from './components/home/Home.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import PasswordCheck from './components/passwordCheck/PasswordCheck.jsx';
import Pagenotfound from './components/404page/Pagenotfound.jsx';
import CheckComp from './components/checkComp/CheckComp.jsx';
function App() {
  return (
    <div className="">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element = {<Home/>}></Route>
          <Route path= '/share/:id' element = {<CheckComp />}></Route>
          {/* <Route path= '*' element = {<Pagenotfound/>}></Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Home/> */}
    </div>
  );
}

export default App;
