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
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                                </svg>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
