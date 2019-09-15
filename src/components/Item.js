import React, { useRef, useEffect } from 'react';

import './Item.css';


const Item = ({name, image, selected, liClick}) => {

    const item = useRef(null);

    useEffect(() => {
        if(selected) {
            item.current.classList.add('selected')
        }else {
            item.current.classList.remove('selected')
        }
    })
    

    return (
        <li className="menu-item" ref={item} onClick={() => liClick(name)}>
            <div className="image">
                <img src={image} alt="fda" />
            </div>
            <p className="name">{name}</p>
        </li>
    )
}

export default Item;