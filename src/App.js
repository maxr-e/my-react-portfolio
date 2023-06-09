import React from "react";
import './index.css';

import { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';

function App() {
    const [currentPage, handlePageChange] = useState('About');
    const renderPage = () => {
        //switch allows renderPage to render the current page
        switch (currentPage) {
            case 'About Me':
                return<About />;
            case 'Contact Me':
                return <Contact />;
            case 'My Resume':
                return <Resume />;
            case 'My Porfolio':
                return <Portfolio />;
                default:
                    return <About />;
        }
    };
    return (
        <div>
            <Header handlePageChange= {handlePageChange}></Header>
            <main>
            {renderPage()}
            </main>
            <Footer></Footer>
        </div>
    )
}



export default App;
