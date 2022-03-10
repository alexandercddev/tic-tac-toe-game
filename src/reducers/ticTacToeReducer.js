

const ticTacToeReducer = ( state = [], action) => {
    switch (action?.type) {
        case 'checked': 
            const { row, cell, checked, value } = action.payload;
            return state.map( (elements, stateRow) => {
                if(stateRow === row) {
                    return elements.map((item, stateCell) => (
                        stateCell === cell &&  !item.checked
                            ? {...item, checked: !checked, value} 
                            : item
                    ));
                }
                return elements;
            });
        case 'refresh':  
            return state.map(elements => {
                return elements.map(item => ({
                    ...item,
                    checked: false,
                    value: ''
                }));
            });
        default:
            return  state;
    }
}

export {
    ticTacToeReducer
}
