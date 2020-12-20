import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>
            <FaHome></FaHome>
            Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contato;
