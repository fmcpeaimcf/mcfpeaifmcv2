import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [documentType, setDocumentType] = useState('Cédula de ciudadanía');
    const [documentNumber, setDocumentNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+57');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [generatedId, setGeneratedId] = useState('');

    const navigate = useNavigate();

    const handleSave = () => {
        // Lógica para guardar los datos
        const newId = `MCF-${Math.floor(Math.random() * 9000) + 1000}-XJ`;
        setGeneratedId(newId);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedId);
    };

    const handleNext = () => {
        navigate('/welcome');
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-sm mx-auto bg-[#1a1a1a] p-6 md:p-8 rounded-3xl shadow-2xl text-white">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-orange-500 rounded-full p-3 mb-4">
                        <span className="material-icons-round text-4xl text-white">groups</span>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold text-center">FUNDACIÓN MISIÓN COLOMBIA</h1>
                </div>

                <div className="bg-[#2a2a2a] p-3 rounded-xl mb-6 text-center">
                    <p className="text-orange-400 text-sm">PROYECTO: PEAI-MCF</p>
                    <p className="text-white text-sm">FICHA N° 2023-MCF-089</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="text-gray-400 text-xs mb-2 block">TIPO DE DOCUMENTO</label>
                        <div className="relative flex items-center">
                            <span className="material-icons-round absolute left-3 text-orange-400">badge</span>
                            <select
                                value={documentType}
                                onChange={(e) => setDocumentType(e.target.value)}
                                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg pl-12 pr-10 py-3 text-white appearance-none"
                            >
                                <option>Cédula de ciudadanía</option>
                            </select>
                            <span className="material-icons-round absolute right-3 text-gray-400">expand_more</span>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-400 text-xs mb-2 block">CÉDULA DEL POSTULANTE</label>
                        <div className="relative flex items-center">
                             <span className="material-icons-round absolute left-3 text-orange-400">fingerprint</span>
                            <input
                                type="text"
                                value={documentNumber}
                                onChange={(e) => setDocumentNumber(e.target.value)}
                                placeholder="Ingresa cédula de ciudadanía"
                                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-400 text-xs mb-2 block">NÚMERO DE TELÉFONO</label>
                        <div className="flex gap-2">
                            <div className="relative flex items-center w-1/3">
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg pl-3 pr-8 py-3 text-white appearance-none text-center"
                                >
                                    <option>+57</option>
                                </select>
                                <span className="material-icons-round absolute right-2 text-gray-400">expand_more</span>
                            </div>
                            <div className="relative flex items-center w-2/3">
                                <span className="material-icons-round absolute left-3 text-orange-400">phone_iphone</span>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Ingresa el número"
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <span className="material-icons-round">save</span>
                        GRABAR
                    </button>

                    {generatedId && (
                        <div className="mt-6">
                            <label className="text-gray-400 text-xs mb-2 block text-center">ID CÓDIGO ÚNICO GENERADO</label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    readOnly
                                    value={generatedId}
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg pl-4 pr-12 py-3 text-orange-400 text-center font-mono"
                                />
                                <button onClick={handleCopy} className="absolute right-2 p-1.5 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors">
                                    <span className="material-icons-round text-white">content_copy</span>
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleNext}
                        className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-between transition-colors"
                    >
                        <span>Siguiente</span>
                        <span className="material-icons-round">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
