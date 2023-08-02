import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from 'react';

const DefaultLayout:React.FC=()=> {

  return <>
    <header>
        <Header></Header>
    </header>
    <main className="min-h-[800px]">
        <Outlet/>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
  </>;
}

export default DefaultLayout;
