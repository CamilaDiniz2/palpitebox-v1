import React from 'react';
import PageTitle from '../components/PageTitle';

const Sobre = () => {
  return (
    <div>
      <PageTitle title="Sobre" />
      <h1 className="text-center tracking-wider text-2xl mx-auto font-bold my-8 pb-2 w-4/5  md:w-4/12 lg:w-2/5 lg:text-4xl">
        Sobre - PalpiteBox
      </h1>
      <div
        className="flex flex-col  w-9/12 mx-auto mb-8  
        lg:flex-row md:flex-wrap md:grid md:grid-cols-2 md:gap-8"
      >
        <div
          className=" bg-yellow-200 mb-8 mx-auto cursor-default hover:shadow-lg 
          hover:opacity-100 hover:bg-yellow-300 hover: rounded-xl py-4 px-8 md:col-span-2"
        >
          <h2 className="font-bold text-2xl text-left text-gray-900 mb-4 fonto-family:Roboto">
            Missão
          </h2>
          <p className="text-justify font-medium text-black">
            Nossa missão é sit amet, consectetur adipiscing elit. Curabitur sem
            massa, blandit vitae efficitur vitae, bibendum a magna. Sed
            condimentum luctus ornare. Nunc vehicula odio in arcu venenatis, a
            posuere ligula pharetra. Suspendisse egestas urna et nulla finibus
            malesuada. Fusce at ante in tellus consectetur fermentum eu eget
            purus.
          </p>
        </div>
        <div
          className="bg-yellow-200 mb-8 mx-auto rounded-xl py-4 px-8 
          hover:shadow-lg hover:bg-yellow-300"
        >
          <h2 className="font-bold text-2xl text-left text-gray-900 mb-4">
            Visão
          </h2>
          <p className="text-justify font-medium text-black">
            Nossa missão é sit amet, consectetur adipiscing elit. Curabitur sem
            massa, blandit vitae efficitur vitae, bibendum a magna. Sed
            condimentum luctus ornare. Nunc vehicula odio in arcu venenatis, a
            posuere ligula pharetra. Suspendisse egestas urna et nulla finibus
            malesuada. Fusce at ante in tellus consectetur fermentum eu eget
            purus.
          </p>
        </div>
        <div
          className="bg-yellow-200 mb-8 mx-auto rounded-xl py-4 px-8 
          hover:shadow-ll hover:bg-yellow-300"
        >
          <h2 className="font-bold text-2xl text-left text-gray-900 mb-4">
            Valores
          </h2>
          <p className="text-justify font-medium text-black">
            Nossos valores são sit amet, consectetur adipiscing elit. Curabitur
            sem massa, blandit vitae efficitur vitae, bibendum a magna. Sed
            condimentum luctus ornare. Nunc vehicula odio in arcu venenatis, a
            posuere ligula pharetra. Suspendisse egestas urna et nulla finibus
            malesuada. Fusce at ante in tellus consectetur fermentum eu eget
            purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
