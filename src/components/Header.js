import React from 'react'

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><ion-icon name="menu-outline"></ion-icon></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/#" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="mailto:gigafinagle@gmail.com" className="nav-link">Contact</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Help
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/#">FAQ</a>
                        <a className="dropdown-item" href="/#">Support</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="mailto:gigafinagle@gmail.com">Contact</a>
                    </div>
                </li>
            </ul>

        </nav>

    )
}
