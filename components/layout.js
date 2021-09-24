import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
