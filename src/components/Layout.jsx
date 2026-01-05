import React from 'react'
import HeaderMemo from './Header'
import FooterMemo from './Foters'
import { Outlet } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext' // yo'lni tekshiring

const Layout = () => {
  return (
    <LanguageProvider> 
      <HeaderMemo />
      <main className="pt-32"> {/* Header fixed bo'lsa kontent ostida qolmasligi uchun */}
        <Outlet />
      </main>
      <FooterMemo />
    </LanguageProvider>
  );
}

export default Layout;