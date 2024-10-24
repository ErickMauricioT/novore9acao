import React, { useState } from 'react';

interface SignUpFormProps {
 onCompanyRegisterClick: () => void; // Nova propriedade para redirecionar ao cadastro de empresa
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onCompanyRegisterClick }) => {
 const [email, setEmail] = useState('');
 const [cpf, setCpf] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({ email, cpf, password, confirmPassword });
 };

 return (
  <div className="flex items-center justify-center max-h-screen">
   <div className="w-full max-w-md p-6 md:p-8 space-y-4 bg-customBlue rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-white">Crie o seu Perfil!</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
     <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
      <input
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md"
       required
      />
     </div>
     <div>
      <label htmlFor="cpf" className="block text-sm font-medium text-white">CPF</label>
      <input
       type="text"
       id="cpf"
       value={cpf}
       onChange={(e) => setCpf(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md"
       required
      />
     </div>
     <div>
      <label htmlFor="password" className="block text-sm font-medium text-white">Senha</label>
      <input
       type="password"
       id="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md"
       required
      />
     </div>
     <div>
      <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirme a Senha</label>
      <input
       type="password"
       id="confirmPassword"
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md"
       required
      />
     </div>

     <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
     >
      Criar Conta
     </button>

     {/* Botão para redirecionar ao cadastro de empresa */}
     <div className="mt-4 text-center">
      <button
       type="button"
       onClick={onCompanyRegisterClick}
       className="text-white underline hover:text-gray-300"
      >
       Deseja cadastrar uma empresa?
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default SignUpForm;
