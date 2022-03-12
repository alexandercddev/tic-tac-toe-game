import React, { useState } from 'react';
import TicTacToeIcons from './TicTacToeIcons';

const TicTacToePickPlayer = ({ handleTurn }) => {
    const [player, setPlayer] = useState('blemish'); 
    const handleChange = ({target: {checked}}) => {
        setPlayer(checked ? 'blemish' : 'ball'); 
    }
    const handleStart = ({target: {name}}) => {
        handleTurn({
            value: 'blemish', 
            player,
            type: name
        })
    }
    return (<>
        <div className="container center"> 
            <TicTacToeIcons /> 
        </div>
        <div className="container center">  
            <div className='box-content'>
                <span>Pick player 1's mark</span>
                <label className='switch' htmlFor='switch'>
                    <input 
                        type='checkbox'  
                        id="switch"
                        checked={player === 'blemish'}
                        onChange={handleChange}
                    >
                    </input>
                    <span 
                        className={`action action-blemish ${player === 'blemish' && 'active'}`}
                    ></span>
                    <span 
                        className={`action action-ball ${player === 'ball' && 'active'}`}
                    ></span>
                </label>
                <span className='note'>remember: x goes first</span>
            </div>
        </div>
        <div className="container">  
            <button 
                name='cpu'
                className='btn btn-l vs-cpu' 
                onClick={handleStart}
            >
                new game (vs cpu)
            </button>
            <button 
                name='player'
                className='btn btn-l vs-player' 
                onClick={handleStart}
            >
                new game (vs player)
            </button>
        </div>
    </>);
}
 
export default TicTacToePickPlayer;