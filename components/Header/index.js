import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <a>
              <img
                className="mx-auto"
                src="./logo-palpitebox.png"
                alt="PalpiteBox"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-gray-600 p-4 shadow-md text-center">
        <Link href="./sobre">
          <a className="px-4 text-white text-xl hover:text-opacity-75">Sobre</a>
        </Link>

        <Link href="./contato">
          <a className="px-4 text-white text-xl hover:text-opacity-75">
            Contato
          </a>
        </Link>

        <Link href="/pesquisa">
          <a className="px-4 text-white text-xl hover:text-opacity-75">
            Pesquisa
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
