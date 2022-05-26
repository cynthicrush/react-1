import React from 'react';

function Story({noun, noun2, adjective, color}) {
    return (
        <div className='story'>
            <p>There was a {color} {noun} who loved a {adjective} {noun2}.</p>
        </div>
    )
}

export default Story;
