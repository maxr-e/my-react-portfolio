import '../index.css';
import React from 'react';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Portfolio } from '../pages/Portfolio';
import { Resume } from '../pages/Resume';

function Header(props) {
    // const [currentPage, handlePageChange] = useState();
    return (
        <div className='headerBody'>
            <div className='port'>
                <div className='me'> Max Royal-Eisenberg</div>
            </div>
            <div className='starboard'>
                <ul className="navbar">
                    <li className="nav-item">
                        <button
                        onClick={() => props.handlePageChange(About)}>About Me</button>
                    </li>
                    <li className="nav-item">
                        <button
                        onClick={() => props.handlePageChange(Portfolio)}>
                        Portfolio
                        </button>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#resume"
                        //used to be href="#blog"
                        onClick={() => props.handlePageChange(Resume)}
                        className={props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        href="#contact"
                        onClick={() => props.handlePageChange(Contact)}
                        className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;