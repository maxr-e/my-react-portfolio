import React from "react";
import './index.css';

import { useState } from 'react';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';
import { About } from './pages/About';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    const [currentPage, handlePageChange] = useState('About');
    const renderPage = () => {
        //switch allows renderPage to render the current page
        switch (currentPage) {
            case 'About':
                return<About />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            case 'Porfolio':
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
