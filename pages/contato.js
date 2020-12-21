import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import { FaWhatsapp, FaRegEnvelope, FaRegAddressCard } from 'react-icons/fa';

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <h1 className="text-center tracking-wider text-2xl mx-auto font-bold my-12 pb-2 w-4/5  md:w-6/12 lg:w-2/5 lg:text-4xl">
        Contato - PalpiteBox
      </h1>
      <p className="w-10/12 text-center mx-2 text-lg text-gray-900 font-medium mx-auto">
        Para maiores informações sinta-se à vontade para entrar em contato com a
        gente.
      </p>

      <div className="flex flex-col items-start lg:flex-row-reverse lg:justify-center">
        <div className="w-10/12 mx-auto mb-8 flex flex-col justify-center my-8 lg:w-1/2">
          <p className="w-10/12 font-bold text-center mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto md:text-2xl lg:text-left">
            Nossos contatos:
          </p>
          <div className="p-8 bg-gray-200 border-b-2 border-t-2 border-yellow-500 flex items-center mb-4 lg:w-8/12 md:justify-center  lg:mt-6">
            <FaWhatsapp className="text-2xl"></FaWhatsapp>
            <p className="pl-4 text-black font-bold"> (81) 99969-5581</p>
          </div>

          <div className="p-8 bg-gray-200 border-b-2 border-t-2 border-yellow-500 flex flex-wrap items-center mb-4 lg:w-8/12 md:justify-center">
            <FaRegEnvelope className="text-2xl"></FaRegEnvelope>
            <p className="pl-4 text-black font-bold">
              {' '}
              camilla.a.diniz@gmail.com
            </p>
          </div>

          <div className="bg-gray-200 border-b-2 border-t-2 border-yellow-500 flex items-center mb-4 p-8 lg:w-8/12 md:justify-center">
            <FaRegAddressCard className="text-2xl"></FaRegAddressCard>
            <p className="pl-4 text-black font-bold">
              {' '}
              Rua XXXX, nº 123, Recife-PE
            </p>
          </div>
        </div>

        <div className="w-11/12 mx-auto lg:w-1/2">
          <p className="w-10/12 font-bold text-center mt-8 mb-6 mx-2 text-lg text-gray-900 font-medium mx-auto md:text-2xl">
            Confira nossa localização no mapa:
          </p>
          <iframe
            className="mx-auto h-80 lg:w-7/12 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126409.61239529909!2d-34.99769985799821!3d-8.070813205983194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196f88c446e5%3A0x3c9ef52922447fd4!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1608564332742!5m2!1spt-BR!2sbr"
          ></iframe>
          <p className="text-center mb-8 font-medium text-sm">
            Mapa obtido através do
            <a href="https://www.google.com/maps/" className="font-bold">
              {' '}
              Google Maps{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
