import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({children}) {
  return (
    <div>
        <header>
            <Header />
        </header>

        <main>
            {children}
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default MainLayout;
