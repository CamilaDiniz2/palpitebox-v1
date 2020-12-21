import React from 'react';
import Head from 'next/head';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - PalpiteBox</title>
      <link rel="shortcut icon" href="/logo-palpitebox.png" />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default PageTitle;
