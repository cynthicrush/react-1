import React from 'react';

function Story(noun, noun2, adjective, color) {
    return (
        <div className='story'>
            <p>There was a {color} {noun} who loved a {adjective} {noun2}.</p>
            <button>Restart</button>
        </div>
    )
}

export default Story;
