const TicTacToeMaker = ({text, value, type}) => {
    return (<div className={`box color-${type} box-dot`}>
        <span className="text">{text}</span>
        <span className="value">{value}</span>
    </div>);
}
 
export default TicTacToeMaker;