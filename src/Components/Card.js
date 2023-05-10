import React from 'react';
import './card.css';

export default function Card() {

    const [ task1Active, setTask1Active ] = React.useState(true);
    const [ task2Active, setTask2Active ] = React.useState(false);
    const [ task3Active, setTask3Active ] = React.useState(false);
    const [ task4Active, setTask4Active ] = React.useState(false);
    /*
    function turnOn1(){
        setSwitch2(false);
        setSwitch1(true);
    }

    function turnOn2(){
        setSwitch1(false);
        setSwitch2(true);
    }

    function generateCode(){
        setPopupState(true)
    }

    function closePopup(){
        setPopupState(false);
    }
    */
    return (
        <>
        <div className="full-card">
            <div  className='card-body'>
                <div>
                    Complete these tasks
                </div>
                <div style={ task1Active ? { opacity : '1' } : { opacity : '.4' }}>
                    <div>
                        <img />
                        <span>Follow Nutz on <a _target="blank" href={ task1Active ? 'https://google.com' : '#'}>Twitter</a></span>
                    </div>
                </div>

                <div style={ task2Active ? { opacity : '1' } : { opacity : '.4' }}>
                    <div>
                        <img />
                        <span>Like and retweet the Nutz <a _target="blank" href={ task2Active ? 'https://google.com' : '#'}>pinned post</a></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}