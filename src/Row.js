import React from 'react';
import './Row.css';

function Row({title, fetchUrl, isLargeRow}) {
    return (
        <div className="row">
            {title}
            <div className="row__poster">
                <img src="" alt=""/>

            </div>
            
        </div>
    )
}

export default Row;
