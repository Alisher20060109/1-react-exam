import React from 'react'
import HeaderMemo from './Header'
import FooterMemo from './Foters'
import { Outlet } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext' 

const Layout = () => {
  return (
    <LanguageProvider> 
      <HeaderMemo />
      <main className="pt-32">
        <Outlet />
      </main>
      <FooterMemo />
    </LanguageProvider>
  );
}

export default Layout;