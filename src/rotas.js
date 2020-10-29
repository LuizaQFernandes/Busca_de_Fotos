import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NãoEncontrado from '../src/pages/NaoEncontrado'
import Inicio from '../src/pages/inicio'
import Recepção from '../src/pages/Recepcao'


export default function Rotas(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Recepção}/>
                <Route exact path="/inicio" component={Inicio}/>
                <Route component={NãoEncontrado}/>
            </Switch>
        </BrowserRouter>

    )
}