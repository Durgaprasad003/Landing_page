
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>

     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="contact" element={<Contact/>}/>

     
     
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
