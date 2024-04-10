import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <h4>
                Layout
            </h4>
            <Outlet />
        </div>
    )
}

export default Layout