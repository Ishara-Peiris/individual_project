import logo from './logo.svg';
import './App.css';


import NavBar from './components/home/NavBar';
import Banner from './components/home/Banner';
import AboutUs from "./components/home/AboutUs";
import {BrowserRouter,Route ,Routes} from 'react-router-dom';
import About from "./components/home/About";
import Home from "./components/home/Home";


import Create from './components/home/Create';
import CreateAccountForm from './components/home/CreateAccountForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/home1" element={<Home/>}></Route>
        <Route path="/create " element={<CreateAccountForm/>}></Route>


        </Routes>
        </BrowserRouter>
 
 
 

 
 
    </div>
    

  );
}

export default App;
