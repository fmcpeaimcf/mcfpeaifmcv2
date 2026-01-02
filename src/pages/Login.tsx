
import React from "react";
import Google from "../components/Google";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-fmc-dark p-4 font-display antialiased">
      <div className="w-full max-w-md rounded-2xl bg-fmc-wine p-8 shadow-2xl shadow-black/30">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-fmc-dark p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fmc-gold"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-white">Bienvenido de Nuevo</h2>
          <p className="mt-2 text-fmc-gold/80">Inicia sesión para continuar.</p>
        </div>
        
        <Google />

        <div className="mt-8 text-center text-sm text-fmc-gold/60">
          <p>Contacta a <a href="mailto:fmcpeaimcf@gmail.com" className="underline hover:text-fmc-amber">fmcpeaimcf@gmail.com</a> para soporte.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
