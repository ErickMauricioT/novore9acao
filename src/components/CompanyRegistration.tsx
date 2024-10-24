import React, { useState } from 'react';

interface CompanyRegistrationProps {
 onUserRegisterClick: () => void;
}

const CompanyRegistration: React.FC<CompanyRegistrationProps> = ({ onUserRegisterClick }) => {
 const [name, setName] = useState('');
 const [cnpj, setCnpj] = useState('');
 const [email, setEmail] = useState('');
 const [location, setLocation] = useState('');
 const [logo, setLogo] = useState<File | null>(null);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({ name, cnpj, email, location, logo });
 };

 const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
   setLogo(e.target.files[0]);
  }
 };

 return (
  <div className="flex items-center justify-center max-h-screen">
   {/* Margens aplicadas aqui para espaçar o conteúdo do topo e do rodapé */}
   <div className="w-full max-w-md p-6 md:p-8 my-8 bg-customBlue rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-white">Cadastrar Empresa</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
     <div>
      <label htmlFor="name" className="block text-sm font-medium text-white">Nome da Empresa</label>
      <input
       type="text"
       id="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
     <div>
      <label htmlFor="cnpj" className="block text-sm font-medium text-white">CNPJ</label>
      <input
       type="text"
       id="cnpj"
       value={cnpj}
       onChange={(e) => setCnpj(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
       placeholder="Digite o CNPJ"
      />
     </div>
     <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
      <input
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
     <div>
      <label htmlFor="location" className="block text-sm font-medium text-white">Localização</label>
      <input
       type="text"
       id="location"
       value={location}
       onChange={(e) => setLocation(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
     <div>
      <label htmlFor="logo" className="block text-sm font-medium text-white">Logo da Empresa</label>
      <input
       type="file"
       id="logo"
       onChange={handleLogoChange}
       className="block w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
      />
     </div>
     <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-800 focus:outline-none"
     >
      Cadastrar Empresa
     </button>
    </form>
    <p className="text-center text-white mt-4">
     Quer cadastrar como usuário?{' '}
     <button
      onClick={onUserRegisterClick}
      className="text-blue-500 hover:underline"
     >
      Clique aqui
     </button>
    </p>
   </div>
  </div>
 );
};

export default CompanyRegistration;
