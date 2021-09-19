import React, { useEffect } from 'react'
import { RouterApp } from './Routers/RouterApp'

import { useSelector } from 'react-redux';

export const App = () => {

  const state = useSelector(state => state.auth) //Manejo los datos del logget
  localStorage.setItem( 'user', JSON.stringify(state) ) // Envio los datos al LocalStorague
  
  const local = JSON.parse(localStorage.getItem('user')) // Recibo lo que viene del localStorague 

  console.log(local)

  return (
    <div>
        <RouterApp />
    </div>
  )
}
