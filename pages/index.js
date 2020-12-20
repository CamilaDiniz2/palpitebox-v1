import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR('./api/get-promo', fetcher);

  return (
    <div>
      <PageTitle title="Home" />
      <p className="text-black font-medium text-center m-8 text-lg font-family:Roboto">
        O estabelecimento X sempre busca atender melhor os seus clientes. <br />
        Por isso estamos sempre abertos à ouvir sua opinião.
      </p>

      <div className="text-center my-16">
        <Link href="/pesquisa">
          <a className="bg-yellow-500 text-center font-bold text-white mx-auto px-6 py-4 rounded-lg tracking-wider hover:bg-yellow-600 hover:shadow-xl focus:outline-none">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>

      {!data && (
        <p className="text-black font-medium text-center m-8 text-lg font-family:Roboto">
          Carregando dados ...
        </p>
      )}
      {!error && data && data.showCoupon && (
        <p className="text-black font-medium text-center w-2/5 mx-auto m-8 text-lg font-family:Roboto">
          {data.message}
        </p>
      )}
    </div>
  );
};

export default Index;
