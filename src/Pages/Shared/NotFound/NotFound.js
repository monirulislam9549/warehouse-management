import React from 'react';
import notfound from '../../../images/notfound/notfound.png'

const NotFound = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h2>Page not found 404</h2>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;