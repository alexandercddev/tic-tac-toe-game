import React, { useEffect, useReducer, useState } from 'react';
import { ticTacToeReducer } from '../reducers/ticTacToeReducer';
import TicTacToeItem from './TicTacToeItem';
import TicTacToeMaker from './TicTacToeMarker';
import TicTacToePickPlayer from './TicTacToePickPlayer';
import TicTacToeIcons from './TicTacToeIcons';
import TicTacToeGame from './TicTacToeGame';

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
    const [turn, setTurn] = useState({});
    const [makers, setMakers] = useState({
        blemish: 0,
        ties: 0,
        ball: 0,
    }); 
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
                ...prev,
                value: prev.value === 'ball' ? 'blemish' : 'ball',
                cell,
                row
            })); 
        } 
    }
    const handleRefresh = () => {
        dispath({ type: 'refresh' }); 
        setTurn((prev) => ({
            ...prev,
            value: 'blemish',
            cell: undefined,
            row: undefined
        })); 
    }
    const handleTurn = (data) => {  
        setTurn(prev => ({
            ...prev,
            ...data
        })); 
    }
    const getValue = num => {
        const number = num + 1;
        if(number % 2 && number % 3 ){
            return number % 2
        } else if(number % 3){
            return (num - 1) % 3
        } else if(number % 2){
            return (num + 1) % 2;
        }
        return 0;
    }
    useEffect(() => {
        const { value, type, player, row, cell } = turn;  
        if(type === 'cpu' &&  value !== player){ 
            console.log('Mi turno!!')
            setTimeout(() => {
                handleChecked({
                    target: {
                        checked: true
                    }, 
                }, getValue(row), getValue(cell));
            }, 500);
        }
    }, [ticTacToes, turn]);
    return (<div>
        {turn?.value === undefined 
            ? (<TicTacToePickPlayer 
                    handleTurn={handleTurn}
            />)
            : (<TicTacToeGame 
                    ticTacToes={ticTacToes}
                    turn={turn}
                    makers={makers}
                    handleChecked={handleChecked}
                    handleRefresh={handleRefresh}
            />)
        }
        
    </div>);
}
 
export default TicTacToeApp;