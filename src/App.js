import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/BarraNavegacion';
import Home from './pages/home/Home';
import Tienda from './pages/tienda/Tienda';
import Nosotros from './pages/nosotros/Nosotros';
import Error from './pages/error/PaginaError';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Tienda' element={<Tienda/>}/>
          <Route exact path='/Contacto' element={<Contacto/>}/>
          <Route exact path='/Nosotros' element={<Nosotros/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
