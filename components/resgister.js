import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { fetchAuthUser, fetchRegisterUser } from '../services/userAPI';
import { fetchGetEvents } from '../services/eventsAPI';

export default function Resgister({ changeToLogin }) {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const save = async(e) => {
    e.preventDefault()
    try {
     
      const rest = await fetchRegisterUser(email, password);
      console.log(rest);
    } catch(error){
      console.log("aqui")
      console.log(error);
    }
    
  }

 
  return (
    // Exemplo adaptado do Tailwind.js
    <div data-aos="fade-up" className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 ml-auto mr-auto text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <p className="text-lg font-bold text-center text-white">CADASTRO</p>
                <div className="">
                  <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                  <input onChange={({target}) => setEmail(target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Digite o e-mail" aria-label="email" required />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-white">Senha</label>
                  <input onChange={({target}) => setPassword(target.value)}  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required/>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button onClick={ (e)=> save(e) } className="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded hover:bg-gray-800"
                  type="button"
                    >Registrar</button>
                  <button onClick={() => changeToLogin(true)} className="right-0 inline-block text-sm font-bold text-white align-baseline text-500 hover:text-gray-800"
                  >Voltar para Login</button>
                </div>
            </form>
          </div>
        </div>
      </div>
  )
}
