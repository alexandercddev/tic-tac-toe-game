
const TicTacToeItem = ({row, cell, checked, value, turn, handleChecked}) => {
    return (
        <label  
            className={`box hover-${turn}`} 
            htmlFor={`row-${row}-cell-${cell}`}> 
            <input 
                type='checkbox' 
                checked={checked}
                onChange= {(e) => handleChecked(e, row, cell)} 
                id={`row-${row}-cell-${cell}`}
            ></input>
            <span className={`${value}`} ></span> 
        </label>
    );
}
 
export default TicTacToeItem;