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
import Product from './pages/Product';
import Management from './pages/Management';
import Export from './pages/Export';
import Client from './pages/Client';

function App() {
  return (
    <Routers>
      {/* <Navbar  classes = "[#FFA500]"/> */}
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route exact path="/Contact_us" element={<Contactus />} />
        </Routes>
        <Routes>
          <Route exact path="/Certificate" element={<Certificate/>} />
        </Routes>
        <Routes>
          <Route exact path="/R&D" element={<RD/>} />
        </Routes>
        <Routes>
          <Route exact path="/products" element={<Product/>} />
        </Routes>
        <Routes>
          <Route exact path="/management" element={<Management/>} />
        </Routes>
        <Routes>
          <Route exact path="/export" element={<Export/>} />
        </Routes>
        <Routes>
          <Route exact path="/client" element={<Client/>} />
        </Routes>
        
        
      </Routers>
  );
}

export default App;
