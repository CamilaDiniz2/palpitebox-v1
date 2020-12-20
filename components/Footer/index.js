import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-10 bg-gray-900 grid grid-cols-1 gap-4 items-center sm:grid-cols-3 gap-4">
      <div className="mx-auto my-4 flex-1">
        <img src="./logo-fsm.png" alt="FullStack Master" />
      </div>
      <div className="mx-auto my-4 flex-1">
        <img src="./logo-devpleno.png" alt="DevPleno" />
      </div>

      <div className="container text-white font-bold mx-auto text-center flex-1">
        Projeto desenvolvido por Camila Diniz
        <div className="flex items-center justify-center mx-auto">
          <a
            href="https://www.linkedin.com/in/camila-almeida-diniz/"
            target="_blank"
            className="px-2 py-2 m-2 text-xl hover:bg-gray-700 rounded-lg"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://github.com/CamilaDiniz2"
            target="_blank"
            className="px-2 py-2 m-2 text-xl hover:bg-gray-700 rounded-lg"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://twitter.com/camilaalmeidadi"
            target="_blank"
            className="px-2 py-2 m-2 text-xl hover:bg-gray-700 rounded-lg"
          >
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
