import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import CompanyRegistration from './components/CompanyRegistration';

const App: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'signup' | 'company'>('login');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-10 mb-10">
        {formType === 'login' && (
          <LoginForm onSignUpClick={() => setFormType('signup')} />
        )}
        {formType === 'signup' && (
          <SignUpForm
            onCompanyRegisterClick={() => setFormType('company')}
          />
        )}
        {formType === 'company' && (
          <CompanyRegistration
            onUserRegisterClick={() => setFormType('signup')} // Redireciona de volta ao cadastro de usuário
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
