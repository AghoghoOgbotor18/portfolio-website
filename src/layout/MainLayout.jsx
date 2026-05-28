import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappLink from "../components/WhatsappLink"

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Header />
        <WhatsappLink />
      </header>

      <main className='flex-grow'>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
