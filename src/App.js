import './App.css';
// import Navbar from './components/Navbar';
import {
  BrowserRouter as Routers,
  Routes,
  Route
} from "react-router-dom";
import Contactus from './pages/Contactus';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import RD from './pages/RD'
import Navbar from './components/Navbar';

function App() {
  return (
    <Routers>
      {/* <Navbar  classes = "[#FFA500]"/> */}
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/Contact_us" element={<Contactus contact = "#FFA500"/>} />
        </Routes>
        <Routes>
          <Route exact path="/Certificate" element={<Certificate/>} />
        </Routes>
        <Routes>
          <Route exact path="/R&D" element={<RD/>} />
        </Routes>
        
        
      </Routers>
  );
}

export default App;
