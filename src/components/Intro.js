import React from 'react';
import yellow from '../yellow.svg';
import blue from './../blue.svg';
// import { Link } from 'react-router-dom'

export default function Intro() {
    function moveToQuestions() {

    }

    return (
        <div className="intro-container">
            <img className="yellow-img" src={yellow}></img>
            <div className='intro-conent--container'>
                <h2 className='title'>Quizzical</h2>
                <p className='description'>Some description if needed</p>
                <button onClick={moveToQuestions} className="cta-btn">Start Quiz</button>
            </div>
            <img className="blue-img" src={blue}></img>
        </div>
    )
}