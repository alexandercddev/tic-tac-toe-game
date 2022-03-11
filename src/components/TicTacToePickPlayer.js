import React, { useState } from 'react';
import TicTacToeIcons from './TicTacToeIcons';

const TicTacToePickPlayer = ({ handleTurn }) => {
    const [player, setPlayer] = useState('blemish');
    const handleChange = ({target: {checked}}) => {
        setPlayer(checked ? 'blemish' : 'ball');
        console.log(checked)
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
                    <span className='action action-blemish'></span>
                    <span className='action action-ball'></span>
                </label>
                <span className='note'>remember: x goes first</span>
            </div>
        </div>
        <div className="container">  
            <button className='btn btn-l vs-cpu'>
                new game (vs cpu)
            </button>
            <button className='btn btn-l vs-player'>
                new game (vs player)
            </button>
        </div>
    </>);
}
 
export default TicTacToePickPlayer;