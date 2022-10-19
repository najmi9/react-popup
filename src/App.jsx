import React from 'react';
import Gallery from './Gallery';
import PopUp from './popup';
import './style.css';

function App() {
    const trigger = <button className="btn btn-success">Click me</button>;

    const images = [
        '1.png',
        '2.png',
        '3.webp',
        '4.webp',
    ];

    return (
        <div className="App">

            <PopUp
                trigger={trigger}
                title='Title of the PopUp'
            >
                <Gallery images={images}/>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Molestiae, labore. Quas tempore voluptatibus consequuntur asperiores
                 necessitatibus, beatae sed libero error optio praesentium impedit velit 
                 ea fugit veritatis animi est consequatur?
                <div>
                    <button className="btn btn-sm btn-success">
                        edit
                    </button>

                    <button className="btn btn-sm m-2 btn-primary">
                        delete
                    </button>
                </div>
            </PopUp>
        </div>
    );
}

export default App;
