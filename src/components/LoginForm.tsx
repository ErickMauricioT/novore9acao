import React, { useState } from 'react';

interface LoginFormProps {
 onSignUpClick: () => void; // Propriedade para alternar para o cadastro
}

const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({ email, password });
  // Aqui você pode integrar a lógica de autenticação
 };

 return (
  <div className="flex items-center justify-center max-h-screen">
   <div className="w-full max-w-md p-6 md:p-8 space-y-4 bg-customBlue rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-white">Bem-vindo(a)!</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
     <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">Usuário</label>
      <input
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-customBlue bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
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
       className="block w-full px-4 py-2 mt-2 text-customBlue bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
  
     <div className="flex space-x-4 justify-center mt-4">
      <button
       type="submit"
       className="w-32 px-4 py-2 text-customBlue bg-white rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none"
      >
       ENTRAR
      </button>

      <button
       type="button"
       onClick={onSignUpClick} // Alterna para o formulário de cadastro
       className=" px-4 py-2 text-white bg-customGren rounded-md hover:bg-green-700 focus:bg-green-800 focus:outline-none"
      >
       CRIAR CONTA
      </button>
     </div>

     <div className="flex justify-center">
      <a href="#" className="text-sm text-white hover:underline">Recuperar acesso</a>
     </div>

    </form>
   </div>
  </div>
 );
};

export default LoginForm;
