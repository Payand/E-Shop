import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./FooterComponents/Footer";
import Header from "./HeaderComponents/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
