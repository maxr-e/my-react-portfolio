import '../index.css';
import React from 'react';

function Footer() {
    // const [currentPage, handlePageChange] = useState();
    return (
        <div className='footerBody'>
            <div className='port'>
                <div className='me'> Max Royal-Eisenberg</div>
            </div>
            <div className='starboard'>
                <div className="donateField">Venmo Me!
                </div>
            </div>
        </div>
    );
}

export default Footer;