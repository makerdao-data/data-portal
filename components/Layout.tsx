import Head from "next/head";
import React, { ReactNode, Fragment } from "react";
import Navbar from "./Navbar";
import { Box } from "theme-ui";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>Data Insights</title>
        <meta name="description" content="Maker DAO Data Insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Box
        as="div"
        sx={{ paddingLeft: "1rem", paddingRight: "1rem", marginTop: "3rem" }}
      >
        {children}
      </Box>
    </Fragment>
  );
}
