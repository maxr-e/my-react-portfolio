import '../index.css';
import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header(props) {
    const [currentPage, handlePageChange] = useState();
    return (
        <div className='headerBody'>
            <div className='port'>
                <div className='me'> Max Royal-Eisenberg</div>
            </div>
            <div className='starboard'>
                <ul className="navbar">
                    <li className="nav-item">
                        <button
                        onClick={() => props.handlePageChange({About})}>About Me</button>
                    </li>
                    <li className="nav-item">
                        <button
                        onClick={() => handlePageChange({Portfolio})}>
                        Portfolio
                        </button>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#blog"
                        onClick={() => handlePageChange({Resume})}
                        className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>
                        Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#contact"
                        onClick={() => handlePageChange({Contact})}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;