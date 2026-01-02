import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SecretCode = () => {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000)
      .toString()
      .replace(/(\d{3})(\d{3})/, "$1 $2");
    setCode(newCode);
    setTimeLeft(60);
  };

  useEffect(() => {
    generateCode();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      generateCode();
    }
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code.replace(" ", ""));
  };

  const handleVerifyCode = () => {
    if (inputCode.replace(/\s/g, "") === code.replace(" ", "")) {
      navigate("/home");
    } else {
      setError("El código no coincide. Inténtalo de nuevo.");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-fmc-dark p-4 font-display antialiased">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-fmc-wine p-8 shadow-2xl shadow-black/30">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">Tu Código Secreto</h1>
            <p className="mt-2 text-fmc-gold/80">
              Este código se actualiza automáticamente.
            </p>
          </div>

          <div className="mb-6 flex flex-col items-center justify-center rounded-lg bg-fmc-dark p-6">
            <div className="font-mono text-5xl font-bold tracking-widest text-white">
              {code}
            </div>
            <div className="mt-4 h-1.5 w-full max-w-xs rounded-full bg-black/20">
              <div
                className="h-full rounded-full bg-fmc-amber transition-all duration-1000 ease-linear"
                style={{ width: `${(timeLeft / 60) * 100}%` }}
              ></div>
            </div>
            <span className="mt-3 text-sm text-fmc-gold/70">
              Actualizando en {timeLeft}s
            </span>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <button
              onClick={handleCopyCode}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-fmc-amber/20 px-4 text-base font-bold text-fmc-amber transition-all hover:bg-fmc-amber/30 active:scale-[0.98] border border-fmc-amber/30"
            >
              <span className="material-symbols-outlined">content_copy</span>
              Copiar Código
            </button>
             <button
              onClick={generateCode}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-fmc-wine/80 px-4 text-base font-semibold text-fmc-gold transition-all hover:bg-fmc-dark/50 active:scale-[0.98] border border-fmc-gold/20"
            >
              <span className="material-symbols-outlined">sync</span>
              Generar Nuevo
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Pegar código aquí"
                className="h-12 w-full rounded-lg bg-fmc-dark px-4 text-white placeholder-fmc-gold/50 border border-fmc-gold/20 focus:outline-none focus:border-fmc-amber focus:ring-1 focus:ring-fmc-amber transition-all"
              />
              <button
                onClick={handleVerifyCode}
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-fmc-amber px-6 text-base font-bold text-fmc-dark transition-all hover:bg-fmc-amber/80 active:scale-[0.98]"
              >
                Ingresar
              </button>
            </div>
            {error && <p className="text-center text-red-400 text-sm">{error}</p>}
          </div>
        </div>

        <div className="mt-6 flex w-full justify-between gap-4">
          <button
              onClick={() => navigate(-1)}
              className="flex h-10 items-center justify-center gap-2 rounded-lg bg-fmc-wine/80 px-4 text-sm font-semibold text-fmc-gold transition-all hover:bg-fmc-dark/50 active:scale-[0.98] border border-fmc-gold/20"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Volver
            </button>
            <button
              onClick={handleLogout}
              className="flex h-10 items-center justify-center gap-2 rounded-lg bg-fmc-wine/80 px-4 text-sm font-semibold text-fmc-gold transition-all hover:bg-fmc-dark/50 active:scale-[0.98] border border-fmc-gold/20"
            >
              <span className="material-symbols-outlined">logout</span>
              Cerrar Sesión
            </button>
        </div>
      </div>
    </div>
  );
};

export default SecretCode;
