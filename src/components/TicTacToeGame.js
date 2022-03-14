import TicTacToeIcons from "./TicTacToeIcons";
import TicTacToeItem from "./TicTacToeItem";
import TicTacToeMaker from "./TicTacToeMarker";

const TicTacToeGame = ({ 
    turn, 
    ticTacToes, 
    handleRefresh, 
    handleChecked,
    makers,
}) => {
    const {blemish, ties, ball} = makers;
    return (<>
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
    </>);
}
 
export default TicTacToeGame;