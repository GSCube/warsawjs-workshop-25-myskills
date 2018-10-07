import React from 'react';
import './DescriptionBox.css'


function DescriptionBox (props) {
    return <div className='description'>
        {props.children}
    </div>
}

export default DescriptionBox;
