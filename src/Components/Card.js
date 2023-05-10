import React from 'react';
import './card.css';
import logo from '../logo.png'

export default function Card() {
    const [ walletState, setWalletState ] = React.useState({value: '', show: ''});
    const [ walletTaskActive, setWalletTaskActive ] = React.useState(true);
    const [ task1Active, setTask1Active ] = React.useState(false);
    const [ task2Active, setTask2Active ] = React.useState(false);
    const [ task3Active, setTask3Active ] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    
    function load(){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    function done1(){
        load();
        setTask1Active(false);
        setTask2Active(true)
    }

    function done2(){
        load();
        setTask2Active(false);
        setTask3Active(true)
    }


    function done3(){
        load();
        setTask3Active(false);
    }

    async function handleWalletChange(e) {
        await setWalletState({value: e.target.value})

        console.log(walletState.value)
    }

    
    function walletTask(e){
        e.preventDefault()
        load();
        if (e.target.value.length == 42 && e.target.value.startsWith("0x")){
            setWalletState({show: walletState.value})
            setWalletTaskActive(false);
            setTask1Active(true)
        } else {
            console.log("NOO")
            // POPUP
        }
    }

    
    
    function share(){
        let link = window.location.href
        if(link.slice(-1) == "#"){
            link = link.slice(0, -1)
        }
        link = link + "?ref=";
        return link
    }

    return (
        <>
        { loading ?
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
        : "" }

        
        { loading ? "" :
        <div className="full-card">
            <div className='card-head'>
                Complete these tasks
            </div>
            <div className='card-body'>
                <div>
                    <div style={ walletTaskActive ? { opacity : '1' } : { opacity : '.2' }}>
                        <div className="in-task">
                            <img className="in-logo" src={logo} />
                            <span>
                                <form className='input-form' onSubmit={walletTask}>
                                    <input style={ walletTaskActive ? { opacity : '1' } : { opacity : '.2' }} value={walletState.value} onChange={handleWalletChange} />
                                    <input type="submit" className={ walletTaskActive ? 'done' : ''} onClick={walletTask} value="SUBMIT" />
                                </form>
                            </span>
                        </div>
                    </div>
                    <div style={ task1Active ? { opacity : '1' } : { opacity : '.2' }}>
                        <div className="in-task">
                            <img className="in-logo" src={logo} />
                            <span>
                                Follow Nutz on <a className={ task1Active ? 'task-link' : ''} target='_blank' href={ task1Active ? 'https://google.com' : '#'}>Twitter</a>
                                <div className={ task1Active ? 'done' : ''} onClick={done1}>{ task1Active ? 'DONE' : ''}</div>
                            </span>
                        </div>
                    </div>

                    <div style={ task2Active ? { opacity : '1' } : { opacity : '.2' }}>
                        <div className="in-task">
                            <img className="in-logo" src={logo} />
                            <span>Like and retweet the Nutz <a className={ task2Active ? 'task-link' : ''} target='_blank' href={ task2Active ? 'https://google.com' : '#'}>pinned post</a>
                                <div className={ task2Active ? 'done' : ''} onClick={done2}>{ task2Active ? 'DONE' : ''}</div>
                            </span>
                        </div>
                    </div>

                    <div style={ task3Active ? { opacity : '1' } : { opacity : '.2' }}>
                        <div className="in-task">
                            <img className="in-logo" src={logo} />
                            <span>Make a <a className={ task3Active ? 'task-link' : ''} target='_blank' href={ task3Active ? 'https://google.com' : '#'}> post </a>about Nutz
                                <div className={ task3Active ? 'done' : ''} onClick={done3}>{ task3Active ? 'DONE' : '' }</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-footer'>
                <div onClick={share} className="footer-link">Share</div>
                <div className="footer-link">Claim airdrop</div>
            </div>
        </div>
        }
        </>
    )
}