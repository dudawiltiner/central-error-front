import React, { useState } from 'react'
import Login from './login';
import Resgister from './resgister';
import 'aos/dist/aos.css';

export default function Main() {
  const [show, setShow] = useState(true);

  return (
    <div className="h-screen bg-[url('/hero-pattern.png')]">
      {
        show ?
          <Login changeToRegister= { setShow } />
        :
          <Resgister changeToLogin= { setShow }  /> 
      }
      
      
    </div>
  )
}
