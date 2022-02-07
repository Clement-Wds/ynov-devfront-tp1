import React from 'react';
import Link from 'next/link';
import LogoClement from '../public/assets/images/clement-wds-white.png';

function Header() {
    return(
        <div className="header-main">
            <div className="header-logo">
                <img src={LogoClement.src} alt="Clément Wds" />
            </div>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/eshop">
                            <a className="nav-link">E-Shop</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
