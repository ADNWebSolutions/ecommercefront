import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WapBtn from './microcomponents/WapBtn'

function Layout() {
    return (
        <div>
            <Navbar />
            <section className='min-h-screen w-full flex items-center justify-center'>
                <Outlet />
            </section>
            <WapBtn />
            <Footer />
        </div>
    )
}

export default Layout