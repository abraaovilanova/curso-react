export default function reducer(state, action) {
    switch(action.type){
        case 'times7':
            return { ...state, number: state.number * 7 }
        case 'div25':
            return { ...state, number: state.number / 25 }
        case 'parseint':
            return { ...state, number: parseInt(state.number)}
        case 'n++':
            return { ...state, number: state.number + action.payload.n }
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default: 
            return state
    }

}