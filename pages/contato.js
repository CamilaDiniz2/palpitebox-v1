import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import { FaWhatsapp, FaRegEnvelope, FaRegAddressCard } from 'react-icons/fa';

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <h1 className="text-center tracking-wider text-2xl mx-auto font-bold my-12 pb-2 w-4/5  md:w-4/12 lg:w-2/5 lg:text-4xl">
        Contato - PalpiteBox
      </h1>
      <p className="w-10/12 text-center mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto">
        Para maiores informações sinta-se à vontade para entrar em contato com a
        gente.
      </p>
      <p className="w-10/12 font-bold text-center mt-8 mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto md:text-2xl">
        Formas de contato:
      </p>
    </div>
  );
};

export default Contato;
