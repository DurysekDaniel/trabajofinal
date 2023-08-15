import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNavegacion.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import Loguito from './../../assets/Superlogo.jpg';
const Barranavegacion = () => {
  const [Mobile, setMobile] = useState(false)
  return (
      <nav className='navbar'>
        <div className='imagenLogo'><img src={Loguito} alt='el logo'/></div>
        <h3 className='logo'>Misiotrónica</h3>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} 
      onClick={() => setMobile(false)}>
        
      <li><NavLink to='/'>Inicio</NavLink></li>
      <li><Link to='/Tienda'>Tienda</Link></li>
      <li><Link to='/Nosotros'>Nosotros</Link></li>
      <li><Link to='/Contacto'>Contacto</Link></li>
      </ul>

      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      
  )
}

export default Barranavegacion