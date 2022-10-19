import React, { useState } from 'react';

function Gallery({images}) {
    if(!images || !Array.isArray(images)) throw Error('images props is not an array');

    const [currentImage, setCurrentImage] = useState(0);

    const LastIndex = images.length;

    return (
        <div style={{marginBottom: '50px'}}>
            {
                images.map(
                    (src, index) => currentImage === index && <img src={src} key={index} alt='Dev' width='100%' height='100%' />
                )
            }

            {
                LastIndex > 1 && <div style={{marginTop: '5px'}}>
                    <button disabled={currentImage === 0} onClick={() => setCurrentImage(i => i - 1)}>{'<---'}</button>
                    <button disabled={currentImage === LastIndex - 1} onClick={() => setCurrentImage(i => i + 1)}>{'--->'}</button>
                </div>
            }
        </div>
    );
}

export default Gallery;