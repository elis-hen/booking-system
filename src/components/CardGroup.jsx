import React from 'react';
import { useState } from 'react';
//Importar CSS do CardGroup
import './css/CardGroup.css';

export default function CardGroup({ options }) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);
        console.log('O indice clicado foi: ' + i);
    }

    return (
        <div className='row mt-4'>
            {
                options.map((item, i) => (
                    <div key={i} className='col-6 mb-3'>
                        <div
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId ? "w-100 cardGroup active justify-content-center align-items-center" : "w-100 cardGroup justify-content-center align-items-center"}>
                            <p className='txt_card'>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
