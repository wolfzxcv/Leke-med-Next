import React from 'react';
import Head from 'next/head';
import Nav from '../Nav';

const Layout = (props: any) => (
  <div>
    <Head>
      <title>This is for learning Next.js</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
