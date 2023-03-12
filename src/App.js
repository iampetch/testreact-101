//import logo from './logo.svg';
//import './App.css';
//import dog from './assets/rubsarb.jpg';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element ={<Home />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
    </>
    /* <div className="App">
      <header className="App-header">
        <img src={dog} className="App-logo" alt="dog" />
        <p>
          My link <code>src/App.js</code> Click here! 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@RUBSARBproduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          RUBSARBproduction
        </a>
      </header>
    </div> */

  );
}

export default App;
