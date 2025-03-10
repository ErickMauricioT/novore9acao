import React from 'react';

const Navbar: React.FC = () => {
 return (
  <nav className="bg-customBlue p-4">
   <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-2xl font-bold"> <a href=''> Re9ação</a></div>
    <div className="hidden md:flex space-x-4">
     <a href="#" className="text-white hover:text-gray-200">Home</a>
     <a href="#" className="text-white hover:text-gray-200">Sobre</a>
     <a href="#" className="text-white hover:text-gray-200">Contato</a>
    </div>
    <div className="md:hidden">
     <button className="text-white focus:outline-none">
      {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg> */}
     </button>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;