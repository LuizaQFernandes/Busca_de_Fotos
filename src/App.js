import React from 'react'
import Rotas from './rotas'
import './App.css'
import {createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'

import { blue, grey, deepOrange, blueGrey,} from '@material-ui/core/colors'


import CssBaseLine from '@material-ui/core/CssBaseline'

function App(){

  const temaDark = false
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? blueGrey[500] : blue[500] 
  const corSecundaria = temaDark? deepOrange[900] : grey[900]

  let theme = createMuiTheme(
    {
      palette: {
        type: tipoPaleta,
        primary: { main: corPrimaria},
        secondary: { main: corSecundaria }
        
      },

    }
  )
  theme = responsiveFontSizes(theme)

  return(
    
    <MuiThemeProvider theme = {theme}>
    <CssBaseLine/>
    <Rotas />
    </MuiThemeProvider>
  )
}
export default App
