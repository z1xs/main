import React from 'react';

import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <div className="item">
                <i className="fas fa-envelope"></i>
                mgoralczyk.pl@gmail.com
            </div>
            <div className="item">
                <i className="fas fa-phone-square-alt"></i>
                731 157 393
            </div>
        </div>
    )
}

export default Contact;