import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importação dos ícones

const Footer = () => {
 return (
  <footer className="bg-customBlue p-4 text-center text-white">


   <div className="flex justify-center space-x-6 mt-4">
    <p className='text-CustomGrey'>&copy; 2024 Re9ação. Todos os direitos reservados.</p>
    <a href="https://www.instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
     <FaInstagram size={24} />
    </a>
    <a href="https://www.linkedin.com/in/seuPerfil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
     <FaLinkedin size={24} />
    </a>
    <a href="https://wa.me/seuNumero" target="_blank" rel="noopener noreferrer" className="hover:text-customGren">
     <FaWhatsapp size={24} />
    </a>
    <a href="mailto:seuEmail@example.com" className="hover:text-red-500">
     <FaEnvelope size={24} />
    </a>
   </div>
  </footer>
 );
};

export default Footer;
