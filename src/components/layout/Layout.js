import React from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

import '../../pages/styles.css';

const Layout = ({ children, isFullWidth = false }) => {
  const layoutStyle = { marginTop: `53px`, padding: isFullWidth ? `0` : `0 1em`, color: `white`, flexGrow: `1`, height: `100%`};
  return (
    <div className='layout-wrapper'>
      <Navbar />
        <div style={layoutStyle}>
            {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout;