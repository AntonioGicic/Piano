import React from 'react';
import './Start.css';
import Button from './button.png'

const Start = ({ play }) => {
    return (
        <div className='start-window'>
            <h1>Start playing!</h1>
            <img src={Button} alt="Start playing!" onClick={() => play(true)} />
        </div>
    )
}

export default Start