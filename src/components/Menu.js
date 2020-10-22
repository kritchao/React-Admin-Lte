import React from 'react'

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
            <a href="/#" className="brand-link">

                <span className="brand-text font-weight-light">Course Register</span>
            </a>
            <div className="sidebar ">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        <li className="nav-item has-treeview menu-collapse">
                            <a href="/#" className="nav-link active">
                                <p>
                                    Menu
                                <i className="right" ><ion-icon name="chevron-back-outline"></ion-icon></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    
                                    <a href="/register" className="nav-link active">
                                        <p>Register</p>   
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link active">

                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/register-list" className="nav-link active">

                                        <p>Register List</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

    )
}
