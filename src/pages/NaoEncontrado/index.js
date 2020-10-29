import React from 'react'
import Typography from '@material-ui/core/Typography'
import "../../App.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function NãoEncontrado() {
    return (
        <div className="NaoEncontrado">
            <div className="container">
                <Typography variant='h1'>
                    Não encontrado
                </Typography>
                          
            <div className="visite">
                <a className="animate-up" href="/">
                    <ArrowBackIcon fontSize="large" />
                </a>
            </div>
            </div>
        </div>
    )
}