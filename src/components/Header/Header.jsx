import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        <img src='https://i.pinimg.com/736x/93/f3/71/93f371f7ca6577d476317b47bc645243--pumpkin-template-printable-pumpkin-stencils.jpg'></img>
        <span className={s.logoName}><h1>Avengersbook</h1></span>
     </header>
    );
}


export default Header;