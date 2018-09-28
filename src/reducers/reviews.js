const initialState = {
    reviews: [
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },
        {
            name : "Alice",
            text : "Trevlig personal och god mat!",
            id : 0
        },
        {
            name : "Stefan",
            text : "Fin utsikt, bra mat.",
            id: 1
        },

    ]
}

const reviews = (state = initialState, action) => {
    const newState = {...state};
    /*if(action.type === 'SHOW') {
        return {
            ...state,
            reviews: state.reviews
        }
        
    }*/

    return newState;
}


export default reviews;