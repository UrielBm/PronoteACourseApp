import React from "react";
import Header from "../Header";
import Head from "next/head";
const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Itp promoute a course</title>
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
