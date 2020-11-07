import React from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

import '../../pages/styles.css';

const Layout = ({ children }) => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
        <div style={{ marginTop: `53px`, padding: `0 1rem`, color: `white`, flexGrow: `1`, height: `100%`}}>
            {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout;