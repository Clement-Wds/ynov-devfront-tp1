import React from 'react';
import Link from 'next/link';
import LogoClement from '..public/assets/images/clement-wds-white.png';

function Header() {
    return(
        <div className="header-main">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li class="header-nav-item">
                        <Link href="/">
                            <a className="header-nav-link">Home</a>
                        </Link>
                    </li>
                    <li class="header-nav-item">
                        <Link href="/about">
                            <a className="header-nav-link">About Us</a>
                        </Link>
                    </li>
                    <li class="header-nav-item">
                        <Link href="/blog/hello-world">
                            <a className="header-nav-link">Blog Post</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
