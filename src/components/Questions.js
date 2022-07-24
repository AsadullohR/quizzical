import React from 'react';
import Question from './Question';
import yellow from '../yellow.svg';
import blue from './../blue.svg';

export default function Questions() {
    const options = [12, 21, 32, 45]

    return (
        <div>
            <img className="yellow-img" src={yellow}></img>
            <Question question="How old are you?" options={options} rAnswer={21} />
            <Question question="How old are you?" options={options} rAnswer={21} />
            <Question question="How old are you?" options={options} rAnswer={21} />
            <Question question="How old are you?" options={options} rAnswer={21} />
            <Question question="How old are you?" options={options} rAnswer={21} />
            <button className="cta-btn check-answers--btn">Check Answers</button>
            <img className="blue-img" src={blue}></img>
        </div>
    )

}