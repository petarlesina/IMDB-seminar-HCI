import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (item) => {
    return (
        <div className = {layoutStyles.range}>
          <div className = {layoutStyles.content}>
            <Header />
            {item.children}
          </div>
          <Footer />
        </div>

    )

}

export default Layout