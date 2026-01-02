
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const handleGenerateCode = () => {
    navigate("/secret-code");
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-fmc-dark p-4 font-display antialiased">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 h-32 w-32 rounded-full bg-fmc-wine shadow-lg ring-4 ring-fmc-wine/50 flex items-center justify-center">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Foto de perfil" className="h-full w-full rounded-full object-cover"/>
            ) : (
              <span className="material-symbols-outlined text-fmc-gold text-6xl">person</span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white">¡Bienvenido!</h1>
          <p className="mt-1 text-lg text-fmc-gold/80">{user?.displayName || "Usuario"}</p>
           <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-fmc-wine/80 px-3 py-1 border border-fmc-gold/20">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-green-300">Sesión Activa</span>
            </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGenerateCode}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-fmc-amber px-4 text-lg font-bold text-fmc-dark shadow-lg shadow-fmc-amber/20 transition-all hover:bg-fmc-amber/80 active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">vpn_key</span>
            Generar Código Secreto
          </button>
          <button
            onClick={handleLogout}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-fmc-wine/80 px-4 font-semibold text-fmc-gold transition-all hover:bg-fmc-dark/50 active:scale-[0.98] border border-fmc-gold/20"
          >
            <span className="material-symbols-outlined">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
