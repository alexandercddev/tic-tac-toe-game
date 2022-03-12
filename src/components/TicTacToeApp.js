import React, { useEffect, useReducer, useState } from 'react';
import { ticTacToeReducer } from '../reducers/ticTacToeReducer';
import TicTacToeItem from './TicTacToeItem';
import TicTacToeMaker from './TicTacToeMarker';
import TicTacToePickPlayer from './TicTacToePickPlayer';
import TicTacToeIcons from './TicTacToeIcons';

const init = () => [
    [
        {
            id: 1, 
            value: '',
            checked: false
        },
        {
            id: 2, 
            value: '',
            checked: false
        },
        {
            id: 3, 
            value: '',
            checked: false
        }
    ],
    [
        {
            id: 4, 
            value: '',
            checked: false
        },
        {
            id: 5, 
            value: '',
            checked: false
        },
        {
            id: 6, 
            value: '',
            checked: false
        }
    ],
    [
        {
            id: 7, 
            value: '',
            checked: false
        },
        {
            id: 8, 
            value: '',
            checked: false
        },
        {
            id: 9, 
            value: '',
            checked: false
        }
    ]
];

const TicTacToeApp = () => {
    const [ ticTacToes, dispath ] = useReducer(ticTacToeReducer, [], init); 
    const [turn, setTurn] = useState({ });
    const [makers, setMakers] = useState({
        blemish: 0,
        ties: 0,
        ball: 0,
    });
    const { blemish, ties, ball } = makers;
    const handleChecked = ({ target: { checked } }, row, cell) => {
        const prev = ticTacToes[row][cell];
        if(!prev?.checked){
            dispath({
                type: 'checked',
                payload: {
                    value: turn.value,
                    checked,
                    row, 
                    cell,
                }
            }); 
            setTurn( (prev) => ({
                value: prev.value === 'ball' ? 'blemish' : 'ball',
                cell,
                row
            })); 
        } 
    }
    const handleRefresh = () => {
        dispath({ type: 'refresh' }); 
        setTurn({
            value: 'blemish',
            cell: undefined,
            row: undefined
        }); 
    }
    const handleTurn = ({value, type}) => { 
        setTurn(prev => ({
            ...prev,
            value,
            type
        }));
    }
    useEffect(() => {
        const { cell, row } = turn; 
        if( cell !== undefined && row !== undefined) {
            const prev = ticTacToes[row][cell];
            if(!prev?.checked){  
                if( cell === row ){ 
                    console.log(row%3); 
                }
            } 
        } 
    }, [turn]);
    return (<div>
        {turn?.value === undefined 
            ? (<TicTacToePickPlayer 
                    handleTurn={handleTurn}
            />)
            : (<> 
                <div className="container header">
                    <TicTacToeIcons />
                    <div className="content turn">
                        <span className={`${turn.value}-s`}></span>
                        turn
                    </div>
                    <div className='content refresh'>
                        <button className="btn" onClick={handleRefresh}>
                            <span className='refresh'></span>
                        </button>
                    </div>
                </div>
                <div className="container game">
                    {ticTacToes.map( (elements, row) => {
                        return elements.map((item, cell) => { 
                            return (
                                <TicTacToeItem 
                                    key={`checkebox-${row}${cell}`} 
                                    row={row}
                                    cell={cell}
                                    {...item}
                                    turn={turn.value}
                                    handleChecked={handleChecked}
                                />
                            )
                        })
                    })} 
                </div>
                <div className="container dot-marker">
                    <TicTacToeMaker
                        text="x (you)"
                        value={blemish}
                        type="blemish"
                    />
                    <TicTacToeMaker
                        text="ties"
                        value={ties}
                        type="ties"
                    />
                    <TicTacToeMaker
                        text="o (cpu)"
                        value={ball}
                        type="ball"
                    />  
                </div>
            </>)
        }
        
    </div>);
}
 
export default TicTacToeApp;