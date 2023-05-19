import React from "react";
import FreeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import '../hojas-de-estilo/Logo.css';

const Logo = () => (
    <div className='contenedor-logo'>
        <img
          src={FreeCodeCampLogo}
          className='logo'
        />
    </div>
);

export default Logo;