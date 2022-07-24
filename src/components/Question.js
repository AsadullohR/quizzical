import React from 'react';

export default function Question(props) {
    return (
        <div className='question-container'>
            <h1 className='question'>{props.question}</h1>
            <ul className='options-container--list'>
                {props.options.map(option => (
                    <li><button className='option-btn'>{option}</button></li>
                ))}
            </ul>
            <hr className='divider' />
        </div>
    )

}