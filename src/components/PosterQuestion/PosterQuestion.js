import './PosterQuestion.scss';

import {useState} from "react";


export function PosterQuestion({question}) {

    const [fullscreen, setFullscreen] = useState(false);
    let posterStyle = {
        backgroundImage: `url(${question})`
    };

    function zoomImage() {
        setFullscreen(!fullscreen);
    }

    return (
        <div className={`poster-question ${fullscreen ? 'fullscreen-image' : ''}`} onClick={zoomImage}>
            <div className="poster-question__image" style={posterStyle}></div>
        </div>
    );
}