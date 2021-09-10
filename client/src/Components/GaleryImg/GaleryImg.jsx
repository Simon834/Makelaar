import React, { useState } from 'react'

import style from './GaleryImg.module.css'

export default function GaleryImg({ images = [] }) {

    const [currentImage, setCurrentImage] = useState(images[0])
    
    return (

        <div className={style.contenedor}>
            <img className={style.currentImage}  src={currentImage} alt={currentImage} />
            {images?.map(image =>
                <img className={style.mini} onClick={()=>setCurrentImage(image)}  src={image} alt={image} />)}
        </div>

    )
}
