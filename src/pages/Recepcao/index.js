import React from 'react'
import '../../App.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import logo from '../../components/images/logo.png';

export default function Recepcao(){
  
  return (
    
      <div id="page-landing">
        <div className="container">
          <img src={logo} className="animate-up image" alt="logo" />
          <h1 className="animate-up">Busque as melhores fotografias</h1>
          <h2 className="animate-up">Busca rápida e grátis por imagens</h2>
          
          <div className="visite">
            <a className="animate-up" href="/inicio">
                <ArrowForwardIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    
  );
  
}