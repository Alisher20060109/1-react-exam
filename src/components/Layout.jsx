import React from 'react'
import HeaderMemo from './Header'
import FooterMemo from './Foters'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <HeaderMemo />
      <main>
        <Outlet />
      </main>
      <FooterMemo />
    </>
  )
}

export default Layout
