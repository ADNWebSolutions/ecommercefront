import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WapBtn from './microcomponents/WapBtn'

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <WapBtn />
            <Footer />
        </div>
    )
}

export default Layout