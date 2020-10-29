import React from 'react'
import Busca from '../../components/Busca'
import '../../App.css'
import logo from '../../components/images/imagelogo.png';

export default function Inicio() {
    return (

        <div className="App">
            <div className="container">
                <img src={logo} className=" image animate-up" alt="logo" />
                <h1 class="animate-up titulo">Buscador de Fotos - REACT</h1>
            <Busca/>
              
        </div>
</div>
    )
}

