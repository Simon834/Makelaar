import React, { useState, useEffect } from 'react'

import style from './GaleryImg.module.css'

export default function GaleryImg({ images = [] }) {

    const [currentImage, setCurrentImage] = useState("")
    
    useEffect(() => {
        setCurrentImage(images[0]?.url)
       
    }, [images])

    return (

        <div className={style.contenedor}>
            <img className={style.currentImage}  src={currentImage} alt={currentImage} />
            {images?.map(image =>
                <img className={style.mini} onClick={()=>setCurrentImage(image.url)}  src={image?.url} alt={image?.url} />)}
        </div>

    )
}
